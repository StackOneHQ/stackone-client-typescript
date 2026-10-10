const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createRequire } = require('node:module');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const pkg = require('../package.json');
// ESLint already declares js-yaml; resolve through that package's locked dependency graph.
const eslintRequire = createRequire(require.resolve('eslint/package.json'));
const gen = eslintRequire('js-yaml').load(fs.readFileSync(path.join(root, 'gen.yaml'), 'utf8'));
const nativeArgs = ['--rootDir', 'src', '--types', 'estree,json-schema'];
const build = `node node_modules/@typescript/native/bin/tsc ${nativeArgs.join(' ')}`;
assert.equal(gen.typescript.additionalScripts.build, build);
assert.equal(pkg.scripts.build, build);
assert.equal(gen.typescript.additionalDependencies.devDependencies['@typescript/native'], 'npm:typescript@7.0.2');
assert.equal(pkg.devDependencies['@typescript/native'], 'npm:typescript@7.0.2');
assert.equal(pkg.devDependencies.typescript, '~5.8.3');

function compiler(packageName, args) {
  return execFileSync(process.execPath, [path.join(root, 'node_modules', packageName, 'bin/tsc'), ...args], {
    cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
  });
}
assert.equal(compiler('typescript', ['--version']).trim(), 'Version 5.8.3');
assert.equal(compiler('@typescript/native', ['--version']).trim(), 'Version 7.0.2');

function files(directory, prefix = '') {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const relative = path.join(prefix, entry.name);
    return entry.isDirectory() ? files(path.join(directory, entry.name), relative) : [relative];
  }).sort();
}

const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'stackone-sdk-compiler-parity-'));
try {
  const legacy = path.join(temporary, 'legacy');
  const native = path.join(temporary, 'native');
  compiler('typescript', ['--outDir', legacy]);
  compiler('@typescript/native', [...nativeArgs, '--outDir', native]);
  const legacyFiles = files(legacy);
  assert.ok(legacyFiles.length > 0, 'The compiler comparison must emit files');
  assert.deepEqual(files(native), legacyFiles, 'Both compilers must emit the same file paths');
  for (const relative of legacyFiles) {
    const before = fs.readFileSync(path.join(legacy, relative));
    const after = fs.readFileSync(path.join(native, relative));
    if (relative.endsWith('.map')) {
      const oldMap = JSON.parse(before);
      const newMap = JSON.parse(after);
      // Compiler mapping encodings may differ; preserve all source names, paths and content.
      delete oldMap.mappings;
      delete newMap.mappings;
      assert.deepEqual(newMap, oldMap, relative);
    } else {
      assert.ok(before.equals(after), `${relative} must be byte-identical`);
    }
  }
  console.log(`Generator configuration matches package.json; ${legacyFiles.length} emitted files have matching paths and JavaScript/declaration bytes.`);
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}

# SDK compiler

`npm run build` uses native TypeScript 7.0.2. Its dependency and build command are configured in the root `gen.yaml`, under `typescript.additionalDependencies` and `typescript.additionalScripts`, so Speakeasy can reproduce them. Keep these settings and the generated `package.json` aligned. The `typescript.version` value in `gen.yaml` is the SDK release version, not the compiler version.

TypeScript 5.8.3 remains installed for ESLint's compiler API. Both packages expose a `tsc` executable, so use `npm run build` for the native compiler and `node node_modules/typescript/bin/tsc` for the legacy compiler. Avoid relying on the ambiguous bare `tsc` shim.

The native command explicitly keeps `src` as the output root and includes the two ambient declaration packages that the legacy compiler discovers in this repository: `estree` and `json-schema`. It does not change strictness, source selection, or the package's output layout.

`node scripts/validate-toolchain.cjs` checks the generator settings against the generated package, verifies both compiler versions, and compares emitted paths, JavaScript, public declarations, and source-map metadata. Source-map mapping encodings may differ between compilers. Pull request CI also performs a normal `npm ci`, native build, and existing ESLint check.

These checks do not execute a complete Speakeasy regeneration. That remains a separate check using the repository's authenticated generation workflow and intended OpenAPI source bundle. The existing generation and publishing workflows are unchanged.

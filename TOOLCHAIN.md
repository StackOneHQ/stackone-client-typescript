# SDK compiler

`npm run build` uses native TypeScript 7.0.2. Its dependency and build command are configured in the root `gen.yaml`, under `typescript.additionalDependencies` and `typescript.additionalScripts`, so Speakeasy can reproduce them. Keep these settings and the generated `package.json` aligned. The `typescript.version` value in `gen.yaml` is the SDK release version, not the compiler version.

TypeScript 5.8.3 remains installed for ESLint's compiler API. Both packages expose a `tsc` executable, so use `npm run build` for the native compiler and `node node_modules/typescript/bin/tsc` for the legacy compiler. Avoid relying on the ambiguous bare `tsc` shim.

The native command explicitly keeps `src` as the output root and includes the two ambient declaration packages that the legacy compiler discovers in this repository: `estree` and `json-schema`. It does not change strictness, source selection, or the package's output layout.

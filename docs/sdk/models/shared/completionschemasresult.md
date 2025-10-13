# CompletionSchemasResult

The result of the completion

## Example Usage

```typescript
import { CompletionSchemasResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CompletionSchemasResult = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `sourceValue`                                                                         | *shared.CompletionSchemasSourceValue*                                                 | :heavy_minus_sign:                                                                    | The original result status from the provider before normalization.                    |
| `value`                                                                               | [shared.CompletionSchemasValue](../../../sdk/models/shared/completionschemasvalue.md) | :heavy_minus_sign:                                                                    | The StackOne unified result status.                                                   |
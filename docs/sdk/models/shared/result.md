# Result

The result of the assignment

## Example Usage

```typescript
import { Result } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Result = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `sourceValue`                                                                         | *shared.AssignmentSchemasSourceValue*                                                 | :heavy_minus_sign:                                                                    | The original result status from the provider before normalization.                    |
| `value`                                                                               | [shared.AssignmentSchemasValue](../../../sdk/models/shared/assignmentschemasvalue.md) | :heavy_minus_sign:                                                                    | The StackOne unified result status.                                                   |
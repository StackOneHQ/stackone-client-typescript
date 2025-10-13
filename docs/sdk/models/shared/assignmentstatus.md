# AssignmentStatus

The status of the assignment

## Example Usage

```typescript
import { AssignmentSchemasStatusValue, AssignmentStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssignmentStatus = {
  value: AssignmentSchemasStatusValue.InProgress,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                     | *shared.AssignmentSchemasStatusSourceValue*                                                       | :heavy_minus_sign:                                                                                | The original status value from the provider before normalization.                                 |                                                                                                   |
| `value`                                                                                           | [shared.AssignmentSchemasStatusValue](../../../sdk/models/shared/assignmentschemasstatusvalue.md) | :heavy_minus_sign:                                                                                | The StackOne unified assignment status.                                                           | in_progress                                                                                       |
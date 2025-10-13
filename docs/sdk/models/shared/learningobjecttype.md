# LearningObjectType

The learning object type of the assignment

## Example Usage

```typescript
import { LearningObjectType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LearningObjectType = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `sourceValue`                                                             | *shared.AssignmentSourceValue*                                            | :heavy_minus_sign:                                                        | The original learning object type from the provider before normalization. |
| `value`                                                                   | [shared.AssignmentValue](../../../sdk/models/shared/assignmentvalue.md)   | :heavy_minus_sign:                                                        | The StackOne unified learning object type.                                |
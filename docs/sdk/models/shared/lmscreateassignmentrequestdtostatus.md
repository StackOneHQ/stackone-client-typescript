# LmsCreateAssignmentRequestDtoStatus

The status of the assignment

## Example Usage

```typescript
import { LmsCreateAssignmentRequestDtoStatus, LmsCreateAssignmentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateAssignmentRequestDtoStatus = {
  value: LmsCreateAssignmentRequestDtoValue.InProgress,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                 | *shared.LmsCreateAssignmentRequestDtoSourceValue*                                                             | :heavy_minus_sign:                                                                                            | The original status value from the provider before normalization.                                             |                                                                                                               |
| `value`                                                                                                       | [shared.LmsCreateAssignmentRequestDtoValue](../../../sdk/models/shared/lmscreateassignmentrequestdtovalue.md) | :heavy_minus_sign:                                                                                            | The StackOne unified assignment status.                                                                       | in_progress                                                                                                   |
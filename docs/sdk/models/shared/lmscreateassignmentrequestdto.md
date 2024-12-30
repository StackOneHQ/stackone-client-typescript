# LmsCreateAssignmentRequestDto

## Example Usage

```typescript
import { LmsCreateAssignmentRequestDto, LmsCreateAssignmentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateAssignmentRequestDto = {
  createdAt: "2021-07-21T14:00:00.000Z",
  dueDate: "2021-07-21T14:00:00.000Z",
  learningObjectExternalReference: "learning-content-123",
  learningObjectId: "e3gd34-23tr21-er234-345er56",
  passthrough: {
    "other_known_names": "John Doe",
  },
  progress: 40,
  status: {
    value: LmsCreateAssignmentRequestDtoValue.InProgress,
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                     | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The date the assignment was created                                                                             | 2021-07-21T14:00:00.000Z                                                                                        |
| `dueDate`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The date the assignment is due to be completed                                                                  | 2021-07-21T14:00:00.000Z                                                                                        |
| `learningObjectExternalReference`                                                                               | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The external reference of the learning object associated with this assignment                                   | learning-content-123                                                                                            |
| `learningObjectId`                                                                                              | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The learning_object_id associated with this assignment                                                          | e3gd34-23tr21-er234-345er56                                                                                     |
| `passthrough`                                                                                                   | Record<string, *any*>                                                                                           | :heavy_minus_sign:                                                                                              | Value to pass through to the provider                                                                           | {<br/>"other_known_names": "John Doe"<br/>}                                                                     |
| `progress`                                                                                                      | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | The progress associated with this assigment                                                                     | 40                                                                                                              |
| `status`                                                                                                        | [shared.LmsCreateAssignmentRequestDtoStatus](../../../sdk/models/shared/lmscreateassignmentrequestdtostatus.md) | :heavy_minus_sign:                                                                                              | The status of the assignment                                                                                    |                                                                                                                 |
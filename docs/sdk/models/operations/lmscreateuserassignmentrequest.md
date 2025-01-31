# LmsCreateUserAssignmentRequest

## Example Usage

```typescript
import { LmsCreateUserAssignmentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { LmsCreateAssignmentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateUserAssignmentRequest = {
  lmsCreateAssignmentRequestDto: {
    createdAt: "2021-07-21T14:00:00.000Z",
    dueDate: "2021-07-21T14:00:00.000Z",
    externalReference: "e3gd34-23tr21-er234-345er56",
    learningObjectExternalReference: "learning-content-123",
    learningObjectId: "e3gd34-23tr21-er234-345er56",
    passthrough: {
      "other_known_names": "John Doe",
    },
    progress: 40,
    status: {
      value: LmsCreateAssignmentRequestDtoValue.Completed,
    },
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `lmsCreateAssignmentRequestDto`                                                                     | [shared.LmsCreateAssignmentRequestDto](../../../sdk/models/shared/lmscreateassignmentrequestdto.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `xAccountId`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | The account identifier                                                                              |
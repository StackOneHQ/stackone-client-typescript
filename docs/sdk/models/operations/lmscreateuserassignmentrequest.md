# LmsCreateUserAssignmentRequest

## Example Usage

```typescript
import { LmsCreateUserAssignmentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { LmsCreateAssignmentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateUserAssignmentRequest = {
  lmsCreateAssignmentRequestDto: {
    assignedAt: new Date("2021-07-21T14:00:00.000Z"),
    dueDate: new Date("2021-07-21T14:00:00.000Z"),
    learningObjectExternalReference: "learning-content-123",
    learningObjectId: "e3gd34-23tr21-er234-345er56",
    passthrough: {
      "other_known_names": "John Doe",
    },
    progress: 40,
    status: {
      value: LmsCreateAssignmentRequestDtoValue.InProgress,
    },
  },
  prefer: "heartbeat",
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lmsCreateAssignmentRequestDto`                                                                                                                                          | [shared.LmsCreateAssignmentRequestDto](../../../sdk/models/shared/lmscreateassignmentrequestdto.md)                                                                      | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |
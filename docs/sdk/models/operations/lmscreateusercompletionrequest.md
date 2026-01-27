# LmsCreateUserCompletionRequest

## Example Usage

```typescript
import { LmsCreateUserCompletionRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsCreateUserCompletionRequest = {
  lmsCreateCompletionRequestDto: {
    completedAt: new Date("2021-07-21T14:00:00.000Z"),
    learningObjectExternalReference: "learning-content-123",
    learningObjectId: "e3gd34-23tr21-er234-345er56",
    passthrough: {
      "other_known_names": "John Doe",
    },
    score: {
      percentage: 87,
      rawValue: "87 / 100",
    },
    timeSpent: "PT1H30M45S",
  },
  prefer: "heartbeat",
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lmsCreateCompletionRequestDto`                                                                                                                                          | [shared.LmsCreateCompletionRequestDto](../../../sdk/models/shared/lmscreatecompletionrequestdto.md)                                                                      | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |
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
    timeSpent: "PT1H30M45S",
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `lmsCreateCompletionRequestDto`                                                                     | [shared.LmsCreateCompletionRequestDto](../../../sdk/models/shared/lmscreatecompletionrequestdto.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `xAccountId`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | The account identifier                                                                              |
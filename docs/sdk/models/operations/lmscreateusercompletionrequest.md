# LmsCreateUserCompletionRequest

## Example Usage

```typescript
import { LmsCreateUserCompletionRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsCreateUserCompletionRequest = {
  lmsCreateCompletionRequestDto: {
    completedAt: "2021-07-21T14:00:00.000Z",
    contentExternalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-CONTENT",
    contentId: "16873-ENG-VIDEO-1",
    externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-COMPLETION",
    passthrough: {
      "other_known_names": "John Doe",
    },
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
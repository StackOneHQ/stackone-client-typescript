# LmsCreateCompletionRequestDto

## Example Usage

```typescript
import { LmsCreateCompletionRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateCompletionRequestDto = {
  completedAt: "2021-07-21T14:00:00.000Z",
  contentExternalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-CONTENT",
  contentId: "16873-ENG-VIDEO-1",
  externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-COMPLETION",
  passthrough: {
    "other_known_names": "John Doe",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `completedAt`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The date the content was completed                                                                              | 2021-07-21T14:00:00.000Z                                                                                        |
| `contentExternalReference`                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The external reference associated with this content                                                             | SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-CONTENT                                                                       |
| `contentId`                                                                                                     | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The content ID associated with this completion                                                                  | 16873-ENG-VIDEO-1                                                                                               |
| `externalId`                                                                                                    | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The external ID associated with this completion                                                                 | SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-COMPLETION                                                                    |
| `passthrough`                                                                                                   | Record<string, *any*>                                                                                           | :heavy_minus_sign:                                                                                              | Value to pass through to the provider                                                                           | {<br/>"other_known_names": "John Doe"<br/>}                                                                     |
| `result`                                                                                                        | [shared.LmsCreateCompletionRequestDtoResult](../../../sdk/models/shared/lmscreatecompletionrequestdtoresult.md) | :heavy_minus_sign:                                                                                              | The result of the completion                                                                                    |                                                                                                                 |
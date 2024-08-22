# LmsListCompletionsResponse

## Example Usage

```typescript
import { LmsListCompletionsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListCompletionsResponse = {
    completionsPaginated: {
        data: [
            {
                completedAt: "2021-07-21T14:00:00.000Z",
                contentId: "16873-ENG-VIDEO-1",
                externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-COMPLETION",
                id: "123456",
                passthrough: {
                    other_known_names: "John Doe",
                },
                remoteContentId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
                remoteExternalId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            },
        ],
    },
    contentType: "<value>",
    statusCode: 868126,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `completionsPaginated`                                                            | [shared.CompletionsPaginated](../../../sdk/models/shared/completionspaginated.md) | :heavy_minus_sign:                                                                | The completions with for the users with the given identifier were retrieved.      |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
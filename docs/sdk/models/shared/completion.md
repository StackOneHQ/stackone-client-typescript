# Completion

## Example Usage

```typescript
import { Completion } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Completion = {
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
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `completedAt`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | The date the content was completed                                        | 2021-07-21T14:00:00.000Z                                                  |
| `contentId`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | The content ID associated with this completion                            | 16873-ENG-VIDEO-1                                                         |
| `externalId`                                                              | *string*                                                                  | :heavy_minus_sign:                                                        | The external ID associated with this completion                           | SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-COMPLETION                              |
| `id`                                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | The ID associated with this completion                                    | 123456                                                                    |
| `passthrough`                                                             | Record<string, *any*>                                                     | :heavy_minus_sign:                                                        | Value to pass through to the provider                                     | {<br/>"other_known_names": "John Doe"<br/>}                               |
| `remoteContentId`                                                         | *string*                                                                  | :heavy_minus_sign:                                                        | Provider's unique identifier of the completion                            | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                      |
| `remoteExternalId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | Provider's unique identifier of the content                               | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                      |
| `remoteId`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | Provider's unique identifier                                              | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                      |
| `result`                                                                  | [shared.CompletionResult](../../../sdk/models/shared/completionresult.md) | :heavy_minus_sign:                                                        | The result of the completion                                              |                                                                           |
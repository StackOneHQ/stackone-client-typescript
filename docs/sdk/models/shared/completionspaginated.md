# CompletionsPaginated

## Example Usage

```typescript
import { CompletionsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CompletionsPaginated = {
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
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Completion](../../../sdk/models/shared/completion.md)[]   | :heavy_check_mark:                                                | N/A                                                               |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
# InAppTemplateResult

## Example Usage

```typescript
import { InAppMessagesValue, InAppTemplateResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: InAppTemplateResult = {
  data: {
    createdAt: new Date("2021-01-01T00:00:00.000Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    messages: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        messageType: {
          sourceValue: "Email",
          value: InAppMessagesValue.Email,
        },
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
    ],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    updatedAt: new Date("2021-01-01T00:00:00.000Z"),
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [shared.InAppTemplate](../../../sdk/models/shared/inapptemplate.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `raw`                                                               | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]   | :heavy_minus_sign:                                                  | N/A                                                                 |
# SmsTemplateResult

## Example Usage

```typescript
import { SmsMessagesValue, SmsTemplateResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: SmsTemplateResult = {
  data: {
    createdAt: new Date("2021-01-01T00:00:00.000Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    messages: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        messageType: {
          sourceValue: "Email",
          value: SmsMessagesValue.Email,
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

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.SmsTemplate](../../../sdk/models/shared/smstemplate.md)   | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
# MarketingCreateSmsTemplateRequestDto

## Example Usage

```typescript
import { MarketingCreateSmsTemplateRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingCreateSmsTemplateRequestDto = {
  messages: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      messageType: null,
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
  passthrough: {
    "other_known_names": "John Doe",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `messages`                                                        | [shared.SmsMessages](../../../sdk/models/shared/smsmessages.md)[] | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `name`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `passthrough`                                                     | Record<string, *any*>                                             | :heavy_minus_sign:                                                | Value to pass through to the provider                             | {<br/>"other_known_names": "John Doe"<br/>}                       |
| `tags`                                                            | *string*[]                                                        | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
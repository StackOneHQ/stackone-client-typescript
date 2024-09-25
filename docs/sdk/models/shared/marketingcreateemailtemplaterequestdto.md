# MarketingCreateEmailTemplateRequestDto

## Example Usage

```typescript
import { MarketingCreateEmailTemplateRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MarketingCreateEmailTemplateRequestDto = {
  messages: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      messageType: {
        sourceValue: "Email",
      },
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
  passthrough: {
    "other_known_names": "John Doe",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `messages`                                                            | [shared.EmailMessages](../../../sdk/models/shared/emailmessages.md)[] | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `passthrough`                                                         | Record<string, *any*>                                                 | :heavy_minus_sign:                                                    | Value to pass through to the provider                                 | {<br/>"other_known_names": "John Doe"<br/>}                           |
| `tags`                                                                | *string*[]                                                            | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
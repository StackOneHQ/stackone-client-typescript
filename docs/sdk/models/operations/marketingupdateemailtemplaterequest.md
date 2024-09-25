# MarketingUpdateEmailTemplateRequest

## Example Usage

```typescript
import { MarketingUpdateEmailTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingUpdateEmailTemplateRequest = {
  marketingCreateEmailTemplateRequestDto: {
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
  },
  id: "<id>",
  xAccountId: "<value>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `marketingCreateEmailTemplateRequestDto`                                                                              | [shared.MarketingCreateEmailTemplateRequestDto](../../../sdk/models/shared/marketingcreateemailtemplaterequestdto.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `xAccountId`                                                                                                          | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The account identifier                                                                                                |
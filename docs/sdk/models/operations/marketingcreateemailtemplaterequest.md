# MarketingCreateEmailTemplateRequest

## Example Usage

```typescript
import { MarketingCreateEmailTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingCreateEmailTemplateRequest = {
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
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `marketingCreateEmailTemplateRequestDto`                                                                              | [shared.MarketingCreateEmailTemplateRequestDto](../../../sdk/models/shared/marketingcreateemailtemplaterequestdto.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `xAccountId`                                                                                                          | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The account identifier                                                                                                |
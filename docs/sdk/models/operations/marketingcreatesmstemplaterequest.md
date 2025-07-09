# MarketingCreateSmsTemplateRequest

## Example Usage

```typescript
import { MarketingCreateSmsTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingCreateSmsTemplateRequest = {
  marketingCreateSmsTemplateRequestDto: {
    messages: null,
    passthrough: {
      "other_known_names": "John Doe",
    },
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `marketingCreateSmsTemplateRequestDto`                                                                            | [shared.MarketingCreateSmsTemplateRequestDto](../../../sdk/models/shared/marketingcreatesmstemplaterequestdto.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `xAccountId`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The account identifier                                                                                            |
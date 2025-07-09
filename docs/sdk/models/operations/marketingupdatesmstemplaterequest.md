# MarketingUpdateSmsTemplateRequest

## Example Usage

```typescript
import { MarketingUpdateSmsTemplateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MarketingUpdateSmsTemplateRequest = {
  marketingCreateSmsTemplateRequestDto: {
    messages: null,
    passthrough: {
      "other_known_names": "John Doe",
    },
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `marketingCreateSmsTemplateRequestDto`                                                                            | [shared.MarketingCreateSmsTemplateRequestDto](../../../sdk/models/shared/marketingcreatesmstemplaterequestdto.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `xAccountId`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The account identifier                                                                                            |
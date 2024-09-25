# AccountResult

## Example Usage

```typescript
import { AccountAddressSchemasValue, AccountAddressValue, AccountResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountResult = {
  data: {
    addresses: [
      {
        country: {
          sourceValue: "GB",
          value: AccountAddressSchemasValue.Gb,
        },
        locationType: {
          sourceValue: "Home",
          value: AccountAddressValue.Home,
        },
      },
    ],
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    industries: [
      "Information Technology",
      "Airlines & Airports",
      "Personal Care & Household Products",
    ],
    phoneNumbers: [
      "+1123425334",
    ],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteOwnerId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Account](../../../sdk/models/shared/account.md)           | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
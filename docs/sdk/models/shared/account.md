# Account

## Example Usage

```typescript
import { Account, AccountAddressSchemasValue, AccountAddressValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Account = {
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
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `addresses`                                                                                         | [shared.AccountAddress](../../../sdk/models/shared/accountaddress.md)[]                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `annualRevenue`                                                                                     | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | Timestamp when the account was created                                                              | 2021-01-01T01:01:01.000Z                                                                            |
| `description`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `id`                                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Unique identifier                                                                                   | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                |
| `industries`                                                                                        | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | Values of the industries                                                                            | [<br/>"Information Technology",<br/>"Airlines \u0026 Airports",<br/>"Personal Care \u0026 Household Products"<br/>] |
| `name`                                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `ownerId`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `phoneNumbers`                                                                                      | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | List of account phone numbers                                                                       | [<br/>"+1123425334"<br/>]                                                                           |
| `remoteId`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Provider's unique identifier                                                                        | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                |
| `remoteOwnerId`                                                                                     | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Provider's unique identifier of the owner                                                           | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                |
| `unifiedCustomFields`                                                                               | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Custom Unified Fields configured in your StackOne project                                           | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | Timestamp when the account was last updated                                                         | 2021-01-01T01:01:01.000Z                                                                            |
| `website`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
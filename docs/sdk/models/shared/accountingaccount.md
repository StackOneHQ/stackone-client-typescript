# AccountingAccount

## Example Usage

```typescript
import { AccountingAccount, AccountingAccountValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingAccount = {
  active: true,
  code: "4000",
  companyId: "company_123",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Cash",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {
    sourceValue: "asset",
    value: AccountingAccountValue.Asset,
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `active`                                          | *shared.Active*                                   | :heavy_minus_sign:                                | Whether the account is active                     | true                                              |
| `code`                                            | *string*                                          | :heavy_minus_sign:                                | External system's account code/number             | 4000                                              |
| `companyId`                                       | *string*                                          | :heavy_minus_sign:                                | ID of the company this account belongs to         | company_123                                       |
| `id`                                              | *string*                                          | :heavy_minus_sign:                                | Unique identifier                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3              |
| `name`                                            | *string*                                          | :heavy_minus_sign:                                | Name of the account                               | Cash                                              |
| `remoteId`                                        | *string*                                          | :heavy_minus_sign:                                | Provider's unique identifier                      | 8187e5da-dc77-475e-9949-af0f1fa4e4e3              |
| `type`                                            | [shared.Type](../../../sdk/models/shared/type.md) | :heavy_minus_sign:                                | Type of account                                   |                                                   |
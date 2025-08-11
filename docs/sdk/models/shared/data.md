# Data

## Example Usage

```typescript
import { AccountingAccountResultValue, Data } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Data = {
  active: true,
  code: "4000",
  companyId: "company_123",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Cash",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {
    sourceValue: "asset",
    value: AccountingAccountResultValue.Asset,
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `active`                                                                                        | *shared.AccountingAccountResultActive*                                                          | :heavy_minus_sign:                                                                              | Whether the account is active                                                                   | true                                                                                            |
| `code`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | External system's account code/number                                                           | 4000                                                                                            |
| `companyId`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | ID of the company this account belongs to                                                       | company_123                                                                                     |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unique identifier                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | Name of the account                                                                             | Cash                                                                                            |
| `remoteId`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Provider's unique identifier                                                                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `type`                                                                                          | [shared.AccountingAccountResultType](../../../sdk/models/shared/accountingaccountresulttype.md) | :heavy_minus_sign:                                                                              | Type of account                                                                                 |                                                                                                 |
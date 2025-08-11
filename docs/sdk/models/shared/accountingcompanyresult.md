# AccountingCompanyResult

## Example Usage

```typescript
import { AccountingCompanyResult, AccountingCompanyResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingCompanyResult = {
  data: {
    baseCurrency: {
      sourceValue: "USD",
      value: AccountingCompanyResultValue.Usd,
    },
    fiscalYearStartDay: 1,
    fiscalYearStartMonth: 1,
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Acme Corp",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [shared.AccountingCompanyResultData](../../../sdk/models/shared/accountingcompanyresultdata.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `raw`                                                                                           | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                               | :heavy_minus_sign:                                                                              | N/A                                                                                             |
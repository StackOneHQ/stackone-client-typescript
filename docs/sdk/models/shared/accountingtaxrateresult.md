# AccountingTaxRateResult

## Example Usage

```typescript
import { AccountingTaxRateResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingTaxRateResult = {
  data: {
    active: true,
    code: "TAX001",
    companyId: "company_123",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "VAT 7.5%",
    percentage: 7.5,
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [shared.AccountingTaxRateResultData](../../../sdk/models/shared/accountingtaxrateresultdata.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `raw`                                                                                           | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                               | :heavy_minus_sign:                                                                              | N/A                                                                                             |
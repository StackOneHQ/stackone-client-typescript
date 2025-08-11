# CurrencyCode

Currency code for the journal and all lines

## Example Usage

```typescript
import { AccountingJournalCreateRequestDtoValue, CurrencyCode } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CurrencyCode = {
  sourceValue: "USD",
  value: AccountingJournalCreateRequestDtoValue.Usd,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                         | *shared.AccountingJournalCreateRequestDtoSourceValue*                                                                 | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | USD                                                                                                                   |
| `value`                                                                                                               | [shared.AccountingJournalCreateRequestDtoValue](../../../sdk/models/shared/accountingjournalcreaterequestdtovalue.md) | :heavy_minus_sign:                                                                                                    | Default currency for the company                                                                                      | USD                                                                                                                   |
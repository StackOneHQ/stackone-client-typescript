# AccountType

The type of bank account

## Example Usage

```typescript
import { AccountType, HRISBankDetailsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountType = {
  sourceValue: "checking",
  value: HRISBankDetailsValue.Checking,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `sourceValue`                                                                     | *shared.HRISBankDetailsSourceValue*                                               | :heavy_minus_sign:                                                                | N/A                                                                               | checking                                                                          |
| `value`                                                                           | [shared.HRISBankDetailsValue](../../../sdk/models/shared/hrisbankdetailsvalue.md) | :heavy_minus_sign:                                                                | The type of bank account                                                          | checking                                                                          |
# AccountingJournalResultStatus

Status of the journal

## Example Usage

```typescript
import { AccountingJournalResultStatus, AccountingJournalResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingJournalResultStatus = {
  sourceValue: "draft",
  value: AccountingJournalResultValue.Draft,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                     | *shared.AccountingJournalResultSourceValue*                                                       | :heavy_minus_sign:                                                                                | N/A                                                                                               | draft                                                                                             |
| `value`                                                                                           | [shared.AccountingJournalResultValue](../../../sdk/models/shared/accountingjournalresultvalue.md) | :heavy_minus_sign:                                                                                | The journal status                                                                                | draft                                                                                             |
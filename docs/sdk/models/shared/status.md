# Status

Status of the journal

## Example Usage

```typescript
import { AccountingJournalValue, Status } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Status = {
  sourceValue: "draft",
  value: AccountingJournalValue.Draft,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `sourceValue`                                                                         | *shared.AccountingJournalSourceValue*                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   | draft                                                                                 |
| `value`                                                                               | [shared.AccountingJournalValue](../../../sdk/models/shared/accountingjournalvalue.md) | :heavy_minus_sign:                                                                    | The journal status                                                                    | draft                                                                                 |
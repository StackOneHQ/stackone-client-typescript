# JournalLineAccountType

Type of the account

## Example Usage

```typescript
import { JournalLineAccountType, JournalLineValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JournalLineAccountType = {
  sourceValue: "asset",
  value: JournalLineValue.Asset,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `sourceValue`                                                             | *shared.JournalLineSourceValue*                                           | :heavy_minus_sign:                                                        | N/A                                                                       | asset                                                                     |
| `value`                                                                   | [shared.JournalLineValue](../../../sdk/models/shared/journallinevalue.md) | :heavy_minus_sign:                                                        | Type of account                                                           | asset                                                                     |
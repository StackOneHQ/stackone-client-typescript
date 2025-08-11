# JournalLineCurrencyCode

Currency code for this line

## Example Usage

```typescript
import { JournalLineCurrencyCode, JournalLineSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JournalLineCurrencyCode = {
  sourceValue: "USD",
  value: JournalLineSchemasValue.Usd,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `sourceValue`                                                                           | *shared.JournalLineSchemasSourceValue*                                                  | :heavy_minus_sign:                                                                      | N/A                                                                                     | USD                                                                                     |
| `value`                                                                                 | [shared.JournalLineSchemasValue](../../../sdk/models/shared/journallineschemasvalue.md) | :heavy_minus_sign:                                                                      | Default currency for the company                                                        | USD                                                                                     |
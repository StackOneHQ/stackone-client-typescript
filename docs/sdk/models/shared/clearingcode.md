# ClearingCode

## Example Usage

```typescript
import { ClearingCode, ClearingCodeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ClearingCode = {
  type: {
    sourceValue: "sort_code",
    value: ClearingCodeValue.SortCode,
  },
  value: "12-34-56",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `type`                                                                    | [shared.ClearingCodeType](../../../sdk/models/shared/clearingcodetype.md) | :heavy_minus_sign:                                                        | The type of clearing code                                                 |                                                                           |
| `value`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | The clearing code value                                                   | 12-34-56                                                                  |
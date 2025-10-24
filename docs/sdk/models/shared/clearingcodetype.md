# ClearingCodeType

The type of clearing code

## Example Usage

```typescript
import { ClearingCodeType, ClearingCodeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ClearingCodeType = {
  sourceValue: "sort_code",
  value: ClearingCodeValue.SortCode,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sourceValue`                                                               | *shared.ClearingCodeSourceValue*                                            | :heavy_minus_sign:                                                          | N/A                                                                         | sort_code                                                                   |
| `value`                                                                     | [shared.ClearingCodeValue](../../../sdk/models/shared/clearingcodevalue.md) | :heavy_minus_sign:                                                          | The type of clearing code                                                   | sort_code                                                                   |
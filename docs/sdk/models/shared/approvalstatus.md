# ApprovalStatus

The approval status of the shift

## Example Usage

```typescript
import { ApprovalStatus, HrisShiftValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApprovalStatus = {
  sourceValue: "Approved",
  value: HrisShiftValue.Approved,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `sourceValue`                                                         | *shared.HrisShiftSourceValue*                                         | :heavy_minus_sign:                                                    | N/A                                                                   | Approved                                                              |
| `value`                                                               | [shared.HrisShiftValue](../../../sdk/models/shared/hrisshiftvalue.md) | :heavy_minus_sign:                                                    | The approval status of the shift                                      | approved                                                              |
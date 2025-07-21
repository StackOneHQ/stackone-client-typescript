# HrisShiftResultApprovalStatus

The approval status of the shift

## Example Usage

```typescript
import { HrisShiftResultApprovalStatus, HrisShiftResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftResultApprovalStatus = {
  sourceValue: "Approved",
  value: HrisShiftResultValue.Approved,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `sourceValue`                                                                     | *shared.HrisShiftResultSourceValue*                                               | :heavy_minus_sign:                                                                | N/A                                                                               | Approved                                                                          |
| `value`                                                                           | [shared.HrisShiftResultValue](../../../sdk/models/shared/hrisshiftresultvalue.md) | :heavy_minus_sign:                                                                | The approval status of the shift                                                  | approved                                                                          |
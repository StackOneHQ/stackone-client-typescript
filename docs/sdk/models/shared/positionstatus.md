# PositionStatus

Status of the position

## Example Usage

```typescript
import { PositionStatus, PositionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PositionStatus = {
  value: PositionValue.Open,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `sourceValue`                                                       | *shared.PositionSourceValue*                                        | :heavy_minus_sign:                                                  | The source value of the position status.                            |                                                                     |
| `value`                                                             | [shared.PositionValue](../../../sdk/models/shared/positionvalue.md) | :heavy_minus_sign:                                                  | The status of the position.                                         | open                                                                |
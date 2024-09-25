# RejectedReasonType

## Example Usage

```typescript
import { RejectedReasonType, RejectedReasonValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: RejectedReasonType = {
  sourceValue: "RejectedByOrg",
  value: RejectedReasonValue.RejectedByOrganization,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `sourceValue`                                                                   | *shared.RejectedReasonSourceValue*                                              | :heavy_minus_sign:                                                              | The source value of the rejected reason type.                                   | RejectedByOrg                                                                   |
| `value`                                                                         | [shared.RejectedReasonValue](../../../sdk/models/shared/rejectedreasonvalue.md) | :heavy_minus_sign:                                                              | The type of the rejected reason.                                                | rejected_by_organization                                                        |
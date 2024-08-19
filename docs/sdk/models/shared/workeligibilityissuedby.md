# WorkEligibilityIssuedBy

The country code of the issued by authority

## Example Usage

```typescript
import { WorkEligibilityIssuedBy, WorkEligibilityValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: WorkEligibilityIssuedBy = {
    value: WorkEligibilityValue.Us,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `sourceValue`                                                                     | *shared.WorkEligibilitySourceValue*                                               | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `value`                                                                           | [shared.WorkEligibilityValue](../../../sdk/models/shared/workeligibilityvalue.md) | :heavy_minus_sign:                                                                | The ISO3166-1 Alpha2 Code of the Country                                          | US                                                                                |
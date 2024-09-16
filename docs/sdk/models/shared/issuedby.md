# IssuedBy

The country code of the issued by authority

## Example Usage

```typescript
import { HrisCreateWorkEligibilityRequestDtoValue, IssuedBy } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IssuedBy = {
  value: HrisCreateWorkEligibilityRequestDtoValue.Us,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                             | *shared.HrisCreateWorkEligibilityRequestDtoSourceValue*                                                                   | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |                                                                                                                           |
| `value`                                                                                                                   | [shared.HrisCreateWorkEligibilityRequestDtoValue](../../../sdk/models/shared/hriscreateworkeligibilityrequestdtovalue.md) | :heavy_minus_sign:                                                                                                        | The ISO3166-1 Alpha2 Code of the Country                                                                                  | US                                                                                                                        |
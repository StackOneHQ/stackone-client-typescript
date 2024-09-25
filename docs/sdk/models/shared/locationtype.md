# LocationType

The location type

## Example Usage

```typescript
import { AccountAddressValue, LocationType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LocationType = {
  sourceValue: "Home",
  value: AccountAddressValue.Home,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `sourceValue`                                                                   | *shared.AccountAddressSourceValue*                                              | :heavy_minus_sign:                                                              | The source value of the location type.                                          | Home                                                                            |
| `value`                                                                         | [shared.AccountAddressValue](../../../sdk/models/shared/accountaddressvalue.md) | :heavy_minus_sign:                                                              | The type of the location.                                                       | home                                                                            |
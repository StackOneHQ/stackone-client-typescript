# LocationType

The location type

## Example Usage

```typescript
import { AccountAddressSchemasValue, LocationType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LocationType = {
  sourceValue: "Home",
  value: AccountAddressSchemasValue.Home,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                 | *shared.AccountAddressSchemasSourceValue*                                                     | :heavy_minus_sign:                                                                            | The source value of the location type.                                                        | Home                                                                                          |
| `value`                                                                                       | [shared.AccountAddressSchemasValue](../../../sdk/models/shared/accountaddressschemasvalue.md) | :heavy_minus_sign:                                                                            | The type of the location.                                                                     | home                                                                                          |
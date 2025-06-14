# HrisCreateEmployeeRequestDtoHomeLocation

The employee home location

## Example Usage

```typescript
import { HrisCreateEmployeeRequestDtoHomeLocation } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoHomeLocation = {
  city: "Grantham",
  country: null,
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Woolsthorpe Manor",
  passthrough: {
    "other_known_names": "John Doe",
  },
  phoneNumber: "+44 1476 860 364",
  state: {},
  street1: "Water Lane",
  street2: "Woolsthorpe by Colsterworth",
  zipCode: "NG33 5NR",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `city`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The city where the location is situated                                                                         | Grantham                                                                                                        |
| `country`                                                                                                       | [shared.HrisCreateEmployeeRequestDtoCountry](../../../sdk/models/shared/hriscreateemployeerequestdtocountry.md) | :heavy_minus_sign:                                                                                              | The country code                                                                                                |                                                                                                                 |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Unique identifier                                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                            |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The name of the location                                                                                        | Woolsthorpe Manor                                                                                               |
| `passthrough`                                                                                                   | Record<string, *any*>                                                                                           | :heavy_minus_sign:                                                                                              | Value to pass through to the provider                                                                           | {<br/>"other_known_names": "John Doe"<br/>}                                                                     |
| `phoneNumber`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The phone number of the location                                                                                | +44 1476 860 364                                                                                                |
| `state`                                                                                                         | [shared.State](../../../sdk/models/shared/state.md)                                                             | :heavy_minus_sign:                                                                                              | The ISO3166-2 sub division where the location is situated                                                       | GB-LIN                                                                                                          |
| `street1`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The first line of the address                                                                                   | Water Lane                                                                                                      |
| `street2`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The second line of the address                                                                                  | Woolsthorpe by Colsterworth                                                                                     |
| `zipCode`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The ZIP code/Postal code of the location                                                                        | NG33 5NR                                                                                                        |
# HRISLocationsPaginated

## Example Usage

```typescript
import { HRISLocationSchemasValue, HRISLocationsPaginated, HRISLocationValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISLocationsPaginated = {
  data: [
    {
      city: "Grantham",
      country: {
        value: HRISLocationValue.Us,
      },
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      employeeId: "1687-3",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      locationType: {
        sourceValue: "Home",
        value: HRISLocationSchemasValue.Home,
      },
      name: "Woolsthorpe Manor",
      phoneNumber: "+44 1476 860 364",
      remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      state: "Lincolnshire",
      street1: "Water Lane",
      street2: "Woolsthorpe by Colsterworth",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      zipCode: "NG33 5NR",
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.HRISLocation](../../../sdk/models/shared/hrislocation.md)[]                                                     | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
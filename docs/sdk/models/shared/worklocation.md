# WorkLocation

The employee work location

## Example Usage

```typescript
import {
  EmployeeSchemasWorkLocationLocationTypeValue,
  EmployeeSchemasWorkLocationValue,
  WorkLocation,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: WorkLocation = {
  city: "Grantham",
  country: {
    value: EmployeeSchemasWorkLocationValue.Us,
  },
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  employeeId: "1687-3",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  locationType: {
    sourceValue: "Home",
    value: EmployeeSchemasWorkLocationLocationTypeValue.Home,
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
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `city`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The city where the location is situated                                                         | Grantham                                                                                        |
| `country`                                                                                       | [shared.EmployeeSchemasCountry](../../../sdk/models/shared/employeeschemascountry.md)           | :heavy_minus_sign:                                                                              | The country code                                                                                |                                                                                                 |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | The created_at date                                                                             | 2021-01-01T01:01:01.000Z                                                                        |
| `employeeId`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | The employee ID                                                                                 | 1687-3                                                                                          |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unique identifier                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `locationType`                                                                                  | [shared.EmployeeSchemasLocationType](../../../sdk/models/shared/employeeschemaslocationtype.md) | :heavy_minus_sign:                                                                              | The location type                                                                               | work                                                                                            |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The name of the location                                                                        | Woolsthorpe Manor                                                                               |
| `phoneNumber`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | The phone number of the location                                                                | +44 1476 860 364                                                                                |
| `remoteEmployeeId`                                                                              | *string*                                                                                        | :heavy_minus_sign:                                                                              | Provider's unique identifier of the employee                                                    | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                            |
| `remoteId`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Provider's unique identifier                                                                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `state`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | The state where the location is situated                                                        | Lincolnshire                                                                                    |
| `street1`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | The first line of the address                                                                   | Water Lane                                                                                      |
| `street2`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | The second line of the address                                                                  | Woolsthorpe by Colsterworth                                                                     |
| `unifiedCustomFields`                                                                           | Record<string, *any*>                                                                           | :heavy_minus_sign:                                                                              | Custom Unified Fields configured in your StackOne project                                       | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | The updated_at date                                                                             | 2021-01-01T01:01:01.000Z                                                                        |
| `zipCode`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | The ZIP code/Postal code of the location                                                        | NG33 5NR                                                                                        |
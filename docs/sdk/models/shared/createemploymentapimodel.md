# CreateEmploymentApiModel

## Example Usage

```typescript
import {
  CreateEmploymentApiModel,
  CreateEmploymentApiModelSchemasPayFrequencyValue,
  CreateEmploymentApiModelSchemasPayPeriodValue,
  CreateEmploymentApiModelSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateEmploymentApiModel = {
  effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
  employeeId: "1687-3",
  employmentContractType: {},
  employmentType: {
    sourceValue: "Permanent",
    value: CreateEmploymentApiModelSchemasValue.Permanent,
  },
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  jobTitle: "Software Engineer",
  payCurrency: "USD",
  payFrequency: {
    sourceValue: "Hourly",
    value: CreateEmploymentApiModelSchemasPayFrequencyValue.Hourly,
  },
  payPeriod: {
    sourceValue: "Hour",
    value: CreateEmploymentApiModelSchemasPayPeriodValue.Hour,
  },
  payRate: "40.00",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `effectiveDate`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The effective date of the employment contract                                                 | 2021-01-01T01:01:01.000Z                                                                      |
| `employeeId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The employee ID associated with this employment                                               | 1687-3                                                                                        |
| `employmentContractType`                                                                      | [shared.EmploymentContractType](../../../sdk/models/shared/employmentcontracttype.md)         | :heavy_minus_sign:                                                                            | The employment work schedule type (e.g., full-time, part-time)                                | full_time                                                                                     |
| `employmentType`                                                                              | [shared.EmploymentType](../../../sdk/models/shared/employmenttype.md)                         | :heavy_minus_sign:                                                                            | The type of employment (e.g., contractor, permanent)                                          | permanent                                                                                     |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `jobTitle`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The job title of the employee                                                                 | Software Engineer                                                                             |
| `payCurrency`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The currency used for pay                                                                     | USD                                                                                           |
| `payFrequency`                                                                                | [shared.PayFrequency](../../../sdk/models/shared/payfrequency.md)                             | :heavy_minus_sign:                                                                            | The pay frequency                                                                             | hourly                                                                                        |
| `payPeriod`                                                                                   | [shared.PayPeriod](../../../sdk/models/shared/payperiod.md)                                   | :heavy_minus_sign:                                                                            | The pay period                                                                                | monthly                                                                                       |
| `payRate`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The pay rate for the employee                                                                 | 40.00                                                                                         |
| `unifiedCustomFields`                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom Unified Fields configured in your StackOne project                                     | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
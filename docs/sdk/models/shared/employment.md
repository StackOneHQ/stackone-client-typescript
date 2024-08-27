# Employment

## Example Usage

```typescript
import {
  Employment,
  EmploymentSchemasPayFrequencyValue,
  EmploymentSchemasPayPeriodValue,
  EmploymentSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Employment = {
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
    employeeId: "1687-3",
    employmentContractType: {},
    employmentType: {
        sourceValue: true,
        value: EmploymentSchemasValue.Permanent,
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    jobTitle: "Software Engineer",
    payCurrency: "USD",
    payFrequency: {
        sourceValue: "Hourly",
        value: EmploymentSchemasPayFrequencyValue.Hourly,
    },
    payPeriod: {
        sourceValue: true,
        value: EmploymentSchemasPayPeriodValue.Hour,
    },
    payRate: "40.00",
    remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_minus_sign:                                                                                        | The created_at date                                                                                       | 2021-01-01T01:01:01.000Z                                                                                  |
| `effectiveDate`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_minus_sign:                                                                                        | The effective date of the employment contract                                                             | 2021-01-01T01:01:01.000Z                                                                                  |
| `employeeId`                                                                                              | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The employee ID associated with this employment                                                           | 1687-3                                                                                                    |
| `employmentContractType`                                                                                  | [shared.EmploymentEmploymentContractType](../../../sdk/models/shared/employmentemploymentcontracttype.md) | :heavy_minus_sign:                                                                                        | The employment work schedule type (e.g., full-time, part-time)                                            | full_time                                                                                                 |
| `employmentType`                                                                                          | [shared.EmploymentEmploymentType](../../../sdk/models/shared/employmentemploymenttype.md)                 | :heavy_minus_sign:                                                                                        | The type of employment (e.g., contractor, permanent)                                                      | permanent                                                                                                 |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Unique identifier                                                                                         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                      |
| `jobTitle`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The job title of the employee                                                                             | Software Engineer                                                                                         |
| `payCurrency`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The currency used for pay                                                                                 | USD                                                                                                       |
| `payFrequency`                                                                                            | [shared.PayFrequency](../../../sdk/models/shared/payfrequency.md)                                         | :heavy_minus_sign:                                                                                        | The pay frequency                                                                                         | hourly                                                                                                    |
| `payPeriod`                                                                                               | [shared.PayPeriod](../../../sdk/models/shared/payperiod.md)                                               | :heavy_minus_sign:                                                                                        | The pay period                                                                                            | monthly                                                                                                   |
| `payRate`                                                                                                 | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The pay rate for the employee                                                                             | 40.00                                                                                                     |
| `remoteEmployeeId`                                                                                        | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Provider's unique identifier of the employee associated with this employment                              | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                      |
| `remoteId`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Provider's unique identifier                                                                              | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                      |
| `updatedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_minus_sign:                                                                                        | The updated_at date                                                                                       | 2021-01-01T01:01:01.000Z                                                                                  |
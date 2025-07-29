# Employment

## Example Usage

```typescript
import {
  Employment,
  EmploymentManagerApiModelValue,
  EmploymentSchemasDepartmentValue,
  EmploymentSchemasDivisionValue,
  EmploymentSchemasPayFrequencyValue,
  EmploymentSchemasPayPeriodValue,
  EmploymentSchemasWorkTimeValue,
  HRISCostCenterValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Employment = {
  active: true,
  contractType: null,
  costCenters: [
    {
      companyId: "1234567890",
      distributionPercentage: 85,
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Engineering",
      ownerIds: [
        "cxIQNjUyEDM0",
        "cxIQNjQzNzA0MQ",
      ],
      parentIds: [
        "cxIQNjUyNDM0",
        "cxIQNjQzNzI0MQ",
      ],
      remoteCompanyId: "1234567890",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteOwnerIds: [
        "475364",
        "4327652",
      ],
      remoteParentIds: [
        "652434",
        "6437241",
      ],
      type: {
        value: HRISCostCenterValue.Team,
      },
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
  ],
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  department: {
    companyId: "1234567890",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Engineering",
    ownerIds: [
      "cxIQNjUyEDM0",
      "cxIQNjQzNzA0MQ",
    ],
    parentIds: [
      "cxIQNjUyNDM0",
      "cxIQNjQzNzI0MQ",
    ],
    remoteCompanyId: "1234567890",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteOwnerIds: [
      "475364",
      "4327652",
    ],
    remoteParentIds: [
      "652434",
      "6437241",
    ],
    type: {
      value: EmploymentSchemasDepartmentValue.Team,
    },
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
  division: {
    companyId: "1234567890",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Engineering",
    ownerIds: [
      "cxIQNjUyEDM0",
      "cxIQNjQzNzA0MQ",
    ],
    parentIds: [
      "cxIQNjUyNDM0",
      "cxIQNjQzNzI0MQ",
    ],
    remoteCompanyId: "1234567890",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteOwnerIds: [
      "475364",
      "4327652",
    ],
    remoteParentIds: [
      "652434",
      "6437241",
    ],
    type: {
      value: EmploymentSchemasDivisionValue.Team,
    },
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
  effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
  employeeId: "1687-3",
  endDate: new Date("2021-01-01T01:01:01.000Z"),
  fte: 1,
  grade: {
    description: "Mid-level employee demonstrating proficiency and autonomy.",
    id: "1687-3",
    name: "1687-4",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  job: {
    description: {
      text: "Testing the laws of motion",
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    ownerId: "5356",
    parentId: "7577",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    title: "Software Engineer",
  },
  jobTitle: "Software Engineer",
  manager: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      role: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        label: "Admin",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        roleType: {
          value: EmploymentManagerApiModelValue.Admin,
        },
      },
    },
  ],
  payCurrency: "USD",
  payFrequency: {
    sourceValue: "Hourly",
    value: EmploymentSchemasPayFrequencyValue.Hourly,
  },
  payPeriod: {
    sourceValue: "Hour",
    value: EmploymentSchemasPayPeriodValue.Hour,
  },
  payRate: "40.00",
  payrollCode: "PC1",
  remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    label: "Permanent",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    type: {},
  },
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  workTime: {
    duration: "P0Y0M0DT8H0M0S",
    durationUnit: {
      value: EmploymentSchemasWorkTimeValue.Month,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             | Example                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                                | *shared.EmploymentActive*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                      | The employment active status                                                                                                                                                            | true                                                                                                                                                                                    |
| `contractType`                                                                                                                                                                          | [shared.ContractType](../../../sdk/models/shared/contracttype.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                      | The employment work schedule type                                                                                                                                                       |                                                                                                                                                                                         |
| ~~`costCenter`~~                                                                                                                                                                        | [shared.CostCenter](../../../sdk/models/shared/costcenter.md)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The employee cost_center                               |                                                                                                                                                                                         |
| `costCenters`                                                                                                                                                                           | [shared.HRISCostCenter](../../../sdk/models/shared/hriscostcenter.md)[]                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                      | The employee cost_centers                                                                                                                                                               |                                                                                                                                                                                         |
| `createdAt`                                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                           | :heavy_minus_sign:                                                                                                                                                                      | The created_at date                                                                                                                                                                     | 2021-01-01T01:01:01.000Z                                                                                                                                                                |
| `department`                                                                                                                                                                            | [shared.EmploymentDepartment](../../../sdk/models/shared/employmentdepartment.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                      | The employee department                                                                                                                                                                 |                                                                                                                                                                                         |
| `division`                                                                                                                                                                              | [shared.Division](../../../sdk/models/shared/division.md)                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                      | The employee division                                                                                                                                                                   |                                                                                                                                                                                         |
| `effectiveDate`                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                           | :heavy_minus_sign:                                                                                                                                                                      | The effective date of the employment contract                                                                                                                                           | 2021-01-01T01:01:01.000Z                                                                                                                                                                |
| `employeeId`                                                                                                                                                                            | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The employee ID associated with this employment                                                                                                                                         | 1687-3                                                                                                                                                                                  |
| ~~`employmentContractType`~~                                                                                                                                                            | [shared.EmploymentEmploymentContractType](../../../sdk/models/shared/employmentemploymentcontracttype.md)                                                                               | :heavy_minus_sign:                                                                                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The employment work schedule type (e.g., full-time, part-time) | full_time                                                                                                                                                                               |
| ~~`employmentType`~~                                                                                                                                                                    | [shared.EmploymentEmploymentType](../../../sdk/models/shared/employmentemploymenttype.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The type of employment (e.g., contractor, permanent)   | permanent                                                                                                                                                                               |
| `endDate`                                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                           | :heavy_minus_sign:                                                                                                                                                                      | The end date of employment                                                                                                                                                              | 2021-01-01T01:01:01.000Z                                                                                                                                                                |
| `fte`                                                                                                                                                                                   | *number*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | the employee's working percentage relative to a full-time employee                                                                                                                      | 1                                                                                                                                                                                       |
| `grade`                                                                                                                                                                                 | [shared.EmploymentGrade](../../../sdk/models/shared/employmentgrade.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                      | Represents the employee’s position within the organizational hierarchy.                                                                                                                 |                                                                                                                                                                                         |
| `id`                                                                                                                                                                                    | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | Unique identifier                                                                                                                                                                       | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                                                                                    |
| `job`                                                                                                                                                                                   | [shared.EmploymentJob](../../../sdk/models/shared/employmentjob.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                      | The job of employee                                                                                                                                                                     |                                                                                                                                                                                         |
| `jobTitle`                                                                                                                                                                              | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The job title of the employee                                                                                                                                                           | Software Engineer                                                                                                                                                                       |
| `manager`                                                                                                                                                                               | [shared.EmploymentManagerApiModel](../../../sdk/models/shared/employmentmanagerapimodel.md)[]                                                                                           | :heavy_minus_sign:                                                                                                                                                                      | The employee manager                                                                                                                                                                    |                                                                                                                                                                                         |
| `payCurrency`                                                                                                                                                                           | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The currency used for pay                                                                                                                                                               | USD                                                                                                                                                                                     |
| `payFrequency`                                                                                                                                                                          | [shared.EmploymentPayFrequency](../../../sdk/models/shared/employmentpayfrequency.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                                                      | The pay frequency                                                                                                                                                                       | hourly                                                                                                                                                                                  |
| `payPeriod`                                                                                                                                                                             | [shared.EmploymentPayPeriod](../../../sdk/models/shared/employmentpayperiod.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                      | The pay period                                                                                                                                                                          | monthly                                                                                                                                                                                 |
| `payRate`                                                                                                                                                                               | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The pay rate for the employee                                                                                                                                                           | 40.00                                                                                                                                                                                   |
| `payrollCode`                                                                                                                                                                           | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The payroll code of the employee                                                                                                                                                        | PC1                                                                                                                                                                                     |
| `remoteEmployeeId`                                                                                                                                                                      | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | Provider's unique identifier of the employee associated with this employment                                                                                                            | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                                                                                                    |
| `remoteId`                                                                                                                                                                              | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | Provider's unique identifier                                                                                                                                                            | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                                                                                    |
| ~~`startDate`~~                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                           | :heavy_minus_sign:                                                                                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The start_date of employment                           | 2021-01-01T01:01:01.000Z                                                                                                                                                                |
| `type`                                                                                                                                                                                  | [shared.EmploymentSchemasType](../../../sdk/models/shared/employmentschemastype.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                                                      | The type of employment                                                                                                                                                                  |                                                                                                                                                                                         |
| `unifiedCustomFields`                                                                                                                                                                   | Record<string, *any*>                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                      | Custom Unified Fields configured in your StackOne project                                                                                                                               | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>}                                                                                |
| `updatedAt`                                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                           | :heavy_minus_sign:                                                                                                                                                                      | The updated_at date                                                                                                                                                                     | 2021-01-01T01:01:01.000Z                                                                                                                                                                |
| `workTime`                                                                                                                                                                              | [shared.EmploymentWorkTime](../../../sdk/models/shared/employmentworktime.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                                      | N/A                                                                                                                                                                                     |                                                                                                                                                                                         |
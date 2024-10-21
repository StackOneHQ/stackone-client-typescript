# Employee

## Example Usage

```typescript
import {
  CountryCodeEnumValue,
  Employee,
  EmployeeSchemasEmploymentTypeValue,
  EmployeeSchemasHomeLocationLocationTypeValue,
  EmployeeSchemasHomeLocationValue,
  EmployeeSchemasNationalIdentityNumberTypeValue,
  EmployeeSchemasNationalIdentityNumberValue,
  EmployeeSchemasPreferredLanguageValue,
  EmployeeSchemasWorkLocationLocationTypeValue,
  EmployeeSchemasWorkLocationValue,
  EmploymentSchemasPayFrequencyValue,
  EmploymentSchemasPayPeriodValue,
  EmploymentSchemasValue,
  HRISGroupValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Employee = {
  avatar: {},
  avatarUrl: "https://example.com/avatar.png",
  benefits: [
    {
      createdAt: new Date("2021-01-01T00:00:00Z"),
      description: "Health insurance for employees",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Health Insurance",
      provider: "Aetna",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      updatedAt: new Date("2021-01-01T00:00:00Z"),
    },
  ],
  birthday: new Date("2021-01-01T00:00:00Z"),
  citizenships: [
    {
      value: CountryCodeEnumValue.Us,
    },
  ],
  company: {
    createdAt: new Date("2023-02-23T00:00:00.000Z"),
    displayName: "StackOne",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "StackOne Technologies PLC",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    updatedAt: new Date("2024-02-23T00:00:00.000Z"),
  },
  companyName: "Example Corp",
  costCenters: [
    {
      distributionPercentage: 100,
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "R&D",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  customFields: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Training Completion Status",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      value: "Completed",
      valueId: "value_456",
    },
  ],
  dateOfBirth: new Date("1990-01-01T00:00.000Z"),
  department: "Physics",
  departmentId: "3093",
  displayName: "Sir Issac Newton",
  employeeNumber: "125",
  employmentContractType: {},
  employmentStatus: {},
  employmentType: {
    sourceValue: "Permanent",
    value: EmployeeSchemasEmploymentTypeValue.Permanent,
  },
  employments: [
    {
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
      employeeId: "1687-3",
      employmentContractType: {},
      employmentType: {
        sourceValue: "Permanent",
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
        sourceValue: "Hour",
        value: EmploymentSchemasPayPeriodValue.Hour,
      },
      payRate: "40.00",
      remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  ],
  ethnicity: {},
  firstName: "Issac",
  gender: {},
  groups: [
    {
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
        value: HRISGroupValue.Team,
      },
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
  ],
  hireDate: new Date("2021-01-01T00:00.000Z"),
  homeLocation: {
    city: "Grantham",
    country: {
      value: EmployeeSchemasHomeLocationValue.Us,
    },
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    employeeId: "1687-3",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    locationType: {
      sourceValue: "Home",
      value: EmployeeSchemasHomeLocationLocationTypeValue.Home,
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
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  jobDescription: {
    text: "Testing the laws of motion",
  },
  jobId: "5290",
  jobTitle: "Physicist",
  lastName: "Newton",
  managerId: "67890",
  maritalStatus: {},
  name: "Issac Newton",
  nationalIdentityNumber: {
    country: {
      value: EmployeeSchemasNationalIdentityNumberValue.Us,
    },
    type: {
      value: EmployeeSchemasNationalIdentityNumberTypeValue.Ssn,
    },
    value: "123456789",
  },
  personalEmail: "isaac.newton@example.com",
  personalPhoneNumber: "+1234567890",
  preferredLanguage: {
    value: EmployeeSchemasPreferredLanguageValue.Eng,
  },
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteManagerId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  startDate: new Date("2021-01-01T00:00.000Z"),
  tenure: 2,
  terminationDate: new Date("2021-01-01T00:00:00Z"),
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  workAnniversary: new Date("2021-01-01T00:00:00Z"),
  workEmail: "newton@example.com",
  workLocation: {
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
  },
  workPhoneNumber: "+1234567890",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `avatar`                                                                                              | [shared.Avatar](../../../sdk/models/shared/avatar.md)                                                 | :heavy_minus_sign:                                                                                    | The employee avatar                                                                                   | https://example.com/avatar.png                                                                        |
| `avatarUrl`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee avatar Url                                                                               | https://example.com/avatar.png                                                                        |
| `benefits`                                                                                            | [shared.HRISBenefit](../../../sdk/models/shared/hrisbenefit.md)[]                                     | :heavy_minus_sign:                                                                                    | Current benefits of the employee                                                                      |                                                                                                       |
| `birthday`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The employee birthday                                                                                 | 2021-01-01T00:00:00Z                                                                                  |
| `citizenships`                                                                                        | [shared.CountryCodeEnum](../../../sdk/models/shared/countrycodeenum.md)[]                             | :heavy_minus_sign:                                                                                    | The citizenships of the Employee                                                                      |                                                                                                       |
| `company`                                                                                             | [shared.EmployeeCompany](../../../sdk/models/shared/employeecompany.md)                               | :heavy_minus_sign:                                                                                    | The employee company                                                                                  |                                                                                                       |
| `companyName`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee company name                                                                             | Example Corp                                                                                          |
| `costCenters`                                                                                         | [shared.CostCenters](../../../sdk/models/shared/costcenters.md)[]                                     | :heavy_minus_sign:                                                                                    | The employee cost centers                                                                             |                                                                                                       |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The created_at date                                                                                   | 2021-01-01T01:01:01.000Z                                                                              |
| `customFields`                                                                                        | [shared.EmployeeCustomFields](../../../sdk/models/shared/employeecustomfields.md)[]                   | :heavy_minus_sign:                                                                                    | The employee custom fields                                                                            |                                                                                                       |
| `dateOfBirth`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The employee date_of_birth                                                                            | 1990-01-01T00:00.000Z                                                                                 |
| `department`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee department                                                                               | Physics                                                                                               |
| `departmentId`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee department id                                                                            | 3093                                                                                                  |
| `displayName`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee display name                                                                             | Sir Issac Newton                                                                                      |
| `employeeNumber`                                                                                      | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The assigned employee number                                                                          | 125                                                                                                   |
| `employmentContractType`                                                                              | [shared.EmployeeEmploymentContractType](../../../sdk/models/shared/employeeemploymentcontracttype.md) | :heavy_minus_sign:                                                                                    | The employment work schedule type (e.g., full-time, part-time)                                        | full_time                                                                                             |
| `employmentStatus`                                                                                    | [shared.EmploymentStatus](../../../sdk/models/shared/employmentstatus.md)                             | :heavy_minus_sign:                                                                                    | The employee employment status                                                                        | active                                                                                                |
| `employmentType`                                                                                      | [shared.EmployeeEmploymentType](../../../sdk/models/shared/employeeemploymenttype.md)                 | :heavy_minus_sign:                                                                                    | The employee employment type                                                                          | full_time                                                                                             |
| `employments`                                                                                         | [shared.Employment](../../../sdk/models/shared/employment.md)[]                                       | :heavy_minus_sign:                                                                                    | The employee employments                                                                              |                                                                                                       |
| `ethnicity`                                                                                           | [shared.Ethnicity](../../../sdk/models/shared/ethnicity.md)                                           | :heavy_minus_sign:                                                                                    | The employee ethnicity                                                                                | white                                                                                                 |
| `firstName`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee first name                                                                               | Issac                                                                                                 |
| `gender`                                                                                              | [shared.Gender](../../../sdk/models/shared/gender.md)                                                 | :heavy_minus_sign:                                                                                    | The employee gender                                                                                   | male                                                                                                  |
| `groups`                                                                                              | [shared.HRISGroup](../../../sdk/models/shared/hrisgroup.md)[]                                         | :heavy_minus_sign:                                                                                    | The employee groups                                                                                   |                                                                                                       |
| `hireDate`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The employee hire date                                                                                | 2021-01-01T00:00.000Z                                                                                 |
| `homeLocation`                                                                                        | [shared.HomeLocation](../../../sdk/models/shared/homelocation.md)                                     | :heavy_minus_sign:                                                                                    | The employee home location                                                                            |                                                                                                       |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Unique identifier                                                                                     | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                  |
| `jobDescription`                                                                                      | [shared.JobDescription](../../../sdk/models/shared/jobdescription.md)                                 | :heavy_minus_sign:                                                                                    | The employee job description                                                                          | Testing the laws of motion                                                                            |
| `jobId`                                                                                               | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee job id                                                                                   | 5290                                                                                                  |
| `jobTitle`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee job title                                                                                | Physicist                                                                                             |
| `lastName`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee last name                                                                                | Newton                                                                                                |
| `managerId`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee manager ID                                                                               | 67890                                                                                                 |
| `maritalStatus`                                                                                       | [shared.MaritalStatus](../../../sdk/models/shared/maritalstatus.md)                                   | :heavy_minus_sign:                                                                                    | The employee marital status                                                                           | single                                                                                                |
| `name`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee name                                                                                     | Issac Newton                                                                                          |
| `nationalIdentityNumber`                                                                              | [shared.NationalIdentityNumber](../../../sdk/models/shared/nationalidentitynumber.md)                 | :heavy_minus_sign:                                                                                    | The national identity number                                                                          |                                                                                                       |
| `personalEmail`                                                                                       | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee personal email                                                                           | isaac.newton@example.com                                                                              |
| `personalPhoneNumber`                                                                                 | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee personal phone number                                                                    | +1234567890                                                                                           |
| `preferredLanguage`                                                                                   | [shared.PreferredLanguage](../../../sdk/models/shared/preferredlanguage.md)                           | :heavy_minus_sign:                                                                                    | The employee preferred language                                                                       | en_US                                                                                                 |
| `remoteId`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Provider's unique identifier                                                                          | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                  |
| `remoteManagerId`                                                                                     | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Provider's unique identifier of the manager                                                           | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                  |
| `startDate`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The employee start date                                                                               | 2021-01-01T00:00.000Z                                                                                 |
| `tenure`                                                                                              | *number*                                                                                              | :heavy_minus_sign:                                                                                    | The employee tenure                                                                                   | 2                                                                                                     |
| `terminationDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The employee termination date                                                                         | 2021-01-01T00:00:00Z                                                                                  |
| `unifiedCustomFields`                                                                                 | Record<string, *any*>                                                                                 | :heavy_minus_sign:                                                                                    | Custom Unified Fields configured in your StackOne project                                             | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The updated_at date                                                                                   | 2021-01-01T01:01:01.000Z                                                                              |
| `workAnniversary`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The employee work anniversary                                                                         | 2021-01-01T00:00:00Z                                                                                  |
| `workEmail`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee work email                                                                               | newton@example.com                                                                                    |
| `workLocation`                                                                                        | [shared.WorkLocation](../../../sdk/models/shared/worklocation.md)                                     | :heavy_minus_sign:                                                                                    | The employee work location                                                                            |                                                                                                       |
| `workPhoneNumber`                                                                                     | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The employee work phone number                                                                        | +1234567890                                                                                           |
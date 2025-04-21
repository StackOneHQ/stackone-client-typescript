# HrisCreateEmployeeRequestDto

## Example Usage

```typescript
import {
  CountryCodeEnumValue,
  HrisCreateEmployeeRequestDto,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
  NationalIdentityNumberApiModelSchemasValue,
  NationalIdentityNumberApiModelValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDto = {
  avatar: {},
  avatarUrl: "https://example.com/avatar.png",
  benefits: [
    {
      createdAt: new Date("2021-01-01T00:00:00Z"),
      description: "Health insurance for employees",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Health Insurance",
      provider: "Aetna",
      updatedAt: new Date("2021-01-01T00:00:00Z"),
    },
  ],
  birthday: new Date("2021-01-01T00:00:00Z"),
  citizenships: [
    {
      value: CountryCodeEnumValue.Us,
    },
  ],
  companyId: "1234567890",
  costCenters: [
    {
      distributionPercentage: 100,
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "R&D",
    },
  ],
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
  displayName: "Sir Isaac Newton",
  employeeNumber: "125",
  employment: {
    employmentContractType: {},
    employmentType: {},
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    jobTitle: "Software Engineer",
    payCurrency: "USD",
    payFrequency: {},
    payPeriod: {},
    payRate: "40.00",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    workTime: {
      duration: "P0Y0M0DT8H0M0S",
      durationUnit: {},
    },
  },
  employmentContractType: {},
  employmentStatus: {},
  employmentType: {},
  ethnicity: {},
  firstName: "Isaac",
  gender: {},
  hireDate: new Date("2021-01-01T00:00.000Z"),
  homeLocation: {
    city: "Grantham",
    country: {
      value: HrisCreateEmployeeRequestDtoSchemasHomeLocationValue.Us,
    },
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
  },
  jobId: "R-6789",
  jobTitle: "Physicist",
  lastName: "Newton",
  managerId: "67890",
  maritalStatus: {},
  name: "Isaac Newton",
  nationalIdentityNumbers: [
    {
      country: {
        value: NationalIdentityNumberApiModelValue.Us,
      },
      type: {
        value: NationalIdentityNumberApiModelSchemasValue.Ssn,
      },
      value: "123456789",
    },
  ],
  passthrough: {
    "other_known_names": "John Doe",
  },
  personalEmail: "isaac.newton@example.com",
  personalPhoneNumber: "+1234567890",
  preferredLanguage: {},
  startDate: new Date("2021-01-01T00:00.000Z"),
  teamId: "2913",
  terminationDate: new Date("2021-01-01T00:00:00Z"),
  workEmail: "newton@example.com",
  workLocation: {
    city: "Grantham",
    country: {
      value: HrisCreateEmployeeRequestDtoSchemasWorkLocationValue.Us,
    },
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
  },
  workPhoneNumber: "+1234567890",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `avatar`                                                                                                                                              | [shared.HrisCreateEmployeeRequestDtoAvatar](../../../sdk/models/shared/hriscreateemployeerequestdtoavatar.md)                                         | :heavy_minus_sign:                                                                                                                                    | The employee avatar                                                                                                                                   | https://example.com/avatar.png                                                                                                                        |
| `avatarUrl`                                                                                                                                           | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee avatar Url                                                                                                                               | https://example.com/avatar.png                                                                                                                        |
| `benefits`                                                                                                                                            | [shared.CreateHRISBenefit](../../../sdk/models/shared/createhrisbenefit.md)[]                                                                         | :heavy_minus_sign:                                                                                                                                    | Current benefits of the employee                                                                                                                      |                                                                                                                                                       |
| `birthday`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                         | :heavy_minus_sign:                                                                                                                                    | The employee birthday                                                                                                                                 | 2021-01-01T00:00:00Z                                                                                                                                  |
| `citizenships`                                                                                                                                        | [shared.CountryCodeEnum](../../../sdk/models/shared/countrycodeenum.md)[]                                                                             | :heavy_minus_sign:                                                                                                                                    | The citizenships of the Employee                                                                                                                      |                                                                                                                                                       |
| `companyId`                                                                                                                                           | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee company id                                                                                                                               | 1234567890                                                                                                                                            |
| ~~`companyName`~~                                                                                                                                     | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The employee company name | Example Corp                                                                                                                                          |
| `costCenters`                                                                                                                                         | [shared.CreateCostCenterApiModel](../../../sdk/models/shared/createcostcenterapimodel.md)[]                                                           | :heavy_minus_sign:                                                                                                                                    | The employee cost centers                                                                                                                             |                                                                                                                                                       |
| `customFields`                                                                                                                                        | [shared.CustomFields](../../../sdk/models/shared/customfields.md)[]                                                                                   | :heavy_minus_sign:                                                                                                                                    | The employee custom fields                                                                                                                            |                                                                                                                                                       |
| `dateOfBirth`                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                         | :heavy_minus_sign:                                                                                                                                    | The employee date_of_birth                                                                                                                            | 1990-01-01T00:00.000Z                                                                                                                                 |
| `department`                                                                                                                                          | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee department                                                                                                                               | Physics                                                                                                                                               |
| `departmentId`                                                                                                                                        | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee department id                                                                                                                            | 3093                                                                                                                                                  |
| `displayName`                                                                                                                                         | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee display name                                                                                                                             | Sir Isaac Newton                                                                                                                                      |
| `employeeNumber`                                                                                                                                      | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The assigned employee number                                                                                                                          | 125                                                                                                                                                   |
| `employment`                                                                                                                                          | [shared.HrisCreateEmployeeRequestDtoEmployment](../../../sdk/models/shared/hriscreateemployeerequestdtoemployment.md)                                 | :heavy_minus_sign:                                                                                                                                    | The employee employment                                                                                                                               |                                                                                                                                                       |
| `employmentContractType`                                                                                                                              | [shared.HrisCreateEmployeeRequestDtoEmploymentContractType](../../../sdk/models/shared/hriscreateemployeerequestdtoemploymentcontracttype.md)         | :heavy_minus_sign:                                                                                                                                    | The employment work schedule type (e.g., full-time, part-time)                                                                                        | full_time                                                                                                                                             |
| `employmentStatus`                                                                                                                                    | [shared.HrisCreateEmployeeRequestDtoEmploymentStatus](../../../sdk/models/shared/hriscreateemployeerequestdtoemploymentstatus.md)                     | :heavy_minus_sign:                                                                                                                                    | The employee employment status                                                                                                                        | active                                                                                                                                                |
| `employmentType`                                                                                                                                      | [shared.HrisCreateEmployeeRequestDtoEmploymentType](../../../sdk/models/shared/hriscreateemployeerequestdtoemploymenttype.md)                         | :heavy_minus_sign:                                                                                                                                    | The employee employment type                                                                                                                          | full_time                                                                                                                                             |
| ~~`employments`~~                                                                                                                                     | [shared.CreateEmploymentApiModel](../../../sdk/models/shared/createemploymentapimodel.md)[]                                                           | :heavy_minus_sign:                                                                                                                                    | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The employee employments |                                                                                                                                                       |
| `ethnicity`                                                                                                                                           | [shared.HrisCreateEmployeeRequestDtoEthnicity](../../../sdk/models/shared/hriscreateemployeerequestdtoethnicity.md)                                   | :heavy_minus_sign:                                                                                                                                    | The employee ethnicity                                                                                                                                | white                                                                                                                                                 |
| `firstName`                                                                                                                                           | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee first name                                                                                                                               | Isaac                                                                                                                                                 |
| `gender`                                                                                                                                              | [shared.HrisCreateEmployeeRequestDtoGender](../../../sdk/models/shared/hriscreateemployeerequestdtogender.md)                                         | :heavy_minus_sign:                                                                                                                                    | The employee gender                                                                                                                                   | male                                                                                                                                                  |
| `hireDate`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                         | :heavy_minus_sign:                                                                                                                                    | The employee hire date                                                                                                                                | 2021-01-01T00:00.000Z                                                                                                                                 |
| `homeLocation`                                                                                                                                        | [shared.HrisCreateEmployeeRequestDtoHomeLocation](../../../sdk/models/shared/hriscreateemployeerequestdtohomelocation.md)                             | :heavy_minus_sign:                                                                                                                                    | The employee home location                                                                                                                            |                                                                                                                                                       |
| `jobId`                                                                                                                                               | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee job id                                                                                                                                   | R-6789                                                                                                                                                |
| `jobTitle`                                                                                                                                            | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee job title                                                                                                                                | Physicist                                                                                                                                             |
| `lastName`                                                                                                                                            | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee last name                                                                                                                                | Newton                                                                                                                                                |
| `managerId`                                                                                                                                           | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee manager ID                                                                                                                               | 67890                                                                                                                                                 |
| `maritalStatus`                                                                                                                                       | [shared.HrisCreateEmployeeRequestDtoMaritalStatus](../../../sdk/models/shared/hriscreateemployeerequestdtomaritalstatus.md)                           | :heavy_minus_sign:                                                                                                                                    | The employee marital status                                                                                                                           | single                                                                                                                                                |
| `name`                                                                                                                                                | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee name                                                                                                                                     | Isaac Newton                                                                                                                                          |
| ~~`nationalIdentityNumber`~~                                                                                                                          | [shared.HrisCreateEmployeeRequestDtoNationalIdentityNumber](../../../sdk/models/shared/hriscreateemployeerequestdtonationalidentitynumber.md)         | :heavy_minus_sign:                                                                                                                                    | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The national identity number |                                                                                                                                                       |
| `nationalIdentityNumbers`                                                                                                                             | [shared.NationalIdentityNumberApiModel](../../../sdk/models/shared/nationalidentitynumberapimodel.md)[]                                               | :heavy_minus_sign:                                                                                                                                    | The national identity numbers                                                                                                                         |                                                                                                                                                       |
| `passthrough`                                                                                                                                         | Record<string, *any*>                                                                                                                                 | :heavy_minus_sign:                                                                                                                                    | Value to pass through to the provider                                                                                                                 | {<br/>"other_known_names": "John Doe"<br/>}                                                                                                           |
| `personalEmail`                                                                                                                                       | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee personal email                                                                                                                           | isaac.newton@example.com                                                                                                                              |
| `personalPhoneNumber`                                                                                                                                 | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee personal phone number                                                                                                                    | +1234567890                                                                                                                                           |
| `preferredLanguage`                                                                                                                                   | [shared.HrisCreateEmployeeRequestDtoPreferredLanguage](../../../sdk/models/shared/hriscreateemployeerequestdtopreferredlanguage.md)                   | :heavy_minus_sign:                                                                                                                                    | The employee preferred language                                                                                                                       | en_US                                                                                                                                                 |
| `startDate`                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                         | :heavy_minus_sign:                                                                                                                                    | The employee start date                                                                                                                               | 2021-01-01T00:00.000Z                                                                                                                                 |
| `teamId`                                                                                                                                              | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee team id                                                                                                                                  | 2913                                                                                                                                                  |
| `terminationDate`                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                         | :heavy_minus_sign:                                                                                                                                    | The employee termination date                                                                                                                         | 2021-01-01T00:00:00Z                                                                                                                                  |
| `workEmail`                                                                                                                                           | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee work email                                                                                                                               | newton@example.com                                                                                                                                    |
| `workLocation`                                                                                                                                        | [shared.HrisCreateEmployeeRequestDtoWorkLocation](../../../sdk/models/shared/hriscreateemployeerequestdtoworklocation.md)                             | :heavy_minus_sign:                                                                                                                                    | The employee work location                                                                                                                            |                                                                                                                                                       |
| `workPhoneNumber`                                                                                                                                     | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The employee work phone number                                                                                                                        | +1234567890                                                                                                                                           |
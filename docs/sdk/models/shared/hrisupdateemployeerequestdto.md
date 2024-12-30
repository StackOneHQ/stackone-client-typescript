# HrisUpdateEmployeeRequestDto

## Example Usage

```typescript
import {
  CountryCodeEnumValue,
  HrisUpdateEmployeeRequestDto,
  HrisUpdateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberTypeValue,
  HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
  HrisUpdateEmployeeRequestDtoSchemasWorkLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDto = {
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
  companyName: "Example Corp",
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
  employmentType: {},
  employments: [
    {
      effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
      employeeId: "1687-3",
      employmentContractType: {},
      employmentType: {},
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      jobTitle: "Software Engineer",
      payCurrency: "USD",
      payFrequency: {},
      payPeriod: {},
      payRate: "40.00",
      timeWorked: "P0Y0M0DT8H0M0S",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
  ],
  ethnicity: {},
  firstName: "Issac",
  gender: {},
  hireDate: new Date("2021-01-01T00:00.000Z"),
  homeLocation: {
    city: "Grantham",
    country: {
      value: HrisUpdateEmployeeRequestDtoSchemasHomeLocationValue.Us,
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
  name: "Issac Newton",
  nationalIdentityNumber: {
    country: {
      value: HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Us,
    },
    type: {
      value:
        HrisUpdateEmployeeRequestDtoSchemasNationalIdentityNumberTypeValue.Ssn,
    },
    value: "123456789",
  },
  passthrough: {
    "other_known_names": "John Doe",
  },
  personalEmail: "isaac.newton@example.com",
  personalPhoneNumber: "+1234567890",
  preferredLanguage: {},
  startDate: new Date("2021-01-01T00:00.000Z"),
  tenure: 2,
  terminationDate: new Date("2021-01-01T00:00:00Z"),
  workAnniversary: new Date("2021-01-01T00:00:00Z"),
  workEmail: "newton@example.com",
  workLocation: {
    city: "Grantham",
    country: {
      value: HrisUpdateEmployeeRequestDtoSchemasWorkLocationValue.Us,
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `avatar`                                                                                                                                      | [shared.HrisUpdateEmployeeRequestDtoAvatar](../../../sdk/models/shared/hrisupdateemployeerequestdtoavatar.md)                                 | :heavy_minus_sign:                                                                                                                            | The employee avatar                                                                                                                           | https://example.com/avatar.png                                                                                                                |
| `avatarUrl`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee avatar Url                                                                                                                       | https://example.com/avatar.png                                                                                                                |
| `benefits`                                                                                                                                    | [shared.CreateHRISBenefit](../../../sdk/models/shared/createhrisbenefit.md)[]                                                                 | :heavy_minus_sign:                                                                                                                            | Current benefits of the employee                                                                                                              |                                                                                                                                               |
| `birthday`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_minus_sign:                                                                                                                            | The employee birthday                                                                                                                         | 2021-01-01T00:00:00Z                                                                                                                          |
| `citizenships`                                                                                                                                | [shared.CountryCodeEnum](../../../sdk/models/shared/countrycodeenum.md)[]                                                                     | :heavy_minus_sign:                                                                                                                            | The citizenships of the Employee                                                                                                              |                                                                                                                                               |
| `companyName`                                                                                                                                 | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee company name                                                                                                                     | Example Corp                                                                                                                                  |
| `customFields`                                                                                                                                | [shared.CustomFields](../../../sdk/models/shared/customfields.md)[]                                                                           | :heavy_minus_sign:                                                                                                                            | The employee custom fields                                                                                                                    |                                                                                                                                               |
| `dateOfBirth`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_minus_sign:                                                                                                                            | The employee date_of_birth                                                                                                                    | 1990-01-01T00:00.000Z                                                                                                                         |
| `department`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee department                                                                                                                       | Physics                                                                                                                                       |
| `departmentId`                                                                                                                                | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee department id                                                                                                                    | 3093                                                                                                                                          |
| `displayName`                                                                                                                                 | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee display name                                                                                                                     | Sir Issac Newton                                                                                                                              |
| `employeeNumber`                                                                                                                              | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The assigned employee number                                                                                                                  | 125                                                                                                                                           |
| `employmentContractType`                                                                                                                      | [shared.HrisUpdateEmployeeRequestDtoEmploymentContractType](../../../sdk/models/shared/hrisupdateemployeerequestdtoemploymentcontracttype.md) | :heavy_minus_sign:                                                                                                                            | The employment work schedule type (e.g., full-time, part-time)                                                                                | full_time                                                                                                                                     |
| `employmentStatus`                                                                                                                            | [shared.HrisUpdateEmployeeRequestDtoEmploymentStatus](../../../sdk/models/shared/hrisupdateemployeerequestdtoemploymentstatus.md)             | :heavy_minus_sign:                                                                                                                            | The employee employment status                                                                                                                | active                                                                                                                                        |
| `employmentType`                                                                                                                              | [shared.HrisUpdateEmployeeRequestDtoEmploymentType](../../../sdk/models/shared/hrisupdateemployeerequestdtoemploymenttype.md)                 | :heavy_minus_sign:                                                                                                                            | The employee employment type                                                                                                                  | full_time                                                                                                                                     |
| `employments`                                                                                                                                 | [shared.CreateEmploymentApiModel](../../../sdk/models/shared/createemploymentapimodel.md)[]                                                   | :heavy_minus_sign:                                                                                                                            | The employee employments                                                                                                                      |                                                                                                                                               |
| `ethnicity`                                                                                                                                   | [shared.HrisUpdateEmployeeRequestDtoEthnicity](../../../sdk/models/shared/hrisupdateemployeerequestdtoethnicity.md)                           | :heavy_minus_sign:                                                                                                                            | The employee ethnicity                                                                                                                        | white                                                                                                                                         |
| `firstName`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee first name                                                                                                                       | Issac                                                                                                                                         |
| `gender`                                                                                                                                      | [shared.HrisUpdateEmployeeRequestDtoGender](../../../sdk/models/shared/hrisupdateemployeerequestdtogender.md)                                 | :heavy_minus_sign:                                                                                                                            | The employee gender                                                                                                                           | male                                                                                                                                          |
| `hireDate`                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_minus_sign:                                                                                                                            | The employee hire date                                                                                                                        | 2021-01-01T00:00.000Z                                                                                                                         |
| `homeLocation`                                                                                                                                | [shared.HrisUpdateEmployeeRequestDtoHomeLocation](../../../sdk/models/shared/hrisupdateemployeerequestdtohomelocation.md)                     | :heavy_minus_sign:                                                                                                                            | The employee home location                                                                                                                    |                                                                                                                                               |
| `jobId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee job id                                                                                                                           | R-6789                                                                                                                                        |
| `jobTitle`                                                                                                                                    | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee job title                                                                                                                        | Physicist                                                                                                                                     |
| `lastName`                                                                                                                                    | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee last name                                                                                                                        | Newton                                                                                                                                        |
| `managerId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee manager ID                                                                                                                       | 67890                                                                                                                                         |
| `maritalStatus`                                                                                                                               | [shared.HrisUpdateEmployeeRequestDtoMaritalStatus](../../../sdk/models/shared/hrisupdateemployeerequestdtomaritalstatus.md)                   | :heavy_minus_sign:                                                                                                                            | The employee marital status                                                                                                                   | single                                                                                                                                        |
| `name`                                                                                                                                        | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee name                                                                                                                             | Issac Newton                                                                                                                                  |
| `nationalIdentityNumber`                                                                                                                      | [shared.HrisUpdateEmployeeRequestDtoNationalIdentityNumber](../../../sdk/models/shared/hrisupdateemployeerequestdtonationalidentitynumber.md) | :heavy_minus_sign:                                                                                                                            | The national identity number                                                                                                                  |                                                                                                                                               |
| `passthrough`                                                                                                                                 | Record<string, *any*>                                                                                                                         | :heavy_minus_sign:                                                                                                                            | Value to pass through to the provider                                                                                                         | {<br/>"other_known_names": "John Doe"<br/>}                                                                                                   |
| `personalEmail`                                                                                                                               | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee personal email                                                                                                                   | isaac.newton@example.com                                                                                                                      |
| `personalPhoneNumber`                                                                                                                         | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee personal phone number                                                                                                            | +1234567890                                                                                                                                   |
| `preferredLanguage`                                                                                                                           | [shared.HrisUpdateEmployeeRequestDtoPreferredLanguage](../../../sdk/models/shared/hrisupdateemployeerequestdtopreferredlanguage.md)           | :heavy_minus_sign:                                                                                                                            | The employee preferred language                                                                                                               | en_US                                                                                                                                         |
| `startDate`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_minus_sign:                                                                                                                            | The employee start date                                                                                                                       | 2021-01-01T00:00.000Z                                                                                                                         |
| `tenure`                                                                                                                                      | *number*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee tenure                                                                                                                           | 2                                                                                                                                             |
| `terminationDate`                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_minus_sign:                                                                                                                            | The employee termination date                                                                                                                 | 2021-01-01T00:00:00Z                                                                                                                          |
| `workAnniversary`                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_minus_sign:                                                                                                                            | The employee work anniversary                                                                                                                 | 2021-01-01T00:00:00Z                                                                                                                          |
| `workEmail`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee work email                                                                                                                       | newton@example.com                                                                                                                            |
| `workLocation`                                                                                                                                | [shared.HrisUpdateEmployeeRequestDtoWorkLocation](../../../sdk/models/shared/hrisupdateemployeerequestdtoworklocation.md)                     | :heavy_minus_sign:                                                                                                                            | The employee work location                                                                                                                    |                                                                                                                                               |
| `workPhoneNumber`                                                                                                                             | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The employee work phone number                                                                                                                | +1234567890                                                                                                                                   |
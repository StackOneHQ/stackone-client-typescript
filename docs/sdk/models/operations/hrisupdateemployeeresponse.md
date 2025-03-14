# HrisUpdateEmployeeResponse

## Example Usage

```typescript
import { HrisUpdateEmployeeResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  CountryCodeEnumValue,
  NationalIdentityNumberApiModelSchemasValue,
  NationalIdentityNumberApiModelValue,
  UpdateEmployeeApiModelSchemasHomeLocationValue,
  UpdateEmployeeApiModelSchemasWorkLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  updateEmployeeApiModel: {
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
    employment: {
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
    employmentContractType: {},
    employmentStatus: {},
    employmentType: {},
    ethnicity: {},
    firstName: "Issac",
    gender: {},
    hireDate: new Date("2021-01-01T00:00.000Z"),
    homeLocation: {
      city: "Grantham",
      country: {
        value: UpdateEmployeeApiModelSchemasHomeLocationValue.Us,
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
        value: UpdateEmployeeApiModelSchemasWorkLocationValue.Us,
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
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `updateEmployeeApiModel`                                                              | [shared.UpdateEmployeeApiModel](../../../sdk/models/shared/updateemployeeapimodel.md) | :heavy_minus_sign:                                                                    | Record updated successfully                                                           |
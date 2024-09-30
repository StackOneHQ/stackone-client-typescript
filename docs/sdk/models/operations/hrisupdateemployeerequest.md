# HrisUpdateEmployeeRequest

## Example Usage

```typescript
import { HrisUpdateEmployeeRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  CountryCodeEnumValue,
  CreateEmploymentApiModelSchemasPayFrequencyValue,
  CreateEmploymentApiModelSchemasPayPeriodValue,
  CreateEmploymentApiModelSchemasValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
  HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequest = {
  hrisCreateEmployeeRequestDto: {
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
    employmentContractType: {},
    employmentStatus: {},
    employmentType: {
      sourceValue: "Permanent",
      value: HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue.Permanent,
    },
    employments: [
      {
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
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
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      },
    ],
    ethnicity: {},
    firstName: "Issac",
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
    name: "Issac Newton",
    nationalIdentityNumber: {
      type: {
        value:
          HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Ssn,
      },
      value: "123456789",
    },
    passthrough: {
      "other_known_names": "John Doe",
    },
    personalEmail: "isaac.newton@example.com",
    personalPhoneNumber: "+1234567890",
    preferredLanguage: {
      value: HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue.Eng,
    },
    startDate: new Date("2021-01-01T00:00.000Z"),
    tenure: 2,
    terminationDate: new Date("2021-01-01T00:00:00Z"),
    workAnniversary: new Date("2021-01-01T00:00:00Z"),
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
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `hrisCreateEmployeeRequestDto`                                                                    | [shared.HrisCreateEmployeeRequestDto](../../../sdk/models/shared/hriscreateemployeerequestdto.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `xAccountId`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The account identifier                                                                            |
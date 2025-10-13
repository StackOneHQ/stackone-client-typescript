# HrisUpdateEmployeeRequest

## Example Usage

```typescript
import { HrisUpdateEmployeeRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  CountryCodeEnumValue,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentPayPeriodValue,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentValue,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue,
  HrisUpdateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisUpdateEmployeeRequestDtoSchemasWorkLocationValue,
  NationalIdentityNumberApiModelSchemasValue,
  NationalIdentityNumberApiModelValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequest = {
  hrisUpdateEmployeeRequestDto: {
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
    dateOfBirth: new Date("1990-01-01T00:00:00.000Z"),
    department: "Physics",
    departmentId: "3093",
    displayName: "Sir Isaac Newton",
    employeeNumber: "125",
    employment: {
      contractType: {
        contractType: {},
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        label: "Full-Time",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      grade: {
        description:
          "Mid-level employee demonstrating proficiency and autonomy.",
        id: "1687-3",
        name: "1687-4",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      jobTitle: "Software Engineer",
      passthrough: {
        "other_known_names": "John Doe",
      },
      payCurrency: "USD",
      payFrequency: {
        sourceValue: "Hourly",
        value: HrisUpdateEmployeeRequestDtoSchemasEmploymentValue.Hourly,
      },
      payPeriod: {
        sourceValue: "Hour",
        value: HrisUpdateEmployeeRequestDtoSchemasEmploymentPayPeriodValue.Hour,
      },
      payRate: "40.00",
      payrollCode: "PC1",
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
      workTime: {
        duration: "P0Y0M0DT8H0M0S",
        period: {
          value:
            HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month,
        },
      },
    },
    employmentStatus: {},
    ethnicity: {},
    firstName: "Isaac",
    gender: {},
    hireDate: new Date("2021-01-01T00:00:00.000Z"),
    homeLocation: null,
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
    preferredLanguage: {
      value: HrisUpdateEmployeeRequestDtoSchemasPreferredLanguageValue.Eng,
    },
    startDate: new Date("2021-01-01T00:00:00.000Z"),
    teamId: "2913",
    terminationDate: new Date("2021-01-01T00:00:00Z"),
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
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `hrisUpdateEmployeeRequestDto`                                                                    | [shared.HrisUpdateEmployeeRequestDto](../../../sdk/models/shared/hrisupdateemployeerequestdto.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `xAccountId`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The account identifier                                                                            |
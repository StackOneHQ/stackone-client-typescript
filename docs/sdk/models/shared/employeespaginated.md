# EmployeesPaginated

## Example Usage

```typescript
import {
  CountryCodeEnumValue,
  EmployeeSchemasEmploymentTypeValue,
  EmployeeSchemasHomeLocationLocationTypeValue,
  EmployeeSchemasHomeLocationValue,
  EmployeeSchemasNationalIdentityNumberValue,
  EmployeeSchemasPreferredLanguageValue,
  EmployeeSchemasWorkLocationLocationTypeValue,
  EmployeeSchemasWorkLocationValue,
  EmployeesPaginated,
  EmploymentSchemasPayFrequencyValue,
  EmploymentSchemasPayPeriodValue,
  EmploymentSchemasValue,
  HRISGroupValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmployeesPaginated = {
  data: [
    {
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
          name: "R&D",
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
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
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
        type: {
          value: EmployeeSchemasNationalIdentityNumberValue.Ssn,
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
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.Employee](../../../sdk/models/shared/employee.md)[]                                                             | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
# HrisGetEmployeeResponse

## Example Usage

```typescript
import { HrisGetEmployeeResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  CountryCodeEnumValue,
  EmployeeSchemasHomeLocationValue,
  EmployeeSchemasNationalIdentityNumberTypeValue,
  EmployeeSchemasNationalIdentityNumberValue,
  EmployeeSchemasWorkLocationValue,
  HRISGroupValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisGetEmployeeResponse = {
  contentType: "<value>",
  employeeResult: {
    data: {
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
      employmentType: {},
      employments: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
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
          remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          timeWorked: "P0Y0M0DT8H0M0S",
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
        locationType: {},
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
      jobDescription: {},
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
      preferredLanguage: {},
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
        locationType: {},
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
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 502,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `employeeResult`                                                      | [shared.EmployeeResult](../../../sdk/models/shared/employeeresult.md) | :heavy_minus_sign:                                                    | The employee with the given identifier was retrieved.                 |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
# EmployeesPaginated

## Example Usage

```typescript
import {
  CountryCodeEnumValue,
  EmployeeSchemasHomeLocationValue,
  EmployeeSchemasWorkLocationValue,
  EmployeesPaginated,
  EmploymentSchemasDepartmentValue,
  EmploymentSchemasDivisionValue,
  EntitySkillsValue,
  HRISCostCenterValue,
  HRISGroupValue,
  NationalIdentityNumberApiModelSchemasValue,
  NationalIdentityNumberApiModelValue,
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
      companyId: "1234567890",
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
      displayName: "Sir Issac Newton",
      employeeNumber: "125",
      employmentStatus: {},
      employments: [
        {
          active: true,
          contractType: {
            contractType: {},
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            label: "Full-Time",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          },
          costCenters: [
            {
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
              value: EmploymentSchemasDepartmentValue.Team,
            },
            unifiedCustomFields: {
              "my_project_custom_field_1": "REF-1236",
              "my_project_custom_field_2": "some other value",
            },
          },
          division: {
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
          manager: [
            {
              id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              role: {
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                label: "Admin",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                roleType: {},
              },
            },
          ],
          payCurrency: "USD",
          payFrequency: {},
          payPeriod: {},
          payRate: "40.00",
          remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          startDate: new Date("2021-01-01T01:01:01.000Z"),
          timeWorked: "P0Y0M0DT8H0M0S",
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
      lastName: "Newton",
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
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteManagerId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      skills: [
        {
          active: true,
          id: "16873-IT345",
          language: {
            value: EntitySkillsValue.EnGB,
          },
          maximumProficiency: {
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            name: "Expert",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          },
          minimumProficiency: {
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            name: "Expert",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          },
          name: "Information-Technology",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
      ],
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
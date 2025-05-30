# EmploymentResult

## Example Usage

```typescript
import {
  EmploymentResult,
  EmploymentSchemasDepartmentValue,
  EmploymentSchemasDivisionValue,
  HRISCostCenterValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentResult = {
  data: {
    active: true,
    contractType: {
      contractType: {},
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      label: "Full-Time",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
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
          roleType: {},
        },
      },
    ],
    payCurrency: "USD",
    payFrequency: {},
    payPeriod: {},
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
      durationUnit: {},
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Employment](../../../sdk/models/shared/employment.md)     | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
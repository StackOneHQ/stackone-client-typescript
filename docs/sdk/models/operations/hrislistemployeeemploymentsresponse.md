# HrisListEmployeeEmploymentsResponse

## Example Usage

```typescript
import { HrisListEmployeeEmploymentsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  EmploymentSchemasPayFrequencyValue,
  EmploymentSchemasPayPeriodValue,
  EmploymentSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisListEmployeeEmploymentsResponse = {
  contentType: "<value>",
  employmentsPaginated: {
    data: [
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
        timeWorked: "P0Y0M0DT8H0M0S",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      },
    ],
  },
  statusCode: 405,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `employmentsPaginated`                                                            | [shared.EmploymentsPaginated](../../../sdk/models/shared/employmentspaginated.md) | :heavy_minus_sign:                                                                | The list of Employee Employments was retrieved.                                   |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
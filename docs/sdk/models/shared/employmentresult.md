# EmploymentResult

## Example Usage

```typescript
import {
  EmploymentResult,
  EmploymentSchemasPayFrequencyValue,
  EmploymentSchemasPayPeriodValue,
  EmploymentSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentResult = {
  data: {
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
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Employment](../../../sdk/models/shared/employment.md)     | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
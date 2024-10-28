# HrisCreateEmployeeEmploymentRequest

## Example Usage

```typescript
import { HrisCreateEmployeeEmploymentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  HrisCreateEmploymentRequestDtoSchemasPayFrequencyValue,
  HrisCreateEmploymentRequestDtoSchemasPayPeriodValue,
  HrisCreateEmploymentRequestDtoSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeEmploymentRequest = {
  hrisCreateEmploymentRequestDto: {
    effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
    employeeId: "1687-3",
    employmentContractType: {},
    employmentType: {
      sourceValue: "Permanent",
      value: HrisCreateEmploymentRequestDtoSchemasValue.Permanent,
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    jobTitle: "Software Engineer",
    passthrough: {
      "other_known_names": "John Doe",
    },
    payCurrency: "USD",
    payFrequency: {
      sourceValue: "Hourly",
      value: HrisCreateEmploymentRequestDtoSchemasPayFrequencyValue.Hourly,
    },
    payPeriod: {
      sourceValue: "Hour",
      value: HrisCreateEmploymentRequestDtoSchemasPayPeriodValue.Hour,
    },
    payRate: "40.00",
    timeWorked: "P0Y0M0DT8H0M0S",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `hrisCreateEmploymentRequestDto`                                                                      | [shared.HrisCreateEmploymentRequestDto](../../../sdk/models/shared/hriscreateemploymentrequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |
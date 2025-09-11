# HrisCreateEmployeeEmploymentRequest

## Example Usage

```typescript
import { HrisCreateEmployeeEmploymentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  HrisCreateEmploymentRequestDtoSchemasPayFrequencyValue,
  HrisCreateEmploymentRequestDtoSchemasPayPeriodValue,
  HrisCreateEmploymentRequestDtoSchemasWorkTimeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeEmploymentRequest = {
  hrisCreateEmploymentRequestDto: {
    contractType: {
      contractType: {},
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      label: "Full-Time",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
    endDate: new Date("2021-01-01T01:01:01.000Z"),
    grade: {
      description: "Mid-level employee demonstrating proficiency and autonomy.",
      id: "1687-3",
      name: "1687-4",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    jobId: "5290",
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
      durationUnit: {
        value: HrisCreateEmploymentRequestDtoSchemasWorkTimeValue.Month,
      },
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
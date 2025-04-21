# HrisUpdateEmployeeEmploymentRequest

## Example Usage

```typescript
import { HrisUpdateEmployeeEmploymentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisUpdateEmployeeEmploymentRequest = {
  hrisCreateEmploymentRequestDto: {
    employmentContractType: {},
    employmentType: {},
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    jobTitle: "Software Engineer",
    passthrough: {
      "other_known_names": "John Doe",
    },
    payCurrency: "USD",
    payFrequency: {},
    payPeriod: {},
    payRate: "40.00",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    workTime: {
      duration: "P0Y0M0DT8H0M0S",
      durationUnit: {},
    },
  },
  id: "<id>",
  subResourceId: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `hrisCreateEmploymentRequestDto`                                                                      | [shared.HrisCreateEmploymentRequestDto](../../../sdk/models/shared/hriscreateemploymentrequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `subResourceId`                                                                                       | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |
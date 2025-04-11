# HrisGetCostCenterGroupResponse

## Example Usage

```typescript
import { HrisGetCostCenterGroupResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { HRISCostCenterValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisGetCostCenterGroupResponse = {
  contentType: "<value>",
  hrisCostCenterResult: {
    data: {
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
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `hrisCostCenterResult`                                                            | [shared.HRISCostCenterResult](../../../sdk/models/shared/hriscostcenterresult.md) | :heavy_minus_sign:                                                                | The cost center group with the given identifier was retrieved.                    |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
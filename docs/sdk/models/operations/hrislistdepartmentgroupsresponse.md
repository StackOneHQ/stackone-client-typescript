# HrisListDepartmentGroupsResponse

## Example Usage

```typescript
import { HrisListDepartmentGroupsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { HRISDepartmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisListDepartmentGroupsResponse = {
  contentType: "<value>",
  hrisDepartmentsPaginated: {
    data: [
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
          value: HRISDepartmentValue.Department,
        },
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
      },
    ],
  },
  statusCode: 205,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `hrisDepartmentsPaginated`                                                                | [shared.HRISDepartmentsPaginated](../../../sdk/models/shared/hrisdepartmentspaginated.md) | :heavy_minus_sign:                                                                        | The list of department groups was retrieved.                                              |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
# HrisListLocationsResponse

## Example Usage

```typescript
import { HrisListLocationsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { HRISLocationValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisListLocationsResponse = {
  contentType: "<value>",
  hrisLocationsPaginated: {
    data: [
      {
        city: "Grantham",
        country: {
          value: HRISLocationValue.Us,
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
    ],
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 308,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `hrisLocationsPaginated`                                                              | [shared.HRISLocationsPaginated](../../../sdk/models/shared/hrislocationspaginated.md) | :heavy_minus_sign:                                                                    | The list of Locations was retrieved.                                                  |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
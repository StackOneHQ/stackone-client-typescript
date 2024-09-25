# StackoneListConnectorsMetaResponse

## Example Usage

```typescript
import { StackoneListConnectorsMetaResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { ConnectorsMetaCategory } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StackoneListConnectorsMetaResponse = {
  contentType: "<value>",
  statusCode: 103,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  classes: [
    {
      active: true,
      category: ConnectorsMetaCategory.Hris,
      models: {
        "employees": {
          "create": {
            "apiPath": "/unified/hris/employees/:id",
            "input": {
              "defaultFields": [
                {
                  "name": "first_name",
                  "type": "string",
                },
              ],
            },
            "output": {
              "defaultFields": [
                {
                  "name": "id",
                  "type": "string",
                },
              ],
            },
          },
        },
        "time_off": {
          "get": {
            "apiPath": "/unified/hris/employees/:id/time_off/:id",
            "output": {
              "defaultFields": [
                {
                  "name": "id",
                  "type": "string",
                },
              ],
            },
          },
        },
      },
      provider: "hibob",
      providerName: "Hibob",
      resources: {
        images: {
          logoUrl: "https://app.stackone.com/assets/logos/hibob.png",
          originalLogoHorizontalUrl:
            "https://app.stackone.com/assets/logos/original/hibob_horizontal.png",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
| `classes`                                                               | [shared.ConnectorsMeta](../../../sdk/models/shared/connectorsmeta.md)[] | :heavy_minus_sign:                                                      | The list of connectors meta information was retrieved.                  |
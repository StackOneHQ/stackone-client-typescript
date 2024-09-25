# StackoneGetConnectorMetaResponse

## Example Usage

```typescript
import { StackoneGetConnectorMetaResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { ConnectorsMetaCategory } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StackoneGetConnectorMetaResponse = {
  connectorsMeta: {
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
  contentType: "<value>",
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `connectorsMeta`                                                      | [shared.ConnectorsMeta](../../../sdk/models/shared/connectorsmeta.md) | :heavy_minus_sign:                                                    | The connector meta information was retrieved                          |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
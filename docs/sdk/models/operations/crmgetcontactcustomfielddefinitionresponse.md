# CrmGetContactCustomFieldDefinitionResponse

## Example Usage

```typescript
import { CrmGetContactCustomFieldDefinitionResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: CrmGetContactCustomFieldDefinitionResponse = {
  contentType: "<value>",
  customFieldDefinitionResultApiModel: {
    data: {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      options: [
        "Not Started",
        "In Progress",
        "Completed",
        "Overdue",
      ],
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      type: {},
    },
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 301,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `customFieldDefinitionResultApiModel`                                                                           | [shared.CustomFieldDefinitionResultApiModel](../../../sdk/models/shared/customfielddefinitionresultapimodel.md) | :heavy_minus_sign:                                                                                              | The contact custom field definition was retrieved.                                                              |
| `headers`                                                                                                       | Record<string, *string*[]>                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
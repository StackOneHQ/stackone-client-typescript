# HrisListEmployeeCustomFieldDefinitionsResponse

## Example Usage

```typescript
import { HrisListEmployeeCustomFieldDefinitionsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeCustomFieldDefinitionsResponse = {
  contentType: "<value>",
  customFieldDefinitionsPaginated: {
    data: [
      {
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
    ],
  },
  statusCode: 307,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `customFieldDefinitionsPaginated`                                                                       | [shared.CustomFieldDefinitionsPaginated](../../../sdk/models/shared/customfielddefinitionspaginated.md) | :heavy_minus_sign:                                                                                      | The list of employee custom field definitions was retrieved.                                            |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
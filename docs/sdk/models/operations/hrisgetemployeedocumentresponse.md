# HrisGetEmployeeDocumentResponse

## Example Usage

```typescript
import { HrisGetEmployeeDocumentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { HrisDocumentApiModelSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisGetEmployeeDocumentResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  hrisDocumentResult: {
    data: {
      category: {},
      categoryId: "6530",
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      fileFormat: {
        sourceValue: "application/pdf",
        value: HrisDocumentApiModelSchemasValue.Pdf,
      },
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "My Document",
      path: "/path/to/file",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteUrl: "https://example.com/file.pdf",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2021-01-02T01:01:01.000Z"),
    },
  },
  statusCode: 505,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `contentType`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | HTTP response content type for this operation                                  |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `hrisDocumentResult`                                                           | [shared.HrisDocumentResult](../../../sdk/models/shared/hrisdocumentresult.md)  | :heavy_minus_sign:                                                             | The document related to the employee with the given identifiers was retrieved. |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | HTTP response status code for this operation                                   |
| `rawResponse`                                                                  | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)          | :heavy_check_mark:                                                             | Raw HTTP response; suitable for custom response parsing                        |
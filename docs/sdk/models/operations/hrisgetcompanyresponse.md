# HrisGetCompanyResponse

## Example Usage

```typescript
import { HrisGetCompanyResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetCompanyResponse = {
  companyResult: {
    data: {
      createdAt: new Date("2023-02-23T00:00:00.000Z"),
      displayName: "StackOne",
      fullName: "American Express Company",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "StackOne Technologies PLC",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2024-02-23T00:00:00.000Z"),
    },
  },
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 413,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyResult`                                                       | [shared.CompanyResult](../../../sdk/models/shared/companyresult.md)   | :heavy_minus_sign:                                                    | The Company with the given identifier was retrieved.                  |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
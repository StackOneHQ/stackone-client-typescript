# HrisListEmployeeCustomFieldDefinitionsResponse

## Example Usage

```typescript
import { HrisListEmployeeCustomFieldDefinitionsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeCustomFieldDefinitionsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  statusCode: 799669,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `customFieldDefinitionsPaginated`                                                                       | [shared.CustomFieldDefinitionsPaginated](../../../sdk/models/shared/customfielddefinitionspaginated.md) | :heavy_minus_sign:                                                                                      | The list of employee custom field definitions was retrieved.                                            |
| `headers`                                                                                               | Record<string, *string*[]>                                                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
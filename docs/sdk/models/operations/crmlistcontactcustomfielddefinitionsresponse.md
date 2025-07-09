# CrmListContactCustomFieldDefinitionsResponse

## Example Usage

```typescript
import { CrmListContactCustomFieldDefinitionsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: CrmListContactCustomFieldDefinitionsResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 224750,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `customFieldDefinitionsPaginated`                                                                       | [shared.CustomFieldDefinitionsPaginated](../../../sdk/models/shared/customfielddefinitionspaginated.md) | :heavy_minus_sign:                                                                                      | The list of contacts custom field definitions was retrieved.                                            |
| `headers`                                                                                               | Record<string, *string*[]>                                                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
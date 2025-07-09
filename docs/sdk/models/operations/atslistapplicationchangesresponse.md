# AtsListApplicationChangesResponse

## Example Usage

```typescript
import { AtsListApplicationChangesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListApplicationChangesResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 975157,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `applicationChangesPaginated`                                                                   | [shared.ApplicationChangesPaginated](../../../sdk/models/shared/applicationchangespaginated.md) | :heavy_minus_sign:                                                                              | The changes related to the application with the given identifier was retrieved.                 |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
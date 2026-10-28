# StackoneListActionLogsResponse

## Example Usage

```typescript
import { StackoneListActionLogsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListActionLogsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  statusCode: 7905,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `actionLogsPaginated`                                                           | [shared.ActionLogsPaginated](../../../sdk/models/shared/actionlogspaginated.md) | :heavy_minus_sign:                                                              | The list of action logs was retrieved.                                          |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |
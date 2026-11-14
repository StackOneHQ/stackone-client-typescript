# StackoneGetActionPolicyLogResponse

## Example Usage

```typescript
import { StackoneGetActionPolicyLogResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneGetActionPolicyLogResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  statusCode: 475551,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `policyLog`                                                           | [shared.PolicyLog](../../../sdk/models/shared/policylog.md)           | :heavy_minus_sign:                                                    | The policy decision was retrieved.                                    |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
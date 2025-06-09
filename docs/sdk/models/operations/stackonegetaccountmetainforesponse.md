# StackoneGetAccountMetaInfoResponse

## Example Usage

```typescript
import { StackoneGetAccountMetaInfoResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneGetAccountMetaInfoResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `headers`                                                                   | Record<string, *string*[]>                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `linkedAccountMeta`                                                         | [shared.LinkedAccountMeta](../../../sdk/models/shared/linkedaccountmeta.md) | :heavy_minus_sign:                                                          | The meta information of the account was retrieved                           |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
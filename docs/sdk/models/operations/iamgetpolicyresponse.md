# IamGetPolicyResponse

## Example Usage

```typescript
import { IamGetPolicyResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: IamGetPolicyResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 20419,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `iamPolicyResult`                                                       | [shared.IamPolicyResult](../../../sdk/models/shared/iampolicyresult.md) | :heavy_minus_sign:                                                      | The policy with the given identifier was retrieved.                     |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
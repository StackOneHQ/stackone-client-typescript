# StackoneAuthenticateConnectSessionResponse

## Example Usage

```typescript
import { StackoneAuthenticateConnectSessionResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneAuthenticateConnectSessionResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `connectSession`                                                      | [shared.ConnectSession](../../../sdk/models/shared/connectsession.md) | :heavy_minus_sign:                                                    | The details of the authenticated connect session.                     |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
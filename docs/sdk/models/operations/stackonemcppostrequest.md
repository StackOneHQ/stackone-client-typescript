# StackoneMcpPostRequest

## Example Usage

```typescript
import { StackoneMcpPostRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneMcpPostRequest = {
  jsonRpcMessageDto: {
    jsonrpc: "2.0",
    method: "initialize",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `jsonRpcMessageDto`                                                                                      | [shared.JsonRpcMessageDto](../../../sdk/models/shared/jsonrpcmessagedto.md)                              | :heavy_check_mark:                                                                                       | JSON-RPC 2.0 message                                                                                     |
| `mcpSessionId`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Session id; omit for initialize, include for subsequent calls                                            |
| `xAccountId`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Account secure id for the target provider account (optional if x-account-id query parameter is provided) |
| `xAccountIdQueryParameter`                                                                               | *any*                                                                                                    | :heavy_minus_sign:                                                                                       | Account secure id (alternative to x-account-id header)                                                   |
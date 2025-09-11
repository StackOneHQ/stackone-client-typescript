# StackoneMcpPostRequest

## Example Usage

```typescript
import { StackoneMcpPostRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneMcpPostRequest = {
  jsonRpcMessageDto: {
    jsonrpc: "2.0",
    method: "initialize",
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `jsonRpcMessageDto`                                                         | [shared.JsonRpcMessageDto](../../../sdk/models/shared/jsonrpcmessagedto.md) | :heavy_check_mark:                                                          | JSON-RPC 2.0 message                                                        |
| `mcpSessionId`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | Session id; omit for initialize, include for subsequent calls               |
| `xAccountId`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | Account secure id for the target provider account                           |
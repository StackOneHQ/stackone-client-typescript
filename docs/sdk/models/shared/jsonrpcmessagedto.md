# JsonRpcMessageDto

## Example Usage

```typescript
import { JsonRpcMessageDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JsonRpcMessageDto = {
  jsonrpc: "2.0",
  method: "initialize",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `id`                                                  | [shared.Id](../../../sdk/models/shared/id.md)         | :heavy_minus_sign:                                    | Request id (arbitrary JSON scalar)                    |                                                       |
| `jsonrpc`                                             | *string*                                              | :heavy_check_mark:                                    | JSON-RPC protocol version                             | 2.0                                                   |
| `method`                                              | *string*                                              | :heavy_check_mark:                                    | JSON-RPC method name                                  | initialize                                            |
| `params`                                              | [shared.Params](../../../sdk/models/shared/params.md) | :heavy_minus_sign:                                    | Method parameters (arbitrary JSON)                    |                                                       |
# StackoneMcpPostResponseBody

Processed successfully

## Example Usage

```typescript
import { StackoneMcpPostResponseBody } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneMcpPostResponseBody = {
  error: {
    code: -32600,
    message: "Invalid request",
  },
  jsonrpc: "2.0",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `error`                                                                                              | [operations.ErrorT](../../../sdk/models/operations/errort.md)                                        | :heavy_minus_sign:                                                                                   | Present on protocol-level failure. Tool-level failures use result with isError: true instead.        |                                                                                                      |
| `id`                                                                                                 | *operations.Id*                                                                                      | :heavy_minus_sign:                                                                                   | Echoes the id from the request. null for protocol-level errors where the id could not be determined. |                                                                                                      |
| `jsonrpc`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 2.0                                                                                                  |
| `result`                                                                                             | *any*                                                                                                | :heavy_minus_sign:                                                                                   | Present on success. Shape varies by method — see response examples.                                  |                                                                                                      |
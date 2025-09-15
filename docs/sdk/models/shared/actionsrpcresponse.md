# ActionsRpcResponse

## Example Usage

```typescript
import { ActionsRpcResponse } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsRpcResponse = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `data`                                       | *shared.ActionsRpcResponseData*              | :heavy_minus_sign:                           | The response data from the action RPC call   |
| `next`                                       | *string*                                     | :heavy_minus_sign:                           | Cursor for fetching the next page of results |
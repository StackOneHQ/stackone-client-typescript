# ActionsRpcRequestDto

## Example Usage

```typescript
import { ActionsRpcRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsRpcRequestDto = {
  action: "create_employee",
  body: {
    "data": "example",
  },
  headers: {
    "Content-Type": "application/json",
  },
  path: {
    "id": "123",
  },
  query: {
    "param1": "value1",
    "param2": "value2",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `action`                                   | *string*                                   | :heavy_check_mark:                         | The action to execute                      | create_employee                            |
| `body`                                     | Record<string, *any*>                      | :heavy_minus_sign:                         | Request body for the action                | {<br/>"data": "example"<br/>}              |
| `headers`                                  | Record<string, *any*>                      | :heavy_minus_sign:                         | Headers for the action                     | {<br/>"Content-Type": "application/json"<br/>} |
| `path`                                     | Record<string, *any*>                      | :heavy_minus_sign:                         | Path parameters for the action             | {<br/>"id": "123"<br/>}                    |
| `query`                                    | Record<string, *any*>                      | :heavy_minus_sign:                         | Query parameters for the action            | {<br/>"param1": "value1",<br/>"param2": "value2"<br/>} |
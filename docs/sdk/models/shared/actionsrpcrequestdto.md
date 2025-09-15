# ActionsRpcRequestDto

## Example Usage

```typescript
import { ActionsRpcRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsRpcRequestDto = {
  action: "create_employee",
  input: {
    body: {
      "data": "example",
    },
    headers: {
      "Content-Type": "application/json",
    },
    query: {
      "param1": "value1",
      "param2": "value2",
    },
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `action`                                            | *string*                                            | :heavy_check_mark:                                  | The action to execute                               | create_employee                                     |
| `input`                                             | [shared.Input](../../../sdk/models/shared/input.md) | :heavy_minus_sign:                                  | Input parameters for the action                     |                                                     |
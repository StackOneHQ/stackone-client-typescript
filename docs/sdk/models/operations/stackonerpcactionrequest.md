# StackoneRpcActionRequest

## Example Usage

```typescript
import { StackoneRpcActionRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneRpcActionRequest = {
  actionsRpcRequestDto: {
    action: "create_employee",
    body: {
      "data": "example",
    },
    defenderConfig: {
      blockHighRisk: false,
      enabled: true,
      useTier1Classification: true,
      useTier2Classification: true,
    },
    headers: {
      "Content-Type": "application/json",
    },
    path: {
      "id": "123",
    },
    query: {
      debug: false,
    },
  },
  debug: false,
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actionsRpcRequestDto`                                                                                                                                                                                                              | [shared.ActionsRpcRequestDto](../../../sdk/models/shared/actionsrpcrequestdto.md)                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                     |
| `debug`                                                                                                                                                                                                                             | *boolean*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                  | Enable debug mode for the action execution                                                                                                                                                                                          | false                                                                                                                                                                                                                               |
| `xAccountId`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                  | The account identifier                                                                                                                                                                                                              |                                                                                                                                                                                                                                     |
| `xConnectorProfileId`                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                  | Overrides the connector profile associated with the account for this request. The profile must exist in the same project and belong to the same connector as the account, otherwise the request is rejected with a 400 Bad Request. |                                                                                                                                                                                                                                     |
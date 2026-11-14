# StackoneRpcActionSyncedQueryableFieldsRequest

## Example Usage

```typescript
import { StackoneRpcActionSyncedQueryableFieldsRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneRpcActionSyncedQueryableFieldsRequest = {
  actionsRpcSyncedQueryableFieldsRequestDto: {
    action: "hris_list_employees",
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `actionsRpcSyncedQueryableFieldsRequestDto`                                                                                 | [shared.ActionsRpcSyncedQueryableFieldsRequestDto](../../../sdk/models/shared/actionsrpcsyncedqueryablefieldsrequestdto.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `xAccountId`                                                                                                                | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The account identifier                                                                                                      |
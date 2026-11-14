# StackoneCheckPermissionsRequest

## Example Usage

```typescript
import { StackoneCheckPermissionsRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { Action } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StackoneCheckPermissionsRequest = {
  checkPermissionsRequestDto: {
    action: Action.Read,
    email: "user@company.com",
    resourceId: "C08G6QB90LU",
    resourceType: "channel",
    userId: "U08FW4R4N6S",
  },
  prefer: "heartbeat",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `checkPermissionsRequestDto`                                                                                                                                             | [shared.CheckPermissionsRequestDto](../../../sdk/models/shared/checkpermissionsrequestdto.md)                                                                            | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |
# HrisInviteEmployeeRequest

## Example Usage

```typescript
import { HrisInviteEmployeeRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisInviteEmployeeRequest = {
  hrisInviteEmployeeRequestDto: {
    passthrough: {
      "other_known_names": "John Doe",
    },
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `hrisInviteEmployeeRequestDto`                                                                    | [shared.HrisInviteEmployeeRequestDto](../../../sdk/models/shared/hrisinviteemployeerequestdto.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `xAccountId`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The account identifier                                                                            |
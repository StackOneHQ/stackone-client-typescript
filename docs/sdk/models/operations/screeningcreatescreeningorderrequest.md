# ScreeningCreateScreeningOrderRequest

## Example Usage

```typescript
import { ScreeningCreateScreeningOrderRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: ScreeningCreateScreeningOrderRequest = {
  prefer: "heartbeat",
  screeningCreateOrderRequestDto: {
    candidate: {
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
    },
    packageId: "54321",
    passthrough: {
      "other_known_names": "John Doe",
    },
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `screeningCreateOrderRequestDto`                                                                                                                                         | [shared.ScreeningCreateOrderRequestDto](../../../sdk/models/shared/screeningcreateorderrequestdto.md)                                                                    | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |
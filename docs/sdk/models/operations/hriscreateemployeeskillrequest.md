# HrisCreateEmployeeSkillRequest

## Example Usage

```typescript
import { HrisCreateEmployeeSkillRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisCreateEmployeeSkillRequest = {
  entitySkillsCreateRequestDto: {
    id: "16873-IT345",
    maximumProficiency: {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Expert",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    minimumProficiency: {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Expert",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    name: "Information-Technology",
  },
  prefer: "heartbeat",
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `entitySkillsCreateRequestDto`                                                                                                                                           | [shared.EntitySkillsCreateRequestDto](../../../sdk/models/shared/entityskillscreaterequestdto.md)                                                                        | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |
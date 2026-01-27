# AtsUpdateInterviewNoteRequest

## Example Usage

```typescript
import { AtsUpdateInterviewNoteRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsUpdateNotesRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateInterviewNoteRequest = {
  atsUpdateNotesRequestDto: {
    authorId: "1234567890",
    content: null,
    passthrough: {
      "other_known_names": "John Doe",
    },
    visibility: {
      sourceValue: "Public",
      value: AtsUpdateNotesRequestDtoValue.Public,
    },
  },
  prefer: "heartbeat",
  id: "<id>",
  subResourceId: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `atsUpdateNotesRequestDto`                                                                                                                                               | [shared.AtsUpdateNotesRequestDto](../../../sdk/models/shared/atsupdatenotesrequestdto.md)                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `subResourceId`                                                                                                                                                          | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |
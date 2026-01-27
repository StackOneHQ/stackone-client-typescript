# AtsCreateInterviewNoteRequest

## Example Usage

```typescript
import { AtsCreateInterviewNoteRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsCreateNotesRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateInterviewNoteRequest = {
  atsCreateNotesRequestDto: {
    authorId: "1234567890",
    content: [
      {
        body: "This candidate seems like a good fit for the role",
      },
    ],
    passthrough: {
      "other_known_names": "John Doe",
    },
    visibility: {
      sourceValue: "Public",
      value: AtsCreateNotesRequestDtoValue.Public,
    },
  },
  prefer: "heartbeat",
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `atsCreateNotesRequestDto`                                                                                                                                               | [shared.AtsCreateNotesRequestDto](../../../sdk/models/shared/atscreatenotesrequestdto.md)                                                                                | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |
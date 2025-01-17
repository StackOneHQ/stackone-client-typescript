# AtsUpdateApplicationNoteRequest

## Example Usage

```typescript
import { AtsUpdateApplicationNoteRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsUpdateApplicationNoteRequest = {
  atsUpdateNotesRequestDto: {
    authorId: "1234567890",
    content: [
      {
        body: "This candidate seems like a good fit for the role",
      },
    ],
    passthrough: {
      "other_known_names": "John Doe",
    },
    visibility: {},
  },
  id: "<id>",
  subResourceId: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `atsUpdateNotesRequestDto`                                                                | [shared.AtsUpdateNotesRequestDto](../../../sdk/models/shared/atsupdatenotesrequestdto.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `subResourceId`                                                                           | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `xAccountId`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | The account identifier                                                                    |
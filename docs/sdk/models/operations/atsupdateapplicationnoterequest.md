# AtsUpdateApplicationNoteRequest

## Example Usage

```typescript
import { AtsUpdateApplicationNoteRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsUpdateNotesRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateApplicationNoteRequest = {
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
# AtsCreateCandidateNoteRequest

## Example Usage

```typescript
import { AtsCreateCandidateNoteRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsCreateCandidateNoteRequest = {
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
    visibility: {},
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `atsCreateNotesRequestDto`                                                                | [shared.AtsCreateNotesRequestDto](../../../sdk/models/shared/atscreatenotesrequestdto.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `xAccountId`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | The account identifier                                                                    |
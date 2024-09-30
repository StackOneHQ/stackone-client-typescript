# AtsCreateCandidateNoteRequest

## Example Usage

```typescript
import { AtsCreateCandidateNoteRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsCreateNotesRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

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
    visibility: {
      sourceValue: "Public",
      value: AtsCreateNotesRequestDtoValue.Public,
    },
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
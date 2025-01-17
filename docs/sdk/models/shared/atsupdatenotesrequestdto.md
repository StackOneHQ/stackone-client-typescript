# AtsUpdateNotesRequestDto

## Example Usage

```typescript
import { AtsUpdateNotesRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateNotesRequestDto = {
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
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `authorId`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Unique identifier of the author                                                                               | 1234567890                                                                                                    |
| `content`                                                                                                     | [shared.NoteContentApiModel](../../../sdk/models/shared/notecontentapimodel.md)[]                             | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `passthrough`                                                                                                 | Record<string, *any*>                                                                                         | :heavy_minus_sign:                                                                                            | Value to pass through to the provider                                                                         | {<br/>"other_known_names": "John Doe"<br/>}                                                                   |
| `visibility`                                                                                                  | [shared.AtsUpdateNotesRequestDtoVisibility](../../../sdk/models/shared/atsupdatenotesrequestdtovisibility.md) | :heavy_minus_sign:                                                                                            | Visibility of the note                                                                                        | public                                                                                                        |
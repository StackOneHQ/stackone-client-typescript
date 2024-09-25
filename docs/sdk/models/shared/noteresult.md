# NoteResult

## Example Usage

```typescript
import { NoteResult, NoteValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: NoteResult = {
  data: {
    authorId: "1234567890",
    content: [
      {
        body: "This candidate seems like a good fit for the role",
      },
    ],
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    deletedAt: new Date("2021-01-01T01:01:01.000Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteAuthorId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    visibility: {
      sourceValue: "Public",
      value: NoteValue.Public,
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Note](../../../sdk/models/shared/note.md)                 | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
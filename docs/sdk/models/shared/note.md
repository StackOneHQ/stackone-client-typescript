# Note

## Example Usage

```typescript
import { Note, NoteValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Note = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authorId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier of the author                                                               | 1234567890                                                                                    |
| `content`                                                                                     | [shared.NoteContentApiModel](../../../sdk/models/shared/notecontentapimodel.md)[]             | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of creation                                                                              | 2021-01-01T01:01:01.000Z                                                                      |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of Deletion                                                                              | 2021-01-01T01:01:01.000Z                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `remoteAuthorId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the author                                                    | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `unifiedCustomFields`                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom Unified Fields configured in your StackOne project                                     | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of last update                                                                           | 2021-01-01T01:01:01.000Z                                                                      |
| `visibility`                                                                                  | [shared.NoteVisibility](../../../sdk/models/shared/notevisibility.md)                         | :heavy_minus_sign:                                                                            | Visibility of the note                                                                        | public                                                                                        |
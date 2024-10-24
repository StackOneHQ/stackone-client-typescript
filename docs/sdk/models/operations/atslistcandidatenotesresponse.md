# AtsListCandidateNotesResponse

## Example Usage

```typescript
import { AtsListCandidateNotesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { NoteValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsListCandidateNotesResponse = {
  contentType: "<value>",
  notesPaginated: {
    data: [
      {
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
    ],
  },
  statusCode: 305,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `notesPaginated`                                                            | [shared.NotesPaginated](../../../sdk/models/shared/notespaginated.md)       | :heavy_minus_sign:                                                          | The notes related to the candidate with the given identifier was retrieved. |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
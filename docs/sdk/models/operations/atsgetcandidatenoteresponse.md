# AtsGetCandidateNoteResponse

## Example Usage

```typescript
import { AtsGetCandidateNoteResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsGetCandidateNoteResponse = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | HTTP response content type for this operation                                                        |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `noteResult`                                                                                         | [shared.NoteResult](../../../sdk/models/shared/noteresult.md)                                        | :heavy_minus_sign:                                                                                   | The note with the given identifier related to the candidate with the given identifier was retrieved. |
| `statusCode`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | HTTP response status code for this operation                                                         |
| `rawResponse`                                                                                        | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                | :heavy_check_mark:                                                                                   | Raw HTTP response; suitable for custom response parsing                                              |
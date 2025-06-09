# AtsListCandidatesResponse

## Example Usage

```typescript
import { AtsListCandidatesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListCandidatesResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `candidatesPaginated`                                                           | [shared.CandidatesPaginated](../../../sdk/models/shared/candidatespaginated.md) | :heavy_minus_sign:                                                              | The list of candidates was retrieved.                                           |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |
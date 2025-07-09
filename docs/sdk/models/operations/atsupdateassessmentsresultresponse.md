# AtsUpdateAssessmentsResultResponse

## Example Usage

```typescript
import { AtsUpdateAssessmentsResultResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsUpdateAssessmentsResultResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
  },
  statusCode: 427654,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `updateResult`                                                        | [shared.UpdateResult](../../../sdk/models/shared/updateresult.md)     | :heavy_minus_sign:                                                    | The result update of the assessment for candidate.                    |
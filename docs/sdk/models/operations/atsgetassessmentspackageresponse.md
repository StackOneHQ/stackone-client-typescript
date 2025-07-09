# AtsGetAssessmentsPackageResponse

## Example Usage

```typescript
import { AtsGetAssessmentsPackageResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsGetAssessmentsPackageResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  statusCode: 791827,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `assessmentPackageResult`                                                               | [shared.AssessmentPackageResult](../../../sdk/models/shared/assessmentpackageresult.md) | :heavy_minus_sign:                                                                      | The assessments package with the given identifier was retrieved.                        |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
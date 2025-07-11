# HrisListEmployeeSkillsResponse

## Example Usage

```typescript
import { HrisListEmployeeSkillsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeSkillsResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 842248,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `entitySkillsPaginated`                                                             | [shared.EntitySkillsPaginated](../../../sdk/models/shared/entityskillspaginated.md) | :heavy_minus_sign:                                                                  | The skills related to the employee with the given identifier were retrieved.        |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
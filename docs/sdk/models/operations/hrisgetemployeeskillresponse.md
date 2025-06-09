# HrisGetEmployeeSkillResponse

## Example Usage

```typescript
import { HrisGetEmployeeSkillResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetEmployeeSkillResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `entitySkillResult`                                                         | [shared.EntitySkillResult](../../../sdk/models/shared/entityskillresult.md) | :heavy_minus_sign:                                                          | The skill related to the employee with the given identifiers was retrieved. |
| `headers`                                                                   | Record<string, *string*[]>                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
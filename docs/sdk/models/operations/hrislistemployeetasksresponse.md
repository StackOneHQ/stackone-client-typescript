# HrisListEmployeeTasksResponse

## Example Usage

```typescript
import { HrisListEmployeeTasksResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeTasksResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `headers`                                                                   | Record<string, *string*[]>                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
| `tasksPaginated`                                                            | [shared.TasksPaginated](../../../sdk/models/shared/taskspaginated.md)       | :heavy_minus_sign:                                                          | The list of tasks for the employee with the given identifier was retrieved. |
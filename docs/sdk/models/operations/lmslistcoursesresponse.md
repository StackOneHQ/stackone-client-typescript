# LmsListCoursesResponse

## Example Usage

```typescript
import { LmsListCoursesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListCoursesResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `coursePaginated`                                                       | [shared.CoursePaginated](../../../sdk/models/shared/coursepaginated.md) | :heavy_minus_sign:                                                      | The list of courses was retrieved.                                      |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
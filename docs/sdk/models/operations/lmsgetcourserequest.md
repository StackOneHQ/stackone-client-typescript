# LmsGetCourseRequest

## Example Usage

```typescript
import { LmsGetCourseRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsGetCourseRequest = {
    fields: "id,remote_id,external_reference,content_ids,remote_content_ids,title,description,languages,course_type,cover_url,active,duration,categories,skills,updated_at,created_at",
    id: "<id>",
    xAccountId: "<value>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fields`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | The comma separated list of fields that will be returned in the response (if empty, all fields are returned)                                                             | id,remote_id,external_reference,content_ids,remote_content_ids,title,description,languages,course_type,cover_url,active,duration,categories,skills,updated_at,created_at |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `proxy`                                                                                                                                                                  | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key                                     |                                                                                                                                                                          |
| `raw`                                                                                                                                                                    | *boolean*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                       | Indicates that the raw request result is returned                                                                                                                        |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |
# LmsListCoursesQueryParamFilter

LMS Courses Filter

## Example Usage

```typescript
import { LmsListCoursesQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListCoursesQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `externalReference`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | Filter to select courses by external_reference                                |                                                                               |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |
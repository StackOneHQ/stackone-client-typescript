# LmsListCoursesQueryParamFilter

LMS Courses Filter

## Example Usage

```typescript
import { LmsListCoursesQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListCoursesQueryParamFilter = {
  updatedAfter: new Date("2020-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `active`                                                                                      | *operations.QueryParamActive*                                                                 | :heavy_minus_sign:                                                                            | Filter to allow filtering of only active courses                                              |                                                                                               |
| `externalReference`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter to select courses by external_reference                                                |                                                                                               |
| `updatedAfter`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Use a string with a date to only select results updated after that given date                 | 2020-01-01T00:00:00.000Z                                                                      |
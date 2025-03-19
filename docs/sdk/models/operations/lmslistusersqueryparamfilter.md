# LmsListUsersQueryParamFilter

LMS Users Filter

## Example Usage

```typescript
import { LmsListUsersQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListUsersQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `email`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Filter to select users by email                                               |                                                                               |
| `externalReference`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | Filter to select users by external_reference                                  |                                                                               |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |
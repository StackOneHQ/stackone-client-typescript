# AtsListInterviewsQueryParamFilter

ATS Interviews Filter

## Example Usage

```typescript
import { AtsListInterviewsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListInterviewsQueryParamFilter = {
  createdAfter: new Date("2020-01-01T00:00:00.000Z"),
  updatedAfter: new Date("2020-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAfter`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Use a string with a date to only select results created after that given date                 | 2020-01-01T00:00:00.000Z                                                                      |
| `updatedAfter`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Use a string with a date to only select results updated after that given date                 | 2020-01-01T00:00:00.000Z                                                                      |
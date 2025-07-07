# LmsListAssignmentsQueryParamFilter

LMS Assignment Filter

## Example Usage

```typescript
import { LmsListAssignmentsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListAssignmentsQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                              | [operations.LmsListAssignmentsQueryParamStatus](../../../sdk/models/operations/lmslistassignmentsqueryparamstatus.md) | :heavy_minus_sign:                                                                                                    | Filter to select assignment by status                                                                                 |                                                                                                                       |
| `updatedAfter`                                                                                                        | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Use a string with a date to only select results updated after that given date                                         | 2020-01-01T00:00:00.000Z                                                                                              |
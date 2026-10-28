# StepsLogsPostDtoFilters

The filters to apply to the results

## Example Usage

```typescript
import { StepsLogsPostDtoFilters } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StepsLogsPostDtoFilters = {
  accountSecureId: [
    "45355976281015164504",
  ],
  actionRunId: [
    "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  ],
  endTime: "2025-01-31T23:59:59.999Z",
  startTime: "2025-01-01T00:00:00.000Z",
  success: true,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `accountSecureId`                                                                                     | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | Filter by account IDs                                                                                 | [<br/>"45355976281015164504"<br/>]                                                                    |
| `actionRunId`                                                                                         | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | Filter by action run IDs                                                                              | [<br/>"adbf752f-6457-4ddd-89b3-98ae2252b83b"<br/>]                                                    |
| `endTime`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The end of the time range to filter by (ISO 8601 timestamp)                                           | 2025-01-31T23:59:59.999Z                                                                              |
| `orderBy`                                                                                             | [shared.StepsLogsPostDtoOrderBy](../../../sdk/models/shared/stepslogspostdtoorderby.md)               | :heavy_minus_sign:                                                                                    | The field to order the results by                                                                     |                                                                                                       |
| `orderDirection`                                                                                      | [shared.StepsLogsPostDtoOrderDirection](../../../sdk/models/shared/stepslogspostdtoorderdirection.md) | :heavy_minus_sign:                                                                                    | The direction to order the results by                                                                 |                                                                                                       |
| `startTime`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The start of the time range to filter by (ISO 8601 timestamp)                                         | 2025-01-01T00:00:00.000Z                                                                              |
| `stepId`                                                                                              | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | Filter by step IDs                                                                                    |                                                                                                       |
| `stepIndex`                                                                                           | *number*[]                                                                                            | :heavy_minus_sign:                                                                                    | Filter by step indexes                                                                                |                                                                                                       |
| `success`                                                                                             | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Filter by success status                                                                              | true                                                                                                  |
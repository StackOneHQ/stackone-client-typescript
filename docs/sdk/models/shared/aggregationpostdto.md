# AggregationPostDto

## Example Usage

```typescript
import { AggregationPostDto, RiskLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AggregationPostDto = {
  filters: {
    accountSecureId: [
      "45355976281015164504",
    ],
    action: [
      "create_employee",
    ],
    actionId: [
      "get_employees",
    ],
    actionRunId: [
      "adbf752f-6457-4ddd-89b3-98ae2252b83b",
    ],
    actionType: [
      "sync",
    ],
    category: [
      "hris",
    ],
    connectorKey: [
      "slack",
    ],
    connectorVersion: [
      "1.0.0",
    ],
    endTime: "2025-01-31T23:59:59.999Z",
    logId: [
      "adbf752f-6457-4ddd-89b3-98ae2252b83b",
    ],
    mode: [
      "production",
    ],
    originOwnerId: [
      "owner-123",
    ],
    provider: [
      "hibob",
    ],
    requestId: [
      "adbf752f-6457-4ddd-89b3-98ae2252b83b",
    ],
    resource: [
      "employees",
    ],
    riskLevel: [
      RiskLevel.High,
      RiskLevel.Critical,
    ],
    service: [
      "hris",
    ],
    sourceId: [
      "1234567890",
    ],
    sourceType: [
      "DASHBOARD",
    ],
    startTime: "2025-01-01T00:00:00.000Z",
    statusCode: [
      "200",
    ],
    subResource: [
      "documents",
    ],
    success: true,
  },
  intervalPeriod: 1,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `dimensions`                                                                                | [shared.Dimensions](../../../sdk/models/shared/dimensions.md)[]                             | :heavy_minus_sign:                                                                          | The dimensions to group the results by                                                      |                                                                                             |
| `filters`                                                                                   | [shared.AggregationPostDtoFilters](../../../sdk/models/shared/aggregationpostdtofilters.md) | :heavy_minus_sign:                                                                          | The filters to apply to the results                                                         |                                                                                             |
| `intervalPeriod`                                                                            | *number*                                                                                    | :heavy_minus_sign:                                                                          | The number of interval units per time bucket                                                | 1                                                                                           |
| `intervalType`                                                                              | [shared.IntervalType](../../../sdk/models/shared/intervaltype.md)                           | :heavy_minus_sign:                                                                          | The time interval to bucket results by                                                      |                                                                                             |
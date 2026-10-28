# ProviderLogsPostDtoFilters

The filters to apply to the results

## Example Usage

```typescript
import { ProviderLogsPostDtoFilters } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ProviderLogsPostDtoFilters = {
  accountSecureId: [
    "45355976281015164504",
  ],
  endTime: "2025-01-31T23:59:59.999Z",
  requestId: [
    "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  ],
  startTime: "2025-01-01T00:00:00.000Z",
  success: true,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `accountSecureId`                                                                                           | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | Filter by account IDs                                                                                       | [<br/>"45355976281015164504"<br/>]                                                                          |
| `endTime`                                                                                                   | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The end of the time range to filter by (ISO 8601 timestamp)                                                 | 2025-01-31T23:59:59.999Z                                                                                    |
| `id`                                                                                                        | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | Filter by provider log IDs                                                                                  |                                                                                                             |
| `orderBy`                                                                                                   | [shared.ProviderLogsPostDtoOrderBy](../../../sdk/models/shared/providerlogspostdtoorderby.md)               | :heavy_minus_sign:                                                                                          | The field to order the results by                                                                           |                                                                                                             |
| `orderDirection`                                                                                            | [shared.ProviderLogsPostDtoOrderDirection](../../../sdk/models/shared/providerlogspostdtoorderdirection.md) | :heavy_minus_sign:                                                                                          | The direction to order the results by                                                                       |                                                                                                             |
| `requestId`                                                                                                 | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | Filter by request IDs                                                                                       | [<br/>"adbf752f-6457-4ddd-89b3-98ae2252b83b"<br/>]                                                          |
| `startTime`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The start of the time range to filter by (ISO 8601 timestamp)                                               | 2025-01-01T00:00:00.000Z                                                                                    |
| `success`                                                                                                   | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | Filter by success status                                                                                    | true                                                                                                        |
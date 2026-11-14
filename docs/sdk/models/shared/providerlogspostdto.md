# ProviderLogsPostDto

## Example Usage

```typescript
import { ProviderLogsPostDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ProviderLogsPostDto = {
  filters: {
    accountSecureId: [
      "45355976281015164504",
    ],
    endTime: "2025-01-31T23:59:59.999Z",
    requestId: [
      "adbf752f-6457-4ddd-89b3-98ae2252b83b",
    ],
    startTime: "2025-01-01T00:00:00.000Z",
    success: true,
  },
  page: 1,
  pageSize: 25,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `filters`                                                                                     | [shared.ProviderLogsPostDtoFilters](../../../sdk/models/shared/providerlogspostdtofilters.md) | :heavy_minus_sign:                                                                            | The filters to apply to the results                                                           |                                                                                               |
| `page`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | The page number of the results to return                                                      | 1                                                                                             |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of results per page                                                                | 25                                                                                            |
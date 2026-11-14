# LogsPaginated

## Example Usage

```typescript
import { LogsPaginated, LogType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LogsPaginated = {
  data: [
    {
      actionRunId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      logId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      logType: LogType.Action,
    },
  ],
  query: {},
  total: 100,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | *shared.LogsPaginatedData*[]                                                  | :heavy_check_mark:                                                            | The list of logs (ActionLog or UnifiedLog)                                    |                                                                               |
| `query`                                                                       | [shared.LogsPaginatedQuery](../../../sdk/models/shared/logspaginatedquery.md) | :heavy_minus_sign:                                                            | Pagination metadata                                                           | {<br/>"page": 1,<br/>"page_size": 25<br/>}                                    |
| `total`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | Total number of logs                                                          | 100                                                                           |
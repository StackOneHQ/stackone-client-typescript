# StackoneRpcActionSyncedRequest

## Example Usage

```typescript
import { StackoneRpcActionSyncedRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneRpcActionSyncedRequest = {
  actionsRpcSyncedRequestDto: {
    action: "create_employee",
    aggs: {
      "by_status": {
        "terms": {
          "field": "employment_status",
        },
      },
    },
    filter: {
      "match": {
        "description": "onboarding",
      },
    },
    search: "onboarding safety",
    sort: [
      {
        "last_name": "desc",
      },
    ],
    source: [
      "first_name",
      "email",
    ],
    syncId: "sch_01J8Z3Q4",
  },
  pageSize: 25,
  skip: 0,
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actionsRpcSyncedRequestDto`                                                                                                                                                                                                                                                                 | [shared.ActionsRpcSyncedRequestDto](../../../sdk/models/shared/actionsrpcsyncedrequestdto.md)                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                              |
| `pageSize`                                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | The number of results to return per page (minimum 1, maximum 200, default 100). With a non-empty `aggs` there is no default: omit it to get aggregations only, or set it to also get that page of records. A page of large records can hold fewer, marked `truncated: true` in the response. | 25                                                                                                                                                                                                                                                                                           |
| `skip`                                                                                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | The number of results to skip before returning results. skip + page_size cannot exceed 10000 (page_size defaulting to 100 when omitted); narrow the filter to reach records beyond that. After a `truncated` page, continue from skip plus the number of records returned.                   | 0                                                                                                                                                                                                                                                                                            |
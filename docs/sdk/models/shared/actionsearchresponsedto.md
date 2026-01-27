# ActionSearchResponseDto

## Example Usage

```typescript
import { ActionSearchResponseDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionSearchResponseDto = {
  query: "<value>",
  results: [],
  totalCount: 9225.29,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `connectorFilter`                                                                     | *string*                                                                              | :heavy_minus_sign:                                                                    | Connector filter applied                                                              |
| `projectFilter`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | Project filter applied                                                                |
| `query`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | Original search query                                                                 |
| `results`                                                                             | [shared.ActionSearchResultDto](../../../sdk/models/shared/actionsearchresultdto.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `totalCount`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | Total number of results returned                                                      |
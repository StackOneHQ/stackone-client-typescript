# ActionSearchDto

## Example Usage

```typescript
import { ActionSearchDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionSearchDto = {
  connector: "slack",
  query: "send a message",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `connector`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | Filter by connector key                                                              | slack                                                                                |
| `minSimilarity`                                                                      | *number*                                                                             | :heavy_minus_sign:                                                                   | Minimum similarity score threshold (0-1). Results below this score are filtered out. | 0.4                                                                                  |
| `query`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Search query for finding connector actions                                           | send a message                                                                       |
| `topK`                                                                               | *number*                                                                             | :heavy_minus_sign:                                                                   | Number of results to return                                                          |                                                                                      |
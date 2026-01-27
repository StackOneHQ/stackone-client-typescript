# ActionSearchResultDto

## Example Usage

```typescript
import { ActionSearchResultDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionSearchResultDto = {
  actionName: "<value>",
  connectorKey: "<value>",
  description: "including awkwardly stigmatize whether underneath",
  label: "<value>",
  projectId: "<id>",
  similarityScore: 4837.12,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `actionName`                                         | *string*                                             | :heavy_check_mark:                                   | Unique action identifier                             |
| `connectorKey`                                       | *string*                                             | :heavy_check_mark:                                   | Connector key                                        |
| `description`                                        | *string*                                             | :heavy_check_mark:                                   | Action description                                   |
| `label`                                              | *string*                                             | :heavy_check_mark:                                   | Human-readable action label                          |
| `projectId`                                          | *string*                                             | :heavy_check_mark:                                   | Project ID of the action (global for shared actions) |
| `similarityScore`                                    | *number*                                             | :heavy_check_mark:                                   | Cosine similarity score (0-1)                        |
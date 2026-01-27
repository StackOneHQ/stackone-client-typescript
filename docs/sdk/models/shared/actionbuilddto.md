# ActionBuildDto

## Example Usage

```typescript
import { ActionBuildDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionBuildDto = {
  connectorKey: "slack",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connectorKey`                                                  | *string*                                                        | :heavy_minus_sign:                                              | Specific connector key to rebuild embeddings for                | slack                                                           |
| `forceRefresh`                                                  | *boolean*                                                       | :heavy_minus_sign:                                              | Force refresh - clear all existing embeddings before rebuilding |                                                                 |
# Query

Query parameters for the action

## Example Usage

```typescript
import { Query } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Query = {
  debug: false,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `additionalProperties`                     | Record<string, *any*>                      | :heavy_minus_sign:                         | N/A                                        |                                            |
| `debug`                                    | *boolean*                                  | :heavy_minus_sign:                         | Enable debug mode for the action execution | false                                      |
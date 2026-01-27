# ScopeDefinitionMetaItem

## Example Usage

```typescript
import { ScopeDefinitionMetaItem } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScopeDefinitionMetaItem = {
  description: "ah while psst twist impact lounge but between busily afore",
  name: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `description`                              | *string*                                   | :heavy_check_mark:                         | The scope description                      |
| `includes`                                 | *string*[]                                 | :heavy_minus_sign:                         | The scopes auto-included within this scope |
| `name`                                     | *string*                                   | :heavy_check_mark:                         | The scope name                             |
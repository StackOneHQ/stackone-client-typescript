# AuthenticationMetaItem

## Example Usage

```typescript
import { AuthenticationMetaItem } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AuthenticationMetaItem = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The authentication key                                                                                     |
| `label`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The authentication label                                                                                   |
| `requiredScopes`                                                                                           | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | The required scopes for this authentication method                                                         |
| `support`                                                                                                  | [shared.Support](../../../sdk/models/shared/support.md)                                                    | :heavy_minus_sign:                                                                                         | The support information for this authentication method, including configuration and account linking guides |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The authentication type                                                                                    |
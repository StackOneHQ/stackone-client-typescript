# ActionsMeta

## Example Usage

```typescript
import { ActionsMeta } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionsMeta = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `actions`                                                                               | [shared.ActionMetaItem](../../../sdk/models/shared/actionmetaitem.md)[]                 | :heavy_minus_sign:                                                                      | The list of actions available for this provider                                         |
| `authentication`                                                                        | [shared.AuthenticationMetaItem](../../../sdk/models/shared/authenticationmetaitem.md)[] | :heavy_minus_sign:                                                                      | The authentication methods supported by the provider                                    |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | The description of the provider                                                         |
| `icon`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | The icon URL for the provider                                                           |
| `key`                                                                                   | *string*                                                                                | :heavy_minus_sign:                                                                      | The unique key for the provider                                                         |
| `name`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | The name of the provider                                                                |
| `version`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | The version of the actions metadata                                                     |
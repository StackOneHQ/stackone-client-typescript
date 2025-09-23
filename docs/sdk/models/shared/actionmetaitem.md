# ActionMetaItem

## Example Usage

```typescript
import { ActionMetaItem } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionMetaItem = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `authentication`                                                                        | [shared.AuthenticationMetaItem](../../../sdk/models/shared/authenticationmetaitem.md)[] | :heavy_minus_sign:                                                                      | The authentication methods supported by this action                                     |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | The action description                                                                  |
| `id`                                                                                    | *string*                                                                                | :heavy_minus_sign:                                                                      | The action ID                                                                           |
| `label`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | The action label                                                                        |
| `operationDetails`                                                                      | Record<string, *any*>                                                                   | :heavy_minus_sign:                                                                      | The operation details for the action                                                    |
| `schemaType`                                                                            | *string*                                                                                | :heavy_minus_sign:                                                                      | The schema type for the action                                                          |
| `tags`                                                                                  | *string*[]                                                                              | :heavy_minus_sign:                                                                      | The tags associated with this action                                                    |
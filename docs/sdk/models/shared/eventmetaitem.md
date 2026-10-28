# EventMetaItem

## Example Usage

```typescript
import { EventMetaItem } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EventMetaItem = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `authentication`                                                                        | [shared.AuthenticationMetaItem](../../../sdk/models/shared/authenticationmetaitem.md)[] | :heavy_minus_sign:                                                                      | The authentication methods supported by this event                                      |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | The event description                                                                   |
| `id`                                                                                    | *string*                                                                                | :heavy_minus_sign:                                                                      | The event ID                                                                            |
| `label`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | The event label                                                                         |
| `releaseStage`                                                                          | *string*                                                                                | :heavy_minus_sign:                                                                      | The release stage of the event (e.g., ga, beta, preview)                                |
| `requiresManualSetup`                                                                   | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Whether the event requires manual setup                                                 |
| `tags`                                                                                  | *string*[]                                                                              | :heavy_minus_sign:                                                                      | The tags associated with this event                                                     |
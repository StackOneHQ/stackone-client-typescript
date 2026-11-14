# UnifiedLogConnector

The connector display data — name, logo and categories. Only present when requested via `?expand=connector`; `connector_key`, `connector_version` and `connector_owner` are always returned regardless.

## Example Usage

```typescript
import { UnifiedLogConnector } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedLogConnector = {
  categories: [
    "hris",
  ],
  key: "workday",
  logoUrl: "https://app.stackone.com/logos/workday.png",
  name: "Workday",
  owner: "stackone",
  version: "1.0.0",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `categories`                                                           | *string*[]                                                             | :heavy_check_mark:                                                     | The connector categories                                               | [<br/>"hris"<br/>]                                                     |
| `key`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | The connector key                                                      | workday                                                                |
| `logoUrl`                                                              | *string*                                                               | :heavy_check_mark:                                                     | The connector logo. Falls back to a placeholder when none is declared. | https://app.stackone.com/logos/workday.png                             |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The connector display name. `null` when the connector is unknown.      | Workday                                                                |
| `owner`                                                                | *string*                                                               | :heavy_check_mark:                                                     | The connector owner. Defaults to the global `stackone` owner.          | stackone                                                               |
| `version`                                                              | *string*                                                               | :heavy_check_mark:                                                     | The connector version the log was served by                            | 1.0.0                                                                  |
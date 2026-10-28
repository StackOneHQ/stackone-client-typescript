# ConnectorProfile

## Example Usage

```typescript
import { ConnectorProfile } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConnectorProfile = {
  active: false,
  categories: [],
  connectorKey: "<value>",
  connectorLabel: "<value>",
  createdAt: new Date("2025-11-30T14:56:26.507Z"),
  default: false,
  id: "<id>",
  logoUrl: "https://legal-interviewer.net",
  name: "<value>",
  releaseStage: "<value>",
  updatedAt: new Date("2026-08-16T17:13:25.652Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the connector profile is enabled                                                      |
| `authenticationConfigKey`                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The authentication configuration key                                                          |
| `authenticationConfigLabel`                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The human-readable authentication configuration label                                         |
| `categories`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | The categories this connector profile belongs to                                              |
| `connectorKey`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The connector key (provider identifier)                                                       |
| `connectorLabel`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The human-readable connector label                                                            |
| `connectorOwner`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The owner of the connector version                                                            |
| `connectorPinnedVersion`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The pinned connector version, if set                                                          |
| `connectorVersion`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The resolved connector version                                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the connector profile was created                                          |
| `default`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this is the default connector profile                                                 |
| `environment`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The environment of the connector profile                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the connector profile                                                |
| `logoUrl`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The URL of the connector logo                                                                 |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The display name of the connector profile                                                     |
| `releaseStage`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The release stage of the connector                                                            |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the connector profile was last updated                                     |
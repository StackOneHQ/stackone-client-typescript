# AuthConfig

## Example Usage

```typescript
import { AuthConfig } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AuthConfig = {
  active: true,
  categories: [],
  connectorKey: "<value>",
  connectorLabel: "<value>",
  createdAt: new Date("2025-01-19T09:59:32.439Z"),
  default: true,
  id: "<id>",
  logoUrl: "https://equatorial-confusion.org",
  name: "<value>",
  releaseStage: "<value>",
  updatedAt: new Date("2025-02-07T13:43:54.101Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the auth config is enabled                                                            |
| `authenticationConfigKey`                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The authentication configuration key                                                          |
| `authenticationConfigLabel`                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The human-readable authentication configuration label                                         |
| `categories`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | The categories this auth config belongs to                                                    |
| `connectorKey`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The connector key (provider identifier)                                                       |
| `connectorLabel`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The human-readable connector label                                                            |
| `connectorOwner`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The owner of the connector version                                                            |
| `connectorPinnedVersion`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The pinned connector version, if set                                                          |
| `connectorVersion`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The resolved connector version                                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the auth config was created                                                |
| `default`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this is the default auth config                                                       |
| `environment`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The environment of the auth config                                                            |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the auth config                                                      |
| `logoUrl`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The URL of the connector logo                                                                 |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The display name of the auth config                                                           |
| `releaseStage`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The release stage of the connector                                                            |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the auth config was last updated                                           |
# ConnectorProfilePinnedVersion

## Example Usage

```typescript
import { ConnectorProfilePinnedVersion } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConnectorProfilePinnedVersion = {
  connectorProfileId: "<id>",
  createdAt: new Date("2026-05-26T20:41:48.014Z"),
  pinnedVersion: "<value>",
  updatedAt: new Date("2026-02-23T17:43:38.757Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `connectorProfileId`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The id of the connector profile this pinned version belongs to                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the pinned version was created                                             |
| `owner`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The owner of the pinned connector version                                                     |
| `pinnedVersion`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The pinned connector version                                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the pinned version was last updated                                        |
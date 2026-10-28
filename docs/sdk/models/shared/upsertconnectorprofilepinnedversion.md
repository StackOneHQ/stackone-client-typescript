# UpsertConnectorProfilePinnedVersion

## Example Usage

```typescript
import { UpsertConnectorProfilePinnedVersion } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UpsertConnectorProfilePinnedVersion = {
  pinnedVersion: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `owner`                                      | *string*                                     | :heavy_minus_sign:                           | The owner of the pinned version              |
| `pinnedVersion`                              | *string*                                     | :heavy_check_mark:                           | The version to pin for the connector profile |
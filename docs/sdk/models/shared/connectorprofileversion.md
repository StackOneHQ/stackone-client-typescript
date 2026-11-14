# ConnectorProfileVersion

## Example Usage

```typescript
import { ConnectorProfileVersion } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConnectorProfileVersion = {
  builtin: true,
  owner: "<value>",
  pinned: false,
  version: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `builtin`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether this version is a built-in StackOne connector (true) or a custom one (false) |
| `owner`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | The owner of this connector version. "stackone" for built-in connectors.             |
| `pinned`                                                                             | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether this version is the one currently pinned for the connector profile           |
| `version`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The connector version                                                                |
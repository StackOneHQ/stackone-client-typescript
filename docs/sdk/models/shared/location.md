# Location

The location of the time entry

## Example Usage

```typescript
import { Location } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Location = {
  active: true,
  id: "1687-3",
  name: "1687-4",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `active`                             | *shared.TimeEntriesActive*           | :heavy_minus_sign:                   | The reference status                 | true                                 |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | The reference id                     | 1687-3                               |
| `name`                               | *string*                             | :heavy_minus_sign:                   | The reference name                   | 1687-4                               |
| `remoteId`                           | *string*                             | :heavy_minus_sign:                   | Provider's unique identifier         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3 |
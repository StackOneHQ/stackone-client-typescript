# Source

## Example Usage

```typescript
import { Source } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Source = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "LinkedIn",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | Unique identifier                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3 |
| `name`                               | *string*                             | :heavy_minus_sign:                   | The source of the application        | LinkedIn                             |
| `remoteId`                           | *string*                             | :heavy_minus_sign:                   | Provider's unique identifier         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3 |
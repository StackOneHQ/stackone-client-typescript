# Skills

## Example Usage

```typescript
import { Skills } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Skills = {
  active: true,
  id: "16873-IT345",
  name: "Information-Technology",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `active`                                                    | *boolean*                                                   | :heavy_minus_sign:                                          | Whether the skill is active and therefore available for use | true                                                        |
| `id`                                                        | *string*                                                    | :heavy_minus_sign:                                          | The ID associated with this skill                           | 16873-IT345                                                 |
| `level`                                                     | [shared.Level](../../../sdk/models/shared/level.md)         | :heavy_minus_sign:                                          | The hierarchal level of the skill                           |                                                             |
| `name`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The name associated with this skill                         | Information-Technology                                      |
| `remoteId`                                                  | *string*                                                    | :heavy_minus_sign:                                          | Provider's unique identifier                                | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                        |
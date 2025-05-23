# MaximumProficiency

The proficiency level of the skill

## Example Usage

```typescript
import { MaximumProficiency } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MaximumProficiency = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Expert",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_minus_sign:                                                                        | Unique identifier                                                                         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                      |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | The name associated with this proficiency                                                 | Expert                                                                                    |
| `remoteId`                                                                                | *string*                                                                                  | :heavy_minus_sign:                                                                        | Provider's unique identifier                                                              | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                      |
| `sourceValue`                                                                             | *shared.EntitySkillsSchemasSourceValue*                                                   | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `value`                                                                                   | [shared.EntitySkillsSchemasValue](../../../sdk/models/shared/entityskillsschemasvalue.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
# EntitySkills

## Example Usage

```typescript
import { EntitySkills, EntitySkillsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EntitySkills = {
  active: true,
  id: "16873-IT345",
  language: {
    value: EntitySkillsValue.EnGB,
  },
  maximumProficiency: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Expert",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
  minimumProficiency: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Expert",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
  name: "Information-Technology",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `active`                                                                          | *boolean*                                                                         | :heavy_minus_sign:                                                                | Whether the skill is active and therefore available for use                       | true                                                                              |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | The ID associated with this skill                                                 | 16873-IT345                                                                       |
| `language`                                                                        | [shared.EntitySkillsLanguage](../../../sdk/models/shared/entityskillslanguage.md) | :heavy_minus_sign:                                                                | The language associated with this skill                                           |                                                                                   |
| `maximumProficiency`                                                              | [shared.MaximumProficiency](../../../sdk/models/shared/maximumproficiency.md)     | :heavy_minus_sign:                                                                | The proficiency level of the skill                                                |                                                                                   |
| `minimumProficiency`                                                              | [shared.MinimumProficiency](../../../sdk/models/shared/minimumproficiency.md)     | :heavy_minus_sign:                                                                | The proficiency level of the skill                                                |                                                                                   |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The name associated with this skill                                               | Information-Technology                                                            |
| `remoteId`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | Provider's unique identifier                                                      | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                              |
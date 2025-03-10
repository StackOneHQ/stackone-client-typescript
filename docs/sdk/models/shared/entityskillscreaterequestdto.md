# EntitySkillsCreateRequestDto

## Example Usage

```typescript
import { EntitySkillsCreateRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EntitySkillsCreateRequestDto = {
  id: "16873-IT345",
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
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                  | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The ID associated with this skill                                                                                                     | 16873-IT345                                                                                                                           |
| `maximumProficiency`                                                                                                                  | [shared.EntitySkillsCreateRequestDtoMaximumProficiency](../../../sdk/models/shared/entityskillscreaterequestdtomaximumproficiency.md) | :heavy_minus_sign:                                                                                                                    | The proficiency level of the skill                                                                                                    |                                                                                                                                       |
| `minimumProficiency`                                                                                                                  | [shared.EntitySkillsCreateRequestDtoMinimumProficiency](../../../sdk/models/shared/entityskillscreaterequestdtominimumproficiency.md) | :heavy_minus_sign:                                                                                                                    | The proficiency level of the skill                                                                                                    |                                                                                                                                       |
| `name`                                                                                                                                | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The name associated with this skill                                                                                                   | Information-Technology                                                                                                                |
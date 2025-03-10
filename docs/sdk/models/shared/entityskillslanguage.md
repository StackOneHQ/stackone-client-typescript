# EntitySkillsLanguage

The language associated with this skill

## Example Usage

```typescript
import { EntitySkillsLanguage, EntitySkillsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EntitySkillsLanguage = {
  value: EntitySkillsValue.EnGB,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sourceValue`                                                               | *shared.EntitySkillsSourceValue*                                            | :heavy_minus_sign:                                                          | N/A                                                                         |                                                                             |
| `value`                                                                     | [shared.EntitySkillsValue](../../../sdk/models/shared/entityskillsvalue.md) | :heavy_minus_sign:                                                          | The Locale Code of the language                                             | en_GB                                                                       |
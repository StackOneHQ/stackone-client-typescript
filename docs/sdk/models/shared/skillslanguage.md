# SkillsLanguage

The language associated with this skill

## Example Usage

```typescript
import { SkillsLanguage, SkillsSchemasLanguageValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: SkillsLanguage = {
  value: SkillsSchemasLanguageValue.EnGB,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                 | *shared.SkillsSchemasLanguageSourceValue*                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `value`                                                                                       | [shared.SkillsSchemasLanguageValue](../../../sdk/models/shared/skillsschemaslanguagevalue.md) | :heavy_minus_sign:                                                                            | The Locale Code of the language                                                               | en_GB                                                                                         |
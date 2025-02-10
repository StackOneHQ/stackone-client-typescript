# SkillsLanguage

The language associated with this skill

## Example Usage

```typescript
import { SkillsLanguage, SkillsSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: SkillsLanguage = {
  value: SkillsSchemasValue.EnGB,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sourceValue`                                                                 | *shared.SkillsSchemasSourceValue*                                             | :heavy_minus_sign:                                                            | N/A                                                                           |                                                                               |
| `value`                                                                       | [shared.SkillsSchemasValue](../../../sdk/models/shared/skillsschemasvalue.md) | :heavy_minus_sign:                                                            | The Locale Code of the language                                               | en_GB                                                                         |
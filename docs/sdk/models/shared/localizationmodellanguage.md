# LocalizationModelLanguage

The language associated with the localization details

## Example Usage

```typescript
import { LocalizationModelLanguage, LocalizationModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LocalizationModelLanguage = {
  value: LocalizationModelValue.EnGB,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `sourceValue`                                                                         | *shared.LocalizationModelSourceValue*                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |
| `value`                                                                               | [shared.LocalizationModelValue](../../../sdk/models/shared/localizationmodelvalue.md) | :heavy_minus_sign:                                                                    | The Locale Code of the language                                                       | en_GB                                                                                 |
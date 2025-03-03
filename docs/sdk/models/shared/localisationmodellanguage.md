# LocalisationModelLanguage

The language associated with this localisation details

## Example Usage

```typescript
import { LocalisationModelLanguage, LocalisationModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LocalisationModelLanguage = {
  value: LocalisationModelValue.EnGB,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `sourceValue`                                                                         | *shared.LocalisationModelSourceValue*                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |
| `value`                                                                               | [shared.LocalisationModelValue](../../../sdk/models/shared/localisationmodelvalue.md) | :heavy_minus_sign:                                                                    | The Locale Code of the language                                                       | en_GB                                                                                 |
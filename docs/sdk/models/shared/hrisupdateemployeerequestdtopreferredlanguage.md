# HrisUpdateEmployeeRequestDtoPreferredLanguage

The employee preferred language

## Example Usage

```typescript
import {
  HrisUpdateEmployeeRequestDtoPreferredLanguage,
  HrisUpdateEmployeeRequestDtoSchemasPreferredLanguageValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoPreferredLanguage = {
  value: HrisUpdateEmployeeRequestDtoSchemasPreferredLanguageValue.Eng,
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 | Example                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                               | *shared.HrisUpdateEmployeeRequestDtoSchemasPreferredLanguageSourceValue*                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |                                                                                                                                                             |
| `value`                                                                                                                                                     | [shared.HrisUpdateEmployeeRequestDtoSchemasPreferredLanguageValue](../../../sdk/models/shared/hrisupdateemployeerequestdtoschemaspreferredlanguagevalue.md) | :heavy_minus_sign:                                                                                                                                          | The ISO639-2 Code of the language                                                                                                                           | eng                                                                                                                                                         |
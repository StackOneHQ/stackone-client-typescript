# HrisCreateEmployeeRequestDtoPreferredLanguage

The employee preferred language

## Example Usage

```typescript
import {
  HrisCreateEmployeeRequestDtoPreferredLanguage,
  HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoPreferredLanguage = {
    value: HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue.Eng,
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 | Example                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                               | *shared.HrisCreateEmployeeRequestDtoSchemasPreferredLanguageSourceValue*                                                                                    | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |                                                                                                                                                             |
| `value`                                                                                                                                                     | [shared.HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue](../../../sdk/models/shared/hriscreateemployeerequestdtoschemaspreferredlanguagevalue.md) | :heavy_minus_sign:                                                                                                                                          | The ISO639-2 Code of the language                                                                                                                           | eng                                                                                                                                                         |
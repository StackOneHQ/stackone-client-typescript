# HrisCreateWorkEligibilityRequestDtoFileFormat

The file format of the file

## Example Usage

```typescript
import {
  HrisCreateWorkEligibilityRequestDtoFileFormat,
  HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateWorkEligibilityRequestDtoFileFormat = {
  sourceValue: "abc",
  value: HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue.Pdf,
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                           | *shared.HrisCreateWorkEligibilityRequestDtoSchemasDocumentFileFormatSourceValue*                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | abc                                                                                                                                                     |
| `value`                                                                                                                                                 | [shared.HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue](../../../sdk/models/shared/hriscreateworkeligibilityrequestdtoschemasdocumentvalue.md) | :heavy_minus_sign:                                                                                                                                      | The file format of the file, expressed as a file extension                                                                                              | pdf                                                                                                                                                     |
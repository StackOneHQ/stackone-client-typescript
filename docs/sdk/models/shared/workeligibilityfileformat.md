# WorkEligibilityFileFormat

The file format of the file

## Example Usage

```typescript
import { WorkEligibilityFileFormat, WorkEligibilitySchemasDocumentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: WorkEligibilityFileFormat = {
  sourceValue: "abc",
  value: WorkEligibilitySchemasDocumentValue.Pdf,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                   | *shared.WorkEligibilitySchemasSourceValue*                                                                      | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | abc                                                                                                             |
| `value`                                                                                                         | [shared.WorkEligibilitySchemasDocumentValue](../../../sdk/models/shared/workeligibilityschemasdocumentvalue.md) | :heavy_minus_sign:                                                                                              | The file format of the file, expressed as a file extension                                                      | pdf                                                                                                             |
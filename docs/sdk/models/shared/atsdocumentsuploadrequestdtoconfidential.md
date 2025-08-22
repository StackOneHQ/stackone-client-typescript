# AtsDocumentsUploadRequestDtoConfidential

The confidentiality level of the file to be uploaded

## Example Usage

```typescript
import {
  AtsDocumentsUploadRequestDtoConfidential,
  AtsDocumentsUploadRequestDtoSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsDocumentsUploadRequestDtoConfidential = {
  sourceValue: "public",
  value: AtsDocumentsUploadRequestDtoSchemasValue.True,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                             | *shared.AtsDocumentsUploadRequestDtoSourceValue*                                                                          | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       | public                                                                                                                    |
| `value`                                                                                                                   | [shared.AtsDocumentsUploadRequestDtoSchemasValue](../../../sdk/models/shared/atsdocumentsuploadrequestdtoschemasvalue.md) | :heavy_minus_sign:                                                                                                        | Whether the file is confidential or not                                                                                   | true                                                                                                                      |
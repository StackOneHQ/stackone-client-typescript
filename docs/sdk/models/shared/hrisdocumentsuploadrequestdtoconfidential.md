# HrisDocumentsUploadRequestDtoConfidential

The confidentiality level of the file to be uploaded

## Example Usage

```typescript
import {
  HrisDocumentsUploadRequestDtoConfidential,
  HrisDocumentsUploadRequestDtoSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisDocumentsUploadRequestDtoConfidential = {
  sourceValue: "public",
  value: HrisDocumentsUploadRequestDtoSchemasValue.True,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                               | *shared.HrisDocumentsUploadRequestDtoSourceValue*                                                                           | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         | public                                                                                                                      |
| `value`                                                                                                                     | [shared.HrisDocumentsUploadRequestDtoSchemasValue](../../../sdk/models/shared/hrisdocumentsuploadrequestdtoschemasvalue.md) | :heavy_minus_sign:                                                                                                          | Whether the file is confidential or not                                                                                     | true                                                                                                                        |
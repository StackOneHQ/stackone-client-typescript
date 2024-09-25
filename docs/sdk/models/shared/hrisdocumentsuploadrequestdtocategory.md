# HrisDocumentsUploadRequestDtoCategory

The category to be associated with the file to be uploaded. Id will take precedence over name.

## Example Usage

```typescript
import { HrisDocumentsUploadRequestDtoCategory, HrisDocumentsUploadRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisDocumentsUploadRequestDtoCategory = {
  sourceValue: "550e8400-e29b-41d4-a716-446655440000",
  value: HrisDocumentsUploadRequestDtoValue.Contract,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The provider specific category for associating uploaded files, if provided, the value will be ignored.        | 550e8400-e29b-41d4-a716-446655440000                                                                          |
| `value`                                                                                                       | [shared.HrisDocumentsUploadRequestDtoValue](../../../sdk/models/shared/hrisdocumentsuploadrequestdtovalue.md) | :heavy_minus_sign:                                                                                            | The category name to associate with the file                                                                  | reports                                                                                                       |
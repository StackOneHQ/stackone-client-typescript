# AtsDocumentsUploadRequestDtoCategory

The category to be associated with the file to be uploaded. Id will take precedence over name.

## Example Usage

```typescript
import { AtsDocumentsUploadRequestDtoCategory } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsDocumentsUploadRequestDtoCategory = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The provider specific category for associating uploaded files, if provided, the value will be ignored.      | 550e8400-e29b-41d4-a716-446655440000                                                                        |
| `value`                                                                                                     | [shared.AtsDocumentsUploadRequestDtoValue](../../../sdk/models/shared/atsdocumentsuploadrequestdtovalue.md) | :heavy_minus_sign:                                                                                          | The category name to associate with the file                                                                | resume                                                                                                      |
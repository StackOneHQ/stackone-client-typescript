# HrisBatchDocumentUploadRequestDto

## Example Usage

```typescript
import {
  HrisBatchDocumentUploadRequestDto,
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
  HrisDocumentsUploadRequestDtoSchemasValue,
  HrisDocumentsUploadRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisBatchDocumentUploadRequestDto = {
  items: [
    {
      category: {
        sourceValue: "550e8400-e29b-41d4-a716-446655440000",
        value: HrisDocumentsUploadRequestDtoValue.Certificates,
      },
      categoryId: "6530",
      confidential: {
        sourceValue: "public",
        value: HrisDocumentsUploadRequestDtoSchemasValue.True,
      },
      content:
        "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
      fileFormat: {
        sourceValue: "abc",
        value: HrisDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
      },
      name: "weather-forecast",
      path: "/path/to/file",
    },
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `items`                                                                                               | [shared.HrisDocumentsUploadRequestDto](../../../sdk/models/shared/hrisdocumentsuploadrequestdto.md)[] | :heavy_check_mark:                                                                                    | The batch of items to create                                                                          |
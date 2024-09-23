# UnifiedUploadRequestDtoConfidential

The confidentiality level of the file to be uploaded

## Example Usage

```typescript
import { UnifiedUploadRequestDtoConfidential, UnifiedUploadRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedUploadRequestDtoConfidential = {
  sourceValue: "public",
  value: UnifiedUploadRequestDtoValue.True,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                     | *shared.UnifiedUploadRequestDtoSourceValue*                                                       | :heavy_minus_sign:                                                                                | N/A                                                                                               | public                                                                                            |
| `value`                                                                                           | [shared.UnifiedUploadRequestDtoValue](../../../sdk/models/shared/unifieduploadrequestdtovalue.md) | :heavy_minus_sign:                                                                                | Whether the file is confidential or not                                                           | true                                                                                              |
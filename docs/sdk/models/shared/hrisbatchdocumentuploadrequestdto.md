# HrisBatchDocumentUploadRequestDto

## Example Usage

```typescript
import { HrisBatchDocumentUploadRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisBatchDocumentUploadRequestDto = {
  items: [],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `items`                                                                                               | [shared.HrisDocumentsUploadRequestDto](../../../sdk/models/shared/hrisdocumentsuploadrequestdto.md)[] | :heavy_check_mark:                                                                                    | The batch of items to create                                                                          |
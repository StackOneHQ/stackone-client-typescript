# UnifiedUploadRequestDtoCategory

The category object for associating uploaded files. If both an ID and a name are provided, the ID takes precedence.

## Example Usage

```typescript
import { UnifiedUploadRequestDtoCategory } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedUploadRequestDtoCategory = {
    sourceValue: "550e8400-e29b-41d4-a716-446655440000, CUSTOM_CATEGORY_NAME",
    value: "reports, resumes",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `sourceValue`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The provider specific category for associating uploaded files, if provided, the value will be ignored. | 550e8400-e29b-41d4-a716-446655440000, CUSTOM_CATEGORY_NAME                                             |
| `value`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The category name for associating uploaded files.                                                      | reports, resumes                                                                                       |
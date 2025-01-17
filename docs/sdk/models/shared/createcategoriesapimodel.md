# CreateCategoriesApiModel

## Example Usage

```typescript
import { CreateCategoriesApiModel, CreateCategoriesApiModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateCategoriesApiModel = {
  id: "16873-IT345",
  language: {
    value: CreateCategoriesApiModelValue.EnGB,
  },
  name: "Information-Technology",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The ID associated with this category                                                                      | 16873-IT345                                                                                               |
| `language`                                                                                                | [shared.CreateCategoriesApiModelLanguage](../../../sdk/models/shared/createcategoriesapimodellanguage.md) | :heavy_minus_sign:                                                                                        | The language associated with this category                                                                |                                                                                                           |
| `level`                                                                                                   | [shared.CreateCategoriesApiModelLevel](../../../sdk/models/shared/createcategoriesapimodellevel.md)       | :heavy_minus_sign:                                                                                        | The hierarchal level of the category                                                                      |                                                                                                           |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The name associated with this category                                                                    | Information-Technology                                                                                    |
| `unifiedCustomFields`                                                                                     | Record<string, *any*>                                                                                     | :heavy_minus_sign:                                                                                        | Custom Unified Fields configured in your StackOne project                                                 | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>}  |
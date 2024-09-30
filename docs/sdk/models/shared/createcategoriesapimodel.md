# CreateCategoriesApiModel

## Example Usage

```typescript
import { CreateCategoriesApiModel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateCategoriesApiModel = {
  active: true,
  name: "Information-Technology",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `active`                                                                                            | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether the category is active and therefore available for use                                      | true                                                                                                |
| `level`                                                                                             | [shared.CreateCategoriesApiModelLevel](../../../sdk/models/shared/createcategoriesapimodellevel.md) | :heavy_minus_sign:                                                                                  | The hierarchal level of the category                                                                |                                                                                                     |
| `name`                                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The name associated with this category                                                              | Information-Technology                                                                              |
| `unifiedCustomFields`                                                                               | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Custom Unified Fields configured in your StackOne project                                           | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
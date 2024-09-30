# Category

## Example Usage

```typescript
import { Category } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Category = {
  active: true,
  id: "16873-IT345",
  name: "Information-Technology",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `active`                                                                                     | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Whether the category is active and therefore available for use                               | true                                                                                         |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The ID associated with this category                                                         | 16873-IT345                                                                                  |
| `level`                                                                                      | [shared.Level](../../../sdk/models/shared/level.md)                                          | :heavy_minus_sign:                                                                           | The hierarchal level of the category                                                         |                                                                                              |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The name associated with this category                                                       | Information-Technology                                                                       |
| `remoteId`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's unique identifier                                                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                         |
| `unifiedCustomFields`                                                                        | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | Custom Unified Fields configured in your StackOne project                                    | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
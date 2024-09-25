# List

## Example Usage

```typescript
import { List, ListValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: List = {
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  items: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {
    sourceValue: "Contacts",
    value: ListValue.Contacts,
  },
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when the list was created                                                           | 2021-01-01T01:01:01.000Z                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `items`                                                                                       | [shared.ListItem](../../../sdk/models/shared/listitem.md)[]                                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `type`                                                                                        | [shared.ListType](../../../sdk/models/shared/listtype.md)                                     | :heavy_minus_sign:                                                                            | The list type                                                                                 |                                                                                               |
| `unifiedCustomFields`                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom Unified Fields configured in your StackOne project                                     | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when the list was last updated                                                      | 2021-01-01T01:01:01.000Z                                                                      |
# CustomFieldDefinition

## Example Usage

```typescript
import { CustomFieldDefinition } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CustomFieldDefinition = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  options: [
    [
      {
        "id": "option_1",
        "value": "Not Started",
      },
    ],
    [
      {
        "id": "option_2",
        "value": "In Progress",
      },
    ],
    [
      {
        "id": "option_3",
        "value": "Completed",
      },
    ],
  ],
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {},
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                                              | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Unique identifier                                                                                                                          | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                                       |
| `name`                                                                                                                                     | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `options`                                                                                                                                  | *any*[][]                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | An array of possible options for the custom field.                                                                                         | [<br/>{<br/>"id": "option_1",<br/>"value": "Not Started"<br/>},<br/>{<br/>"id": "option_2",<br/>"value": "In Progress"<br/>},<br/>{<br/>"id": "option_3",<br/>"value": "Completed"<br/>}<br/>] |
| `remoteId`                                                                                                                                 | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Provider's unique identifier                                                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                                       |
| `type`                                                                                                                                     | [shared.CustomFieldDefinitionType](../../../sdk/models/shared/customfielddefinitiontype.md)                                                | :heavy_minus_sign:                                                                                                                         | The type of the custom field.                                                                                                              | Dropdown                                                                                                                                   |
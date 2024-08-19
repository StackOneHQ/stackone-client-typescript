# ApplicationCustomFields

## Example Usage

```typescript
import { ApplicationCustomFields } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationCustomFields = {
    description: "The completion status of the employee's training.",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Training Completion Status",
    options: ["Not Started", "In Progress", "Completed", "Overdue"],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    type: {},
    value: "Completed",
    valueId: "value_456",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `description`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | The description of the custom field.                                                            | The completion status of the employee's training.                                               |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unique identifier                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The name of the custom field.                                                                   | Training Completion Status                                                                      |
| `options`                                                                                       | *shared.Options*[]                                                                              | :heavy_minus_sign:                                                                              | An array of possible options for the custom field.                                              | [<br/>"Not Started",<br/>"In Progress",<br/>"Completed",<br/>"Overdue"<br/>]                    |
| `remoteId`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Provider's unique identifier                                                                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `remoteValueId`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | Provider's unique identifier for the value of the custom field.                                 | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                            |
| `type`                                                                                          | [shared.ApplicationCustomFieldsType](../../../sdk/models/shared/applicationcustomfieldstype.md) | :heavy_minus_sign:                                                                              | The type of the custom field.                                                                   | Dropdown                                                                                        |
| `value`                                                                                         | *shared.Value*                                                                                  | :heavy_minus_sign:                                                                              | The value associated with the custom field.                                                     | Completed                                                                                       |
| `valueId`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | The unique identifier for the value of the custom field.                                        | value_456                                                                                       |
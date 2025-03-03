# Division

The employee division

## Example Usage

```typescript
import { Division, EmploymentSchemasDivisionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Division = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Engineering",
  ownerIds: [
    "cxIQNjUyEDM0",
    "cxIQNjQzNzA0MQ",
  ],
  parentIds: [
    "cxIQNjUyNDM0",
    "cxIQNjQzNzI0MQ",
  ],
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteOwnerIds: [
    "475364",
    "4327652",
  ],
  remoteParentIds: [
    "652434",
    "6437241",
  ],
  type: {
    value: EmploymentSchemasDivisionValue.Team,
  },
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Unique identifier                                                                                   | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                |
| `name`                                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The name of the group                                                                               | Engineering                                                                                         |
| `ownerIds`                                                                                          | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | The list of group owner ids of the given group                                                      | [<br/>"cxIQNjUyEDM0",<br/>"cxIQNjQzNzA0MQ"<br/>]                                                    |
| `parentIds`                                                                                         | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | The list of parent group ids of the given group                                                     | [<br/>"cxIQNjUyNDM0",<br/>"cxIQNjQzNzI0MQ"<br/>]                                                    |
| `remoteId`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Provider's unique identifier                                                                        | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                |
| `remoteOwnerIds`                                                                                    | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | The list of remote group owner ids of the given group                                               | [<br/>"475364",<br/>"4327652"<br/>]                                                                 |
| `remoteParentIds`                                                                                   | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | Provider's list of parent group remote ids of the given group                                       | [<br/>"652434",<br/>"6437241"<br/>]                                                                 |
| `type`                                                                                              | [shared.EmploymentSchemasDivisionType](../../../sdk/models/shared/employmentschemasdivisiontype.md) | :heavy_minus_sign:                                                                                  | The type of the group                                                                               |                                                                                                     |
| `unifiedCustomFields`                                                                               | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Custom Unified Fields configured in your StackOne project                                           | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
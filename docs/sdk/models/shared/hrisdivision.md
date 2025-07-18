# HRISDivision

## Example Usage

```typescript
import { HRISDivision, HRISDivisionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISDivision = {
  companyId: "1234567890",
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
  remoteCompanyId: "1234567890",
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
    value: HRISDivisionValue.Division,
  },
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `companyId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | The id of the company that the group belongs to                                              | 1234567890                                                                                   |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | Unique identifier                                                                            | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                         |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The name of the group                                                                        | Engineering                                                                                  |
| `ownerIds`                                                                                   | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | The list of group owner ids of the given group                                               | [<br/>"cxIQNjUyEDM0",<br/>"cxIQNjQzNzA0MQ"<br/>]                                             |
| `parentIds`                                                                                  | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | The list of parent group ids of the given group                                              | [<br/>"cxIQNjUyNDM0",<br/>"cxIQNjQzNzI0MQ"<br/>]                                             |
| `remoteCompanyId`                                                                            | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's id of the company that the group belongs to                                       | 1234567890                                                                                   |
| `remoteId`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's unique identifier                                                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                         |
| `remoteOwnerIds`                                                                             | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | The list of remote group owner ids of the given group                                        | [<br/>"475364",<br/>"4327652"<br/>]                                                          |
| `remoteParentIds`                                                                            | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | Provider's list of parent group remote ids of the given group                                | [<br/>"652434",<br/>"6437241"<br/>]                                                          |
| `type`                                                                                       | [shared.HRISDivisionType](../../../sdk/models/shared/hrisdivisiontype.md)                    | :heavy_minus_sign:                                                                           | The type of the division group                                                               | division                                                                                     |
| `unifiedCustomFields`                                                                        | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | Custom Unified Fields configured in your StackOne project                                    | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
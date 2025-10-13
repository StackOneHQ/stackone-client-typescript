# ApplicationChanges

## Example Usage

```typescript
import { ApplicationChanges, ApplicationChangesDataModelValue, ApplicationChangesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationChanges = {
  actor: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
  changeType: {
    sourceValue: "StatusChange",
    value: ApplicationChangesValue.ApplicationStatus,
  },
  createdAt: new Date("2024-01-15T10:30:00Z"),
  effectiveAt: new Date("2024-01-15T10:30:00Z"),
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  newValues: {
    applicationStatus: {
      sourceValue: "Hired",
      value: ApplicationChangesDataModelValue.Hired,
    },
    rejectedReasonIds: [
      "f223d7f6-908b-48f0-9237-b201c307f609",
    ],
  },
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `actor`                                                                                                                      | [shared.Actor](../../../sdk/models/shared/actor.md)                                                                          | :heavy_minus_sign:                                                                                                           | The actor who made the change                                                                                                |                                                                                                                              |
| `changeType`                                                                                                                 | [shared.ChangeType](../../../sdk/models/shared/changetype.md)                                                                | :heavy_minus_sign:                                                                                                           | The type of change that occurred to the application                                                                          |                                                                                                                              |
| `createdAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_check_mark:                                                                                                           | Timestamp when the change was created                                                                                        | 2024-01-15T10:30:00Z                                                                                                         |
| `effectiveAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_minus_sign:                                                                                                           | Timestamp when the change became effective                                                                                   | 2024-01-15T10:30:00Z                                                                                                         |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Unique identifier                                                                                                            | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                         |
| `newValues`                                                                                                                  | [shared.ApplicationChangesDataModel](../../../sdk/models/shared/applicationchangesdatamodel.md)                              | :heavy_check_mark:                                                                                                           | The new values for changed application properties. Only includes fields that commonly change over the application lifecycle. |                                                                                                                              |
| `remoteId`                                                                                                                   | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Provider's unique identifier                                                                                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                         |
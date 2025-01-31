# TimeEntries

## Example Usage

```typescript
import { TimeEntries } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeEntries = {
  breakDuration: 0.5,
  createdAt: new Date("2023-02-23T00:00:00.000Z"),
  employeeId: "1687-3",
  endTime: new Date("2021-01-01T01:01:01.000Z"),
  hoursWorked: 8,
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  laborType: {
    code: "ABC123",
  },
  location: {
    active: true,
    id: "1687-3",
    name: "1687-4",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
  remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  startTime: new Date("2021-01-01T01:01:01.000Z"),
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
  updatedAt: new Date("2024-02-23T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `breakDuration`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The duration of the break in hours                                                            | 0.5                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created_at date                                                                           | 2023-02-23T00:00:00.000Z                                                                      |
| `employeeId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The employee ID associated with this employment                                               | 1687-3                                                                                        |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The end time of the time entry                                                                | 2021-01-01T01:01:01.000Z                                                                      |
| `hoursWorked`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | The hours worked in the time entry                                                            | 8                                                                                             |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `laborType`                                                                                   | [shared.LaborType](../../../sdk/models/shared/labortype.md)                                   | :heavy_minus_sign:                                                                            | The labor type associated with this time entry                                                |                                                                                               |
| `location`                                                                                    | [shared.Location](../../../sdk/models/shared/location.md)                                     | :heavy_minus_sign:                                                                            | The location of the time entry                                                                |                                                                                               |
| `remoteEmployeeId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the employee associated with this employment                  | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The start time of the time entry                                                              | 2021-01-01T01:01:01.000Z                                                                      |
| `status`                                                                                      | [shared.TimeEntriesStatus](../../../sdk/models/shared/timeentriesstatus.md)                   | :heavy_minus_sign:                                                                            | The status of the time entry                                                                  |                                                                                               |
| `unifiedCustomFields`                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom Unified Fields configured in your StackOne project                                     | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The updated_at date                                                                           | 2024-02-23T00:00:00.000Z                                                                      |
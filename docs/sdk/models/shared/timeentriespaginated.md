# TimeEntriesPaginated

## Example Usage

```typescript
import { TimeEntriesPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeEntriesPaginated = {
  data: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.TimeEntries](../../../sdk/models/shared/timeentries.md)[]                                                       | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
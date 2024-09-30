# AtsUpdateJobRequest

## Example Usage

```typescript
import { AtsUpdateJobRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsUpdateJobRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateJobRequest = {
  atsUpdateJobRequestDto: {
    code: "184919",
    customFields: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Training Completion Status",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        value: "Completed",
        valueId: "value_456",
      },
    ],
    departmentIds: [
      "308570",
      "308571",
      "308572",
    ],
    hiringTeam: [
      {
        email: "john.doe@gmail.com",
        firstName: "John",
        lastName: "Doe",
        remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        role: "Software Engineer",
        userId: "123456",
      },
    ],
    interviewStages: [
      {
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      },
    ],
    jobStatus: {
      sourceValue: "Published",
      value: AtsUpdateJobRequestDtoValue.Published,
    },
    locationIds: [
      "668570",
      "678571",
      "688572",
    ],
    passthrough: {
      "other_known_names": "John Doe",
    },
    title: "Software Engineer",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `atsUpdateJobRequestDto`                                                              | [shared.AtsUpdateJobRequestDto](../../../sdk/models/shared/atsupdatejobrequestdto.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `xAccountId`                                                                          | *string*                                                                              | :heavy_check_mark:                                                                    | The account identifier                                                                |
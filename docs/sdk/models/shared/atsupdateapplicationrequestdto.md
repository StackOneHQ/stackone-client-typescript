# AtsUpdateApplicationRequestDto

## Example Usage

```typescript
import { AtsUpdateApplicationRequestDto, AtsUpdateApplicationRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateApplicationRequestDto = {
    applicationStatus: {
        sourceValue: "Hired",
        value: AtsUpdateApplicationRequestDtoValue.Hired,
    },
    customFields: [
        {
            description: "The completion status of the employee's training.",
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            name: "Training Completion Status",
            options: ["Not Started", "In Progress", "Completed", "Overdue"],
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
            type: {},
            value: "Completed",
            valueId: "value_456",
        },
    ],
    interviewStageId: "18bcbb1b-3cbc-4198-a999-460861d19480",
    passthrough: {
        "0": "{",
        "1": '"',
        "2": "o",
        "3": "t",
        "4": "h",
        "5": "e",
        "6": "r",
        "7": "_",
        "8": "k",
        "9": "n",
        "10": "o",
        "11": "w",
        "12": "n",
        "13": "_",
        "14": "n",
        "15": "a",
        "16": "m",
        "17": "e",
        "18": "s",
        "19": '"',
        "20": ":",
        "21": " ",
        "22": '"',
        "23": "J",
        "24": "o",
        "25": "h",
        "26": "n",
        "27": " ",
        "28": "D",
        "29": "o",
        "30": "e",
        "31": '"',
        "32": "}",
    },
    rejectedReasonId: "f223d7f6-908b-48f0-9237-b201c307f609",
    source: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "LinkedIn",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationStatus`                                                                                                                     | [shared.AtsUpdateApplicationRequestDtoApplicationStatus](../../../sdk/models/shared/atsupdateapplicationrequestdtoapplicationstatus.md) | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     |                                                                                                                                         |
| `customFields`                                                                                                                          | [shared.ApplicationCustomFields](../../../sdk/models/shared/applicationcustomfields.md)[]                                               | :heavy_minus_sign:                                                                                                                      | The application custom fields                                                                                                           |                                                                                                                                         |
| `interviewStageId`                                                                                                                      | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Unique identifier of the interview stage                                                                                                | 18bcbb1b-3cbc-4198-a999-460861d19480                                                                                                    |
| `passthrough`                                                                                                                           | Record<string, *any*>                                                                                                                   | :heavy_minus_sign:                                                                                                                      | Value to pass through to the provider                                                                                                   | {"other_known_names": "John Doe"}                                                                                                       |
| `rejectedReasonId`                                                                                                                      | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Unique identifier of the rejection reason                                                                                               | f223d7f6-908b-48f0-9237-b201c307f609                                                                                                    |
| `source`                                                                                                                                | [shared.AtsUpdateApplicationRequestDtoSource](../../../sdk/models/shared/atsupdateapplicationrequestdtosource.md)                       | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     |                                                                                                                                         |
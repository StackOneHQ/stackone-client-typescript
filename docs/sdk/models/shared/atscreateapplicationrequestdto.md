# AtsCreateApplicationRequestDto

## Example Usage

```typescript
import { AnswerValue, AtsCreateApplicationRequestDto, AtsCreateApplicationRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateApplicationRequestDto = {
    applicationStatus: {
        sourceValue: "Hired",
        value: AtsCreateApplicationRequestDtoValue.Hired,
    },
    candidate: {
        company: "Company Inc.",
        country: "United States",
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
        email: "sestier.romain123@gmail.com",
        firstName: "Romain",
        hiredAt: new Date("2021-01-01T01:01:01.000Z"),
        lastName: "Sestier",
        name: "Romain Sestier",
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
        phoneNumber: "+1234567890",
        socialLinks: [
            {
                type: "linkedin",
                url: "https://www.linkedin.com/in/romainsestier/",
            },
        ],
        title: "Software Engineer",
    },
    candidateId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    jobId: "4071538b-3cac-4fbf-ac76-f78ed250ffdd",
    locationId: "dd8d41d1-5eb8-4408-9c87-9ba44604eae4",
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
    questionnaires: [
        {
            answers: [
                {
                    id: "answer1",
                    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                    type: {
                        sourceValue: "Short Text",
                        value: AnswerValue.ShortText,
                    },
                    values: ["Yes"],
                },
            ],
            id: "right_to_work",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
    ],
    source: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "LinkedIn",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationStatus`                                                                                                                       | [shared.AtsCreateApplicationRequestDtoApplicationStatus](../../../sdk/models/shared/atscreateapplicationrequestdtoapplicationstatus.md)   | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |
| `candidate`                                                                                                                               | [shared.AtsCreateApplicationRequestDtoCandidate](../../../sdk/models/shared/atscreateapplicationrequestdtocandidate.md)                   | :heavy_minus_sign:                                                                                                                        | Candidate Properties. Provide this OR candidate_id, but not both. Providing this attempts to create a new candidate with the application. |                                                                                                                                           |
| `candidateId`                                                                                                                             | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Unique identifier of the candidate. Provide this OR candidate, but not both.                                                              | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                                                      |
| `jobId`                                                                                                                                   | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Unique identifier of the job                                                                                                              | 4071538b-3cac-4fbf-ac76-f78ed250ffdd                                                                                                      |
| `locationId`                                                                                                                              | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Unique identifier of the location                                                                                                         | dd8d41d1-5eb8-4408-9c87-9ba44604eae4                                                                                                      |
| `passthrough`                                                                                                                             | Record<string, *any*>                                                                                                                     | :heavy_minus_sign:                                                                                                                        | Value to pass through to the provider                                                                                                     | {"other_known_names": "John Doe"}                                                                                                         |
| `questionnaires`                                                                                                                          | [shared.Questionnaire](../../../sdk/models/shared/questionnaire.md)[]                                                                     | :heavy_minus_sign:                                                                                                                        | Questionnaires associated with the application                                                                                            | {<br/>"id": "right_to_work",<br/>"answers": [<br/>{<br/>"id": "answer1",<br/>"type": "text",<br/>"values": [<br/>"Yes"<br/>]<br/>}<br/>]<br/>} |
| `source`                                                                                                                                  | [shared.AtsCreateApplicationRequestDtoSource](../../../sdk/models/shared/atscreateapplicationrequestdtosource.md)                         | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |
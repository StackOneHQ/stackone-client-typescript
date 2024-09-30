# AtsCreateApplicationRequest

## Example Usage

```typescript
import { AtsCreateApplicationRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsCreateApplicationRequestDtoValue, CreateAnswerValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateApplicationRequest = {
  atsCreateApplicationRequestDto: {
    applicationStatus: {
      sourceValue: "Hired",
      value: AtsCreateApplicationRequestDtoValue.Hired,
    },
    candidate: {
      company: "Company Inc.",
      country: "United States",
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
      email: "sestier.romain123@gmail.com",
      firstName: "Romain",
      hiredAt: new Date("2021-01-01T01:01:01.000Z"),
      lastName: "Sestier",
      name: "Romain Sestier",
      passthrough: {
        "other_known_names": "John Doe",
      },
      phoneNumber: "+1234567890",
      socialLinks: [
        {
          type: "linkedin",
          url: "https://www.linkedin.com/in/romainsestier/",
        },
      ],
      title: "Software Engineer",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
    candidateId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    jobId: "4071538b-3cac-4fbf-ac76-f78ed250ffdd",
    locationId: "dd8d41d1-5eb8-4408-9c87-9ba44604eae4",
    passthrough: {
      "other_known_names": "John Doe",
    },
    questionnaires: [
      {
        answers: [
          {
            id: "answer1",
            type: {
              sourceValue: "Short Text",
              value: CreateAnswerValue.ShortText,
            },
            values: [
              "Yes",
            ],
          },
        ],
        id: "right_to_work",
      },
    ],
    source: {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "LinkedIn",
    },
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `atsCreateApplicationRequestDto`                                                                      | [shared.AtsCreateApplicationRequestDto](../../../sdk/models/shared/atscreateapplicationrequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |
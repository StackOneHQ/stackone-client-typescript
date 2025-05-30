# JobPostingResult

## Example Usage

```typescript
import {
  Internal,
  JobPostingQuestionnaire2,
  JobPostingResult,
  JobPostingSchemasStatusValue,
  JobPostingSchemasValue,
  JobPostingValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingResult = {
  data: {
    compensation: [
      {
        currency: "USD",
        maxValue: "55000",
        minValue: "45000",
        name: "Base Salary",
        payFrequency: {},
        payPeriod: {},
        type: {},
        value: "50000",
      },
      {
        currency: "USD",
        name: "Bonus",
        payFrequency: {},
        type: {},
        value: "10%",
      },
    ],
    content: {
      html: "<p>This is an HTML description</p>",
      plain: "This is a plain text description",
    },
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    employmentContractType: {
      sourceValue: "FullTime",
      value: JobPostingValue.FullTime,
    },
    employmentType: {
      sourceValue: "Permanent",
      value: JobPostingSchemasValue.Permanent,
    },
    externalApplyUrl: "https://www.example.com/job-posting/abcd1234/apply",
    externalUrl: "https://www.example.com/job-posting/abcd1234",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    internal: Internal.True,
    jobId: "job001",
    locations: [
      {
        id: "12345",
        name: "New York",
      },
      {
        id: "67890",
        name: "Remote",
      },
    ],
    questionnaires: [
      {
        id: "about001",
        internal: JobPostingQuestionnaire2.False,
        name: "About",
        questions: [
          {
            id: "question001",
            parentQuestion: null,
            required: true,
            text: "What is your name?",
            type: {},
          },
          {
            id: "question002",
            parentQuestion: null,
            required: false,
            text: "What are your hobbies?",
            type: {},
          },
          {
            id: "question003",
            multipleChoiceAnswers: [
              {
                id: "1",
                text: "Dog",
              },
              {
                id: "2",
                text: "Cat",
              },
              {
                id: "3",
                text: "Bird",
              },
              {
                id: "4",
                text: "Other",
              },
            ],
            parentQuestion: null,
            required: true,
            text: "What is your favourite animal?",
            type: {},
          },
          {
            id: "question004",
            multipleChoiceAnswers: [
              {
                id: "1",
                text: "Yes",
              },
              {
                id: "2",
                text: "No",
              },
            ],
            parentQuestion: null,
            required: true,
            text: "Do you have previous work experience??",
            type: {},
          },
          {
            id: "question005",
            multipleChoiceAnswers: [
              {
                id: "1",
                text: "Less than 1 year",
              },
              {
                id: "2",
                text: "1-2 years",
              },
              {
                id: "2",
                text: "More than 2 year",
              },
            ],
            parentQuestion: {
              conditionType: {},
              id: "question004",
              optionIds: [
                "1",
              ],
            },
            required: true,
            text: "What was the duration of your last employment?",
            type: {},
          },
        ],
      },
      {
        id: "experience001",
        internal: JobPostingQuestionnaire2.False,
        name: "Experience",
        questions: [
          {
            id: "question004",
            parentQuestion: null,
            required: true,
            text: "Please upload your resume.",
            type: {},
          },
          {
            id: "question005",
            multipleChoiceAnswers: [
              {
                id: "1",
                text: "JavaScript",
              },
              {
                id: "2",
                text: "Python",
              },
              {
                id: "3",
                text: "Java",
              },
            ],
            parentQuestion: null,
            required: true,
            text: "Select the programming languages you are proficient in.",
            type: {},
          },
          {
            id: "question006",
            parentQuestion: null,
            text: "Are you willing to relocate?",
            type: {},
          },
          {
            id: "question007",
            parentQuestion: null,
            text: "How many years of experience do you have?",
            type: {},
          },
          {
            id: "question008",
            parentQuestion: null,
            text: "When did you start your most recent position?",
            type: {},
          },
          {
            id: "question009",
            multipleChoiceAnswers: [
              {
                id: "1",
                text: "Yes",
              },
              {
                id: "2",
                text: "No",
              },
            ],
            parentQuestion: null,
            required: true,
            text: "Do you have Project Management Experience?",
            type: {},
          },
          {
            id: "question010",
            multipleChoiceAnswers: [
              {
                id: "1",
                text: "1-3 years",
              },
              {
                id: "2",
                text: "3-5 years",
              },
              {
                id: "3",
                text: "5-10 years",
              },
              {
                id: "4",
                text: "More than 10 years",
              },
            ],
            parentQuestion: {
              conditionType: {},
              id: "question009",
              optionIds: [
                "1",
              ],
            },
            text: "How much Project Management experience do you have?",
            type: {},
          },
        ],
      },
    ],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteJobPostingId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    startDate: new Date("2021-01-01T00:00:00.000Z"),
    status: {
      sourceValue: "Live",
      value: JobPostingSchemasStatusValue.Live,
    },
    title: "Software Engineer",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.JobPosting](../../../sdk/models/shared/jobposting.md)     | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
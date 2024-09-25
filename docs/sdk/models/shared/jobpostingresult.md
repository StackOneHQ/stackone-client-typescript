# JobPostingResult

## Example Usage

```typescript
import {
  Internal,
  JobPostingCompensationSchemasTypeValue,
  JobPostingCompensationSchemasValue,
  JobPostingCompensationValue,
  JobPostingContentSectionValue,
  JobPostingQuestionnaire2,
  JobPostingResult,
  JobPostingSchemasStatusValue,
  JobPostingSchemasValue,
  JobPostingValue,
  QuestionValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingResult = {
  data: {
    compensation: [
      {
        currency: "USD",
        maxValue: "55000",
        minValue: "45000",
        name: "Base Salary",
        payFrequency: {
          sourceValue: "Hourly",
          value: JobPostingCompensationValue.Hourly,
        },
        payPeriod: {
          sourceValue: "Hour",
          value: JobPostingCompensationSchemasValue.Hour,
        },
        type: {
          sourceValue: "Salary",
          value: JobPostingCompensationSchemasTypeValue.Salary,
        },
        value: "50000",
      },
      {
        currency: "USD",
        name: "Bonus",
        payFrequency: {
          sourceValue: "Hourly",
          value: JobPostingCompensationValue.Hourly,
        },
        payPeriod: {
          sourceValue: "Hour",
          value: JobPostingCompensationSchemasValue.Hour,
        },
        type: {
          sourceValue: "Salary",
          value: JobPostingCompensationSchemasTypeValue.Salary,
        },
        value: "10%",
      },
    ],
    content: {
      html: "<p>This is an HTML description</p>",
      plain: "This is a plain text description",
      sections: [
        {
          content: "This is a plain description",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          label: "Key Responsibilities",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          type: {
            sourceValue: "key_responsibilities",
            value: JobPostingContentSectionValue.Responsibilities,
          },
        },
      ],
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
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      {
        id: "67890",
        name: "Remote",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
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
            multipleChoiceAnswers: [
              {
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              },
            ],
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            required: true,
            text: "What is your name?",
            type: {
              sourceValue: "ShortText",
              value: QuestionValue.ShortText,
            },
          },
          {
            id: "question002",
            multipleChoiceAnswers: [
              {
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              },
            ],
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            required: false,
            text: "What are your hobbies?",
            type: {
              sourceValue: "ShortText",
              value: QuestionValue.ShortText,
            },
          },
          {
            id: "question003",
            multipleChoiceAnswers: [
              {
                id: "1",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                text: "Dog",
              },
              {
                id: "2",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                text: "Cat",
              },
              {
                id: "3",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                text: "Bird",
              },
              {
                id: "4",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                text: "Other",
              },
            ],
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            required: true,
            text: "What is your favorite animal?",
            type: {
              sourceValue: "ShortText",
              value: QuestionValue.ShortText,
            },
          },
        ],
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      {
        id: "experience001",
        internal: JobPostingQuestionnaire2.False,
        name: "Experience",
        questions: [
          {
            id: "question004",
            multipleChoiceAnswers: [
              {
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              },
            ],
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            required: true,
            text: "Please upload your resume.",
            type: {
              sourceValue: "ShortText",
              value: QuestionValue.ShortText,
            },
          },
          {
            id: "question005",
            multipleChoiceAnswers: [
              {
                id: "1",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                text: "JavaScript",
              },
              {
                id: "2",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                text: "Python",
              },
              {
                id: "3",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                text: "Java",
              },
            ],
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            required: true,
            text: "Select the programming languages you are proficient in.",
            type: {
              sourceValue: "ShortText",
              value: QuestionValue.ShortText,
            },
          },
          {
            id: "question006",
            multipleChoiceAnswers: [
              {
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              },
            ],
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            text: "Are you willing to relocate?",
            type: {
              sourceValue: "ShortText",
              value: QuestionValue.ShortText,
            },
          },
          {
            id: "question007",
            multipleChoiceAnswers: [
              {
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              },
            ],
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            text: "How many years of experience do you have?",
            type: {
              sourceValue: "ShortText",
              value: QuestionValue.ShortText,
            },
          },
          {
            id: "question008",
            multipleChoiceAnswers: [
              {
                id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
                remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              },
            ],
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            text: "When did you start your most recent position?",
            type: {
              sourceValue: "ShortText",
              value: QuestionValue.ShortText,
            },
          },
        ],
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
    ],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteJobPostingId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
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
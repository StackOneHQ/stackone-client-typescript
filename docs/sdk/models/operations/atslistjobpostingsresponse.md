# AtsListJobPostingsResponse

## Example Usage

```typescript
import { AtsListJobPostingsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  Internal,
  JobPostingCompensationSchemasTypeValue,
  JobPostingCompensationSchemasValue,
  JobPostingCompensationValue,
  JobPostingQuestionnaire2,
  JobPostingSchemasStatusValue,
  JobPostingSchemasValue,
  JobPostingValue,
  QuestionValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsListJobPostingsResponse = {
    contentType: "<value>",
    jobPostingsPaginated: {
        data: [
            {
                compensation: [
                    {
                        currency: "USD",
                        maxValue: "55000",
                        minValue: "45000",
                        name: "Base Salary",
                        payFrequency: {
                            sourceValue: Hourly,
                            value: JobPostingCompensationValue.Hourly,
                        },
                        payPeriod: {
                            sourceValue: "Hour",
                            value: JobPostingCompensationSchemasValue.Hour,
                        },
                        type: {
                            sourceValue: {},
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
                            sourceValue: ["Hour"],
                            value: JobPostingCompensationSchemasValue.Hour,
                        },
                        type: {
                            sourceValue: Salary,
                            value: JobPostingCompensationSchemasTypeValue.Salary,
                        },
                        value: "10%",
                    },
                ],
                content: {
                    html: "<p>This is an HTML description</p>",
                    plain: "This is a plain text description",
                },
                createdAt: new Date("2021-01-01T01:01:01.000Z"),
                employmentContractType: {
                    sourceValue: {},
                    value: JobPostingValue.FullTime,
                },
                employmentType: {
                    sourceValue: ["Permanent"],
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
                                    sourceValue: {},
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
                                    sourceValue: ["ShortText"],
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
                                    sourceValue: {},
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
                                    sourceValue: ["ShortText"],
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
                                    sourceValue: ["ShortText"],
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
                                    sourceValue: ["ShortText"],
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
                    sourceValue: true,
                    value: JobPostingSchemasStatusValue.Live,
                },
                title: "Software Engineer",
                updatedAt: new Date("2021-01-01T01:01:01.000Z"),
            },
        ],
    },
    statusCode: 509624,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `jobPostingsPaginated`                                                            | [shared.JobPostingsPaginated](../../../sdk/models/shared/jobpostingspaginated.md) | :heavy_minus_sign:                                                                | The list of job postings was retrieved.                                           |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
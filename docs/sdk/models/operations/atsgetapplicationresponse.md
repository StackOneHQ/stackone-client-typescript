# AtsGetApplicationResponse

## Example Usage

```typescript
import { AtsGetApplicationResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AnswerValue, ApplicationValue, AtsDocumentApiModelValue, RejectedReasonValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsGetApplicationResponse = {
  applicationResult: {
    data: {
      applicationStatus: {
        sourceValue: true,
        value: ApplicationValue.Hired,
      },
      candidate: {
        company: "Company Inc.",
        email: "john.doe@example.com",
        emails: [
          {
            type: "personal",
            value: "sestier.romain123@gmail.com",
          },
        ],
        firstName: "John",
        lastName: "Doe",
        name: "Romain Sestier",
        phoneNumbers: [
          {
            phone: "+447700112233",
          },
        ],
        socialLinks: [
          {
            type: "linkedin",
            url: "https://www.linkedin.com/in/romainsestier/",
          },
        ],
        title: "Software Engineer",
      },
      candidateId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      customFields: [
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: Completed,
          valueId: "value_456",
        },
      ],
      documents: [
        {
          category: {},
          categoryId: "6530",
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          fileFormat: {
            sourceValue: {},
            value: AtsDocumentApiModelValue.Pdf,
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "My Document",
          path: "/path/to/file",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteUrl: "https://example.com/file.pdf",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
          updatedAt: new Date("2021-01-02T01:01:01.000Z"),
        },
      ],
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      interviewStage: {
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      },
      interviewStageId: "18bcbb1b-3cbc-4198-a999-460861d19480",
      jobId: "4071538b-3cac-4fbf-ac76-f78ed250ffdd",
      locationId: "dd8d41d1-5eb8-4408-9c87-9ba44604eae4",
      locationIds: [
        "dd8d41d1-5eb8-4408-9c87-9ba44604eae4",
      ],
      questionnaires: [
        {
          answers: [
            {
              id: "answer1",
              remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              type: {
                sourceValue: true,
                value: AnswerValue.ShortText,
              },
              values: [
                "Yes",
              ],
            },
          ],
          id: "right_to_work",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
      ],
      rejectedAt: new Date("2021-01-01T01:01:01.000Z"),
      rejectedReasonIds: [
        "f223d7f6-908b-48f0-9237-b201c307f609",
      ],
      rejectedReasons: [
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          label: "Failed Phone Screen",
          rejectedReasonType: {
            sourceValue: true,
            value: RejectedReasonValue.RejectedByOrganization,
          },
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      remoteCandidateId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteInterviewStageId: "18bcbb1b-3cbc-4198-a999-460861d19480",
      remoteJobId: "4071538b-3cac-4fbf-ac76-f78ed250ffdd",
      remoteLocationId: "dd8d41d1-5eb8-4408-9c87-9ba44604eae4",
      remoteLocationIds: [
        "dd8d41d1-5eb8-4408-9c87-9ba44604eae4",
      ],
      remoteRejectedReasonIds: [
        "f223d7f6-908b-48f0-9237-b201c307f609",
      ],
      resultLinks: [
        {
          label: "assessment result link",
          url: "http://example.com/assessment-result/4565765/data",
        },
      ],
      source: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "LinkedIn",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  },
  contentType: "<value>",
  statusCode: 18789,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `applicationResult`                                                         | [shared.ApplicationResult](../../../sdk/models/shared/applicationresult.md) | :heavy_minus_sign:                                                          | The application with the given identifier was retrieved.                    |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
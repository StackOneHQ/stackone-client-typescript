# Application

## Example Usage

```typescript
import {
  AnswerValue,
  Application,
  ApplicationValue,
  AtsDocumentApiModelValue,
  RejectedReasonValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Application = {
  applicationStatus: {
    sourceValue: "Hired",
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
      value: "Completed",
      valueId: "value_456",
    },
  ],
  documents: [
    {
      category: {},
      categoryId: "6530",
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      fileFormat: {
        sourceValue: "abc",
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
            sourceValue: "Short Text",
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
        sourceValue: "RejectedByOrg",
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationStatus`                                                                                                                                     | [shared.ApplicationStatus](../../../sdk/models/shared/applicationstatus.md)                                                                             | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| ~~`attachments`~~                                                                                                                                       | [shared.ApplicationAttachment](../../../sdk/models/shared/applicationattachment.md)[]                                                                   | :heavy_minus_sign:                                                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Use `documents` expand instead |                                                                                                                                                         |
| `candidate`                                                                                                                                             | [shared.ApplicationCandidate](../../../sdk/models/shared/applicationcandidate.md)                                                                       | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `candidateId`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Unique identifier of the candidate                                                                                                                      | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                                                                    |
| `createdAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | Date of creation                                                                                                                                        | 2021-01-01T01:01:01.000Z                                                                                                                                |
| `customFields`                                                                                                                                          | [shared.ApplicationCustomFields](../../../sdk/models/shared/applicationcustomfields.md)[]                                                               | :heavy_minus_sign:                                                                                                                                      | The application custom fields                                                                                                                           |                                                                                                                                                         |
| `documents`                                                                                                                                             | [shared.AtsDocumentApiModel](../../../sdk/models/shared/atsdocumentapimodel.md)[]                                                                       | :heavy_minus_sign:                                                                                                                                      | The documents attached to this application (eg. resume, cover letter etc.)                                                                              |                                                                                                                                                         |
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Unique identifier                                                                                                                                       | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                                                    |
| `interviewStage`                                                                                                                                        | [shared.ApplicationInterviewStage](../../../sdk/models/shared/applicationinterviewstage.md)                                                             | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `interviewStageId`                                                                                                                                      | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Unique identifier of the interview stage                                                                                                                | 18bcbb1b-3cbc-4198-a999-460861d19480                                                                                                                    |
| `jobId`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Unique identifier of the job                                                                                                                            | 4071538b-3cac-4fbf-ac76-f78ed250ffdd                                                                                                                    |
| `locationId`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Unique identifier of the location                                                                                                                       | dd8d41d1-5eb8-4408-9c87-9ba44604eae4                                                                                                                    |
| `locationIds`                                                                                                                                           | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | Unique identifiers of the locations                                                                                                                     | [<br/>"dd8d41d1-5eb8-4408-9c87-9ba44604eae4"<br/>]                                                                                                      |
| `questionnaires`                                                                                                                                        | [shared.Questionnaire](../../../sdk/models/shared/questionnaire.md)[]                                                                                   | :heavy_minus_sign:                                                                                                                                      | Questionnaires associated with the application                                                                                                          | {<br/>"id": "right_to_work",<br/>"answers": [<br/>{<br/>"id": "answer1",<br/>"type": "text",<br/>"values": [<br/>"Yes"<br/>]<br/>}<br/>]<br/>}          |
| `rejectedAt`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | Date of rejection                                                                                                                                       | 2021-01-01T01:01:01.000Z                                                                                                                                |
| `rejectedReasonIds`                                                                                                                                     | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | Unique identifiers of the rejection reasons                                                                                                             | [<br/>"f223d7f6-908b-48f0-9237-b201c307f609"<br/>]                                                                                                      |
| `rejectedReasons`                                                                                                                                       | [shared.RejectedReason](../../../sdk/models/shared/rejectedreason.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `remoteCandidateId`                                                                                                                                     | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Provider's unique identifier of the candidate                                                                                                           | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                                                                    |
| `remoteId`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Provider's unique identifier                                                                                                                            | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                                                    |
| `remoteInterviewStageId`                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Provider's unique identifier of the interview stage                                                                                                     | 18bcbb1b-3cbc-4198-a999-460861d19480                                                                                                                    |
| `remoteJobId`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Provider's unique identifier of the job                                                                                                                 | 4071538b-3cac-4fbf-ac76-f78ed250ffdd                                                                                                                    |
| `remoteLocationId`                                                                                                                                      | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Provider's unique identifier of the location                                                                                                            | dd8d41d1-5eb8-4408-9c87-9ba44604eae4                                                                                                                    |
| `remoteLocationIds`                                                                                                                                     | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | Remote's unique identifiers of the locations                                                                                                            | [<br/>"dd8d41d1-5eb8-4408-9c87-9ba44604eae4"<br/>]                                                                                                      |
| `remoteRejectedReasonIds`                                                                                                                               | *string*[]                                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | Provider's unique identifiers of the rejection reasons                                                                                                  | [<br/>"f223d7f6-908b-48f0-9237-b201c307f609"<br/>]                                                                                                      |
| `resultLinks`                                                                                                                                           | [shared.ResultLink](../../../sdk/models/shared/resultlink.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `source`                                                                                                                                                | [shared.Source](../../../sdk/models/shared/source.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `unifiedCustomFields`                                                                                                                                   | Record<string, *any*>                                                                                                                                   | :heavy_minus_sign:                                                                                                                                      | Custom Unified Fields configured in your StackOne project                                                                                               | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>}                                                |
| `updatedAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | Date of last update                                                                                                                                     | 2021-01-01T01:01:01.000Z                                                                                                                                |
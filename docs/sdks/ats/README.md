# Ats
(*ats*)

### Available Operations

* [createApplication](#createapplication) - Create Application
* [createCandidate](#createcandidate) - Create Candidate (early access)
* [createCandidateNote](#createcandidatenote) - Create Candidate Note
* [createOffer](#createoffer) - Creates an offer
* [downloadApplicationDocument](#downloadapplicationdocument) - Download Application Document
* [getApplication](#getapplication) - Get Application
* [getApplicationDocument](#getapplicationdocument) - Get Application Document
* [getApplicationOffer](#getapplicationoffer) - Get Application Offer
* [getApplicationScorecard](#getapplicationscorecard) - Get Application Scorecard
* [getCandidate](#getcandidate) - Get Candidate
* [getCandidateNote](#getcandidatenote) - Get Candidate Note
* [getDepartment](#getdepartment) - Get Department
* [getInterview](#getinterview) - Get Interview
* [getInterviewStage](#getinterviewstage) - Get Interview Stage
* [getJob](#getjob) - Get Job
* [getJobPosting](#getjobposting) - Get Job Posting
* [getLocation](#getlocation) - Get Location
* [getOffer](#getoffer) - Get Offer
* [getRejectedReason](#getrejectedreason) - Get Rejected Reason
* [getUser](#getuser) - Get User
* [listApplicationDocuments](#listapplicationdocuments) - List Application Documents
* [listApplicationScorecards](#listapplicationscorecards) - List Application Scorecards
* [listApplications](#listapplications) - List Applications
* [listApplicationsOffers](#listapplicationsoffers) - List Application Offers
* [listCandidateNotes](#listcandidatenotes) - List Candidate Notes
* [listCandidates](#listcandidates) - List Candidates
* [listDepartments](#listdepartments) - List Departments
* [listInterviewStages](#listinterviewstages) - List Interview Stages
* [listInterviews](#listinterviews) - List Interviews
* [listJobPostings](#listjobpostings) - List Job Postings
* [listJobs](#listjobs) - List Jobs
* [listLocations](#listlocations) - List locations
* [listOffers](#listoffers) - List Offers
* [listRejectedReasons](#listrejectedreasons) - List Rejected Reasons
* [listUsers](#listusers) - List Users
* [updateApplication](#updateapplication) - Update an Application
* [updateCandidate](#updatecandidate) - Update Candidate (early access)

## createApplication

Create Application

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AnswerValue, AtsCreateApplicationRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.createApplication({
    atsCreateApplicationRequestDto: {
      applicationStatus: {
      sourceValue: "Hired",
        value: AtsCreateApplicationRequestDtoValue.Hired,
      },
      candidate: {
        email: "john.doe@example.com",
        firstName: "John",
        lastName: "Doe",
      },
      candidateId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      jobId: "4071538b-3cac-4fbf-ac76-f78ed250ffdd",
      locationId: "dd8d41d1-5eb8-4408-9c87-9ba44604eae4",
      questionnaires: [
        {
          answers: [
            {
              id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
              type: {
              sourceValue: "Short Text",
                value: AnswerValue.ShortText,
              },
              values: [
                "Yes",
                "No Travel",
                "It sounds pretty cool.",
                "Excel",
                "Power Point",
              ],
            },
          ],
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
      ],
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsCreateApplicationRequest](../../sdk/models/operations/atscreateapplicationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsCreateApplicationResponse](../../sdk/models/operations/atscreateapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCandidate

Create Candidate (early access)

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.createCandidate({
    atsCreateCandidateRequestDto: {
      applicationIds: [
        "123e4567-e89b-12d3-a456-426614174000",
        "523e1234-e89b-fdd2-a456-762545121101",
      ],
      company: "Company Inc.",
      emails: [
        {
          type: "personal",
          value: "sestier.romain123@gmail.com",
        },
      ],
      firstName: "Romain",
      lastName: "Sestier",
      name: "Romain Sestier",
      phone: "+16178294093",
      title: "Software Engineer",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsCreateCandidateRequest](../../sdk/models/operations/atscreatecandidaterequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsCreateCandidateResponse](../../sdk/models/operations/atscreatecandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCandidateNote

Create Candidate Note

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AtsCreateNotesRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.createCandidateNote({
    atsCreateNotesRequestDto: {
      authorId: "1234567890",
      content: [
        {
          body: "This candidate seems like a good fit for the role",
        },
      ],
      visibility: {
      sourceValue: "Public",
        value: AtsCreateNotesRequestDtoValue.Public,
      },
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsCreateCandidateNoteRequest](../../sdk/models/operations/atscreatecandidatenoterequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsCreateCandidateNoteResponse](../../sdk/models/operations/atscreatecandidatenoteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createOffer

Creates an offer

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AtsCreateOfferRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.createOffer({
    atsCreateOfferRequestDto: {
      offerHistory: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          startDate: new Date("2021-01-01T01:01:01.000Z"),
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
      ],
      offerStatus: {
      sourceValue: "Pending",
        value: AtsCreateOfferRequestDtoValue.Pending,
      },
      startDate: new Date("2021-01-01T01:01:01.000Z"),
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsCreateOfferRequest](../../sdk/models/operations/atscreateofferrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsCreateOfferResponse](../../sdk/models/operations/atscreateofferresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## downloadApplicationDocument

Download Application Document

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.downloadApplicationDocument({
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsDownloadApplicationDocumentRequest](../../sdk/models/operations/atsdownloadapplicationdocumentrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsDownloadApplicationDocumentResponse](../../sdk/models/operations/atsdownloadapplicationdocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getApplication

Get Application

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getApplication({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetApplicationRequest](../../sdk/models/operations/atsgetapplicationrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetApplicationResponse](../../sdk/models/operations/atsgetapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getApplicationDocument

Get Application Document

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getApplicationDocument({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetApplicationDocumentRequest](../../sdk/models/operations/atsgetapplicationdocumentrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetApplicationDocumentResponse](../../sdk/models/operations/atsgetapplicationdocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getApplicationOffer

Get Application Offer

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getApplicationOffer({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetApplicationOfferRequest](../../sdk/models/operations/atsgetapplicationofferrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetApplicationOfferResponse](../../sdk/models/operations/atsgetapplicationofferresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getApplicationScorecard

Get Application Scorecard

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getApplicationScorecard({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetApplicationScorecardRequest](../../sdk/models/operations/atsgetapplicationscorecardrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetApplicationScorecardResponse](../../sdk/models/operations/atsgetapplicationscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCandidate

Get Candidate

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getCandidate({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetCandidateRequest](../../sdk/models/operations/atsgetcandidaterequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetCandidateResponse](../../sdk/models/operations/atsgetcandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCandidateNote

Get Candidate Note

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getCandidateNote({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetCandidateNoteRequest](../../sdk/models/operations/atsgetcandidatenoterequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetCandidateNoteResponse](../../sdk/models/operations/atsgetcandidatenoteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getDepartment

Get Department

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getDepartment({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetDepartmentRequest](../../sdk/models/operations/atsgetdepartmentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetDepartmentResponse](../../sdk/models/operations/atsgetdepartmentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getInterview

Get Interview

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getInterview({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetInterviewRequest](../../sdk/models/operations/atsgetinterviewrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetInterviewResponse](../../sdk/models/operations/atsgetinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getInterviewStage

Get Interview Stage

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getInterviewStage({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetInterviewStageRequest](../../sdk/models/operations/atsgetinterviewstagerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetInterviewStageResponse](../../sdk/models/operations/atsgetinterviewstageresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getJob

Get Job

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getJob({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetJobRequest](../../sdk/models/operations/atsgetjobrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetJobResponse](../../sdk/models/operations/atsgetjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getJobPosting

Get Job Posting

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getJobPosting({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetJobPostingRequest](../../sdk/models/operations/atsgetjobpostingrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetJobPostingResponse](../../sdk/models/operations/atsgetjobpostingresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getLocation

Get Location

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getLocation({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetLocationRequest](../../sdk/models/operations/atsgetlocationrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetLocationResponse](../../sdk/models/operations/atsgetlocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOffer

Get Offer

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getOffer({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetOfferRequest](../../sdk/models/operations/atsgetofferrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetOfferResponse](../../sdk/models/operations/atsgetofferresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getRejectedReason

Get Rejected Reason

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getRejectedReason({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetRejectedReasonRequest](../../sdk/models/operations/atsgetrejectedreasonrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetRejectedReasonResponse](../../sdk/models/operations/atsgetrejectedreasonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUser

Get User

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.getUser({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsGetUserRequest](../../sdk/models/operations/atsgetuserrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsGetUserResponse](../../sdk/models/operations/atsgetuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listApplicationDocuments

List Application Documents

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listApplicationDocuments({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListApplicationDocumentsRequest](../../sdk/models/operations/atslistapplicationdocumentsrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListApplicationDocumentsResponse](../../sdk/models/operations/atslistapplicationdocumentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listApplicationScorecards

List Application Scorecards

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listApplicationScorecards({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListApplicationScorecardsRequest](../../sdk/models/operations/atslistapplicationscorecardsrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListApplicationScorecardsResponse](../../sdk/models/operations/atslistapplicationscorecardsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listApplications

List Applications

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listApplications({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListApplicationsRequest](../../sdk/models/operations/atslistapplicationsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListApplicationsResponse](../../sdk/models/operations/atslistapplicationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listApplicationsOffers

List Application Offers

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listApplicationsOffers({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListApplicationsOffersRequest](../../sdk/models/operations/atslistapplicationsoffersrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListApplicationsOffersResponse](../../sdk/models/operations/atslistapplicationsoffersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCandidateNotes

List Candidate Notes

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listCandidateNotes({
    id: "<id>",
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListCandidateNotesRequest](../../sdk/models/operations/atslistcandidatenotesrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListCandidateNotesResponse](../../sdk/models/operations/atslistcandidatenotesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCandidates

List Candidates

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listCandidates({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListCandidatesRequest](../../sdk/models/operations/atslistcandidatesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListCandidatesResponse](../../sdk/models/operations/atslistcandidatesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listDepartments

List Departments

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listDepartments({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListDepartmentsRequest](../../sdk/models/operations/atslistdepartmentsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListDepartmentsResponse](../../sdk/models/operations/atslistdepartmentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listInterviewStages

List Interview Stages

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listInterviewStages({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListInterviewStagesRequest](../../sdk/models/operations/atslistinterviewstagesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListInterviewStagesResponse](../../sdk/models/operations/atslistinterviewstagesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listInterviews

List Interviews

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listInterviews({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListInterviewsRequest](../../sdk/models/operations/atslistinterviewsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListInterviewsResponse](../../sdk/models/operations/atslistinterviewsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listJobPostings

List Job Postings

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listJobPostings({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListJobPostingsRequest](../../sdk/models/operations/atslistjobpostingsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListJobPostingsResponse](../../sdk/models/operations/atslistjobpostingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listJobs

List Jobs

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listJobs({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListJobsRequest](../../sdk/models/operations/atslistjobsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListJobsResponse](../../sdk/models/operations/atslistjobsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLocations

List locations

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listLocations({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListLocationsRequest](../../sdk/models/operations/atslistlocationsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListLocationsResponse](../../sdk/models/operations/atslistlocationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listOffers

List Offers

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listOffers({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListOffersRequest](../../sdk/models/operations/atslistoffersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListOffersResponse](../../sdk/models/operations/atslistoffersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listRejectedReasons

List Rejected Reasons

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listRejectedReasons({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListRejectedReasonsRequest](../../sdk/models/operations/atslistrejectedreasonsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListRejectedReasonsResponse](../../sdk/models/operations/atslistrejectedreasonsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUsers

List Users

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.listUsers({
    proxy: {
      "key": "<value>",
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsListUsersRequest](../../sdk/models/operations/atslistusersrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsListUsersResponse](../../sdk/models/operations/atslistusersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateApplication

Update an Application

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.updateApplication({
    atsUpdateApplicationRequestDto: {
      interviewStageId: "18bcbb1b-3cbc-4198-a999-460861d19480",
      rejectedReasonId: "f223d7f6-908b-48f0-9237-b201c307f609",
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsUpdateApplicationRequest](../../sdk/models/operations/atsupdateapplicationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsUpdateApplicationResponse](../../sdk/models/operations/atsupdateapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCandidate

Update Candidate (early access)

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const result = await sdk.ats.updateCandidate({
    atsUpdateCandidatesRequestDto: {
      applicationIds: [
        "123e4567-e89b-12d3-a456-426614174000",
        "523e1234-e89b-fdd2-a456-762545121101",
      ],
      company: "Company Inc.",
      emails: [
        {
          type: "personal",
          value: "sestier.romain123@gmail.com",
        },
      ],
      firstName: "Romain",
      id: "eebbaa75-7adf-4f7e-be4c-def6a12840f2",
      lastName: "Sestier",
      name: "Romain Sestier",
      phone: "+16178294093",
      title: "Software Engineer",
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AtsUpdateCandidateRequest](../../sdk/models/operations/atsupdatecandidaterequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AtsUpdateCandidateResponse](../../sdk/models/operations/atsupdatecandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

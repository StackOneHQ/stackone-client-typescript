# Ats
(*.ats*)

### Available Operations

* [createApplication](#createapplication) - Create Application
* [createCandidate](#createcandidate) - Create Candidate (early access)
* [createCandidateNote](#createcandidatenote) - Create Candidate Note
* [createOffer](#createoffer) - Creates an offer
* [getApplication](#getapplication) - Get Application
* [getApplicationOffer](#getapplicationoffer) - Get Application Offer
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
* [updateApplication](#updateapplication) - Update Application
* [updateCandidate](#updatecandidate) - Update Candidate (early access)

## createApplication

Create Application

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ApplicationStatusEnumValue, AttachmentTypeValue, Value } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.createApplication({
    atsCreateApplicationRequestDto: {
      applicationStatus: {
        sourceValue: "string",
        value: ApplicationStatusEnumValue.Lead,
      },
      attachments: [
        {
          type: [
            {},
          ],
        },
      ],
      candidate: {},
      locationIds: [
        "string",
      ],
      questionnaire: {
        answers: [
          {
            type: {},
            values: [
              "string",
            ],
          },
        ],
      },
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.AtsCreateApplicationRequest](../../models/operations/atscreateapplicationrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.AtsCreateApplicationResponse](../../models/operations/atscreateapplicationresponse.md)>**


## createCandidate

Create Candidate (early access)

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.createCandidate({
    atsCreateCandidateRequestDto: {
      applicationIds: [
        "string",
      ],
      emails: [
        {
          type: "string",
          value: "string",
        },
      ],
      firstName: "Garett",
      lastName: "Green",
      name: "string",
      title: "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.AtsCreateCandidateRequest](../../models/operations/atscreatecandidaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AtsCreateCandidateResponse](../../models/operations/atscreatecandidateresponse.md)>**


## createCandidateNote

Create Candidate Note

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { NotesVisibilityEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.createCandidateNote({
    atsCreateNotesRequestDto: {
      content: [
        "string",
      ],
      visibility: {
        sourceValue: "string",
        value: NotesVisibilityEnumValue.Private,
      },
    },
    id: "<ID>",
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AtsCreateCandidateNoteRequest](../../models/operations/atscreatecandidatenoterequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AtsCreateCandidateNoteResponse](../../models/operations/atscreatecandidatenoteresponse.md)>**


## createOffer

Creates an offer

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { OfferStatusEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.createOffer({
    atsCreateOfferRequestDto: {
      applicationId: "string",
      offerHistory: [
        {
          startDate: new Date("2022-09-24T09:28:11.477Z"),
        },
      ],
      offerStatus: {
        sourceValue: "string",
        value: OfferStatusEnumValue.Retracted,
      },
      startDate: new Date("2022-03-14T09:37:29.175Z"),
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.AtsCreateOfferRequest](../../models/operations/atscreateofferrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.AtsCreateOfferResponse](../../models/operations/atscreateofferresponse.md)>**


## getApplication

Get Application

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getApplication({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AtsGetApplicationRequest](../../models/operations/atsgetapplicationrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsGetApplicationResponse](../../models/operations/atsgetapplicationresponse.md)>**


## getApplicationOffer

Get Application Offer

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getApplicationOffer({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    subResourceId: "string",
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AtsGetApplicationOfferRequest](../../models/operations/atsgetapplicationofferrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AtsGetApplicationOfferResponse](../../models/operations/atsgetapplicationofferresponse.md)>**


## getCandidate

Get Candidate

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getCandidate({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.AtsGetCandidateRequest](../../models/operations/atsgetcandidaterequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.AtsGetCandidateResponse](../../models/operations/atsgetcandidateresponse.md)>**


## getCandidateNote

Get Candidate Note

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getCandidateNote({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    subResourceId: "string",
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.AtsGetCandidateNoteRequest](../../models/operations/atsgetcandidatenoterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.AtsGetCandidateNoteResponse](../../models/operations/atsgetcandidatenoteresponse.md)>**


## getDepartment

Get Department

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getDepartment({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AtsGetDepartmentRequest](../../models/operations/atsgetdepartmentrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AtsGetDepartmentResponse](../../models/operations/atsgetdepartmentresponse.md)>**


## getInterview

Get Interview

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getInterview({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.AtsGetInterviewRequest](../../models/operations/atsgetinterviewrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.AtsGetInterviewResponse](../../models/operations/atsgetinterviewresponse.md)>**


## getInterviewStage

Get Interview Stage

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getInterviewStage({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.AtsGetInterviewStageRequest](../../models/operations/atsgetinterviewstagerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.AtsGetInterviewStageResponse](../../models/operations/atsgetinterviewstageresponse.md)>**


## getJob

Get Job

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getJob({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.AtsGetJobRequest](../../models/operations/atsgetjobrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.AtsGetJobResponse](../../models/operations/atsgetjobresponse.md)>**


## getJobPosting

Get Job Posting

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getJobPosting({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AtsGetJobPostingRequest](../../models/operations/atsgetjobpostingrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AtsGetJobPostingResponse](../../models/operations/atsgetjobpostingresponse.md)>**


## getLocation

Get Location

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getLocation({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.AtsGetLocationRequest](../../models/operations/atsgetlocationrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.AtsGetLocationResponse](../../models/operations/atsgetlocationresponse.md)>**


## getOffer

Get Offer

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getOffer({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.AtsGetOfferRequest](../../models/operations/atsgetofferrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AtsGetOfferResponse](../../models/operations/atsgetofferresponse.md)>**


## getRejectedReason

Get Rejected Reason

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getRejectedReason({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.AtsGetRejectedReasonRequest](../../models/operations/atsgetrejectedreasonrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.AtsGetRejectedReasonResponse](../../models/operations/atsgetrejectedreasonresponse.md)>**


## getUser

Get User

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.getUser({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.AtsGetUserRequest](../../models/operations/atsgetuserrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.AtsGetUserResponse](../../models/operations/atsgetuserresponse.md)>**


## listApplications

List Applications

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listApplications({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.AtsListApplicationsRequest](../../models/operations/atslistapplicationsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.AtsListApplicationsResponse](../../models/operations/atslistapplicationsresponse.md)>**


## listApplicationsOffers

List Application Offers

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listApplicationsOffers({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.AtsListApplicationsOffersRequest](../../models/operations/atslistapplicationsoffersrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.AtsListApplicationsOffersResponse](../../models/operations/atslistapplicationsoffersresponse.md)>**


## listCandidateNotes

List Candidate Notes

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listCandidateNotes({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.AtsListCandidateNotesRequest](../../models/operations/atslistcandidatenotesrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AtsListCandidateNotesResponse](../../models/operations/atslistcandidatenotesresponse.md)>**


## listCandidates

List Candidates

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listCandidates({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AtsListCandidatesRequest](../../models/operations/atslistcandidatesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsListCandidatesResponse](../../models/operations/atslistcandidatesresponse.md)>**


## listDepartments

List Departments

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listDepartments({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.AtsListDepartmentsRequest](../../models/operations/atslistdepartmentsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AtsListDepartmentsResponse](../../models/operations/atslistdepartmentsresponse.md)>**


## listInterviewStages

List Interview Stages

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listInterviewStages({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AtsListInterviewStagesRequest](../../models/operations/atslistinterviewstagesrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AtsListInterviewStagesResponse](../../models/operations/atslistinterviewstagesresponse.md)>**


## listInterviews

List Interviews

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listInterviews({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AtsListInterviewsRequest](../../models/operations/atslistinterviewsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsListInterviewsResponse](../../models/operations/atslistinterviewsresponse.md)>**


## listJobPostings

List Job Postings

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listJobPostings({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.AtsListJobPostingsRequest](../../models/operations/atslistjobpostingsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AtsListJobPostingsResponse](../../models/operations/atslistjobpostingsresponse.md)>**


## listJobs

List Jobs

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listJobs({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.AtsListJobsRequest](../../models/operations/atslistjobsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AtsListJobsResponse](../../models/operations/atslistjobsresponse.md)>**


## listLocations

List locations

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listLocations({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AtsListLocationsRequest](../../models/operations/atslistlocationsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AtsListLocationsResponse](../../models/operations/atslistlocationsresponse.md)>**


## listOffers

List Offers

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listOffers({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.AtsListOffersRequest](../../models/operations/atslistoffersrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.AtsListOffersResponse](../../models/operations/atslistoffersresponse.md)>**


## listRejectedReasons

List Rejected Reasons

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listRejectedReasons({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AtsListRejectedReasonsRequest](../../models/operations/atslistrejectedreasonsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AtsListRejectedReasonsResponse](../../models/operations/atslistrejectedreasonsresponse.md)>**


## listUsers

List Users

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.listUsers({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.AtsListUsersRequest](../../models/operations/atslistusersrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.AtsListUsersResponse](../../models/operations/atslistusersresponse.md)>**


## updateApplication

Update Application

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ApplicationStatusEnumValue, AttachmentTypeValue, Value } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.updateApplication({
    atsUpdateApplicationRequestDto: {
      applicationStatus: {
        sourceValue: "string",
        value: ApplicationStatusEnumValue.Converted,
      },
      attachments: [
        {
          type: [
            {},
          ],
        },
      ],
      candidate: {},
      locationIds: [
        "string",
      ],
      questionnaire: {
        answers: [
          {
            type: {},
            values: [
              "string",
            ],
          },
        ],
      },
    },
    id: "<ID>",
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.AtsUpdateApplicationRequest](../../models/operations/atsupdateapplicationrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.AtsUpdateApplicationResponse](../../models/operations/atsupdateapplicationresponse.md)>**


## updateCandidate

Update Candidate (early access)

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.ats.updateCandidate({
    atsUpdateCandidatesRequestDto: {
      applicationIds: [
        "string",
      ],
      emails: [
        {
          type: "string",
          value: "string",
        },
      ],
    },
    id: "<ID>",
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.AtsUpdateCandidateRequest](../../models/operations/atsupdatecandidaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AtsUpdateCandidateResponse](../../models/operations/atsupdatecandidateresponse.md)>**


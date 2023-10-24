# Candidates
(*candidates*)

### Available Operations

* [atsCandidatePatch](#atscandidatepatch) - Patch Candidate (early access)
* [atsCandidatePost](#atscandidatepost) - Post Candidate (early access)
* [atsCandidatesGet](#atscandidatesget) - Get Candidate
* [atsCandidatesList](#atscandidateslist) - List Candidates
* [candidateNoteCreate](#candidatenotecreate) - Create Candidate Note
* [notesGet](#notesget) - Get Candidate Note
* [notesList](#noteslist) - List Candidate Notes

## atsCandidatePatch

Patch Candidate (early access)

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

  const res = await sdk.candidates.atsCandidatePatch({
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AtsCandidatePatchRequest](../../models/operations/atscandidatepatchrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsCandidatePatchResponse](../../models/operations/atscandidatepatchresponse.md)>**


## atsCandidatePost

Post Candidate (early access)

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

  const res = await sdk.candidates.atsCandidatePost({
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
      firstName: "Marc",
      lastName: "Brakus",
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AtsCandidatePostRequest](../../models/operations/atscandidatepostrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AtsCandidatePostResponse](../../models/operations/atscandidatepostresponse.md)>**


## atsCandidatesGet

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

  const res = await sdk.candidates.atsCandidatesGet({
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
| `request`                                                                                | [operations.AtsCandidatesGetRequest](../../models/operations/atscandidatesgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AtsCandidatesGetResponse](../../models/operations/atscandidatesgetresponse.md)>**


## atsCandidatesList

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

  const res = await sdk.candidates.atsCandidatesList({
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
| `request`                                                                                  | [operations.AtsCandidatesListRequest](../../models/operations/atscandidateslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsCandidatesListResponse](../../models/operations/atscandidateslistresponse.md)>**


## candidateNoteCreate

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

  const res = await sdk.candidates.candidateNoteCreate({
    atsCreateNotesRequestDto: {
      content: [
        "string",
      ],
      visibility: {
        sourceValue: "string",
        value: NotesVisibilityEnumValue.Public,
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CandidateNoteCreateRequest](../../models/operations/candidatenotecreaterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CandidateNoteCreateResponse](../../models/operations/candidatenotecreateresponse.md)>**


## notesGet

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

  const res = await sdk.candidates.notesGet({
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

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.NotesGetRequest](../../models/operations/notesgetrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.NotesGetResponse](../../models/operations/notesgetresponse.md)>**


## notesList

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

  const res = await sdk.candidates.notesList({
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
| `request`                                                                  | [operations.NotesListRequest](../../models/operations/noteslistrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.NotesListResponse](../../models/operations/noteslistresponse.md)>**


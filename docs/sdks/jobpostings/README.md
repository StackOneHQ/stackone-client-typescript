# JobPostings
(*jobPostings*)

### Available Operations

* [atsJobPostingsGet](#atsjobpostingsget) - Get Job Posting
* [atsJobPostingsList](#atsjobpostingslist) - List Job Postings

## atsJobPostingsGet

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

  const res = await sdk.jobPostings.atsJobPostingsGet({
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
| `request`                                                                                  | [operations.AtsJobPostingsGetRequest](../../models/operations/atsjobpostingsgetrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AtsJobPostingsGetResponse](../../models/operations/atsjobpostingsgetresponse.md)>**


## atsJobPostingsList

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

  const res = await sdk.jobPostings.atsJobPostingsList({
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
| `request`                                                                                    | [operations.AtsJobPostingsListRequest](../../models/operations/atsjobpostingslistrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.AtsJobPostingsListResponse](../../models/operations/atsjobpostingslistresponse.md)>**


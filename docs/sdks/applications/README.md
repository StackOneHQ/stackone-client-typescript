# Applications
(*applications*)

### Available Operations

* [applicationPatch](#applicationpatch) - Update Application (early access)
* [applicationPost](#applicationpost) - Create Application (early access)
* [applicationsGet](#applicationsget) - Get Application
* [applicationsList](#applicationslist) - List Applications
* [applicationsOffersGet](#applicationsoffersget) - Get Application Offer
* [applicationsOffersList](#applicationsofferslist) - List Application Offers

## applicationPatch

Update Application (early access)

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AnswerEnumValue, ApplicationStatusEnumValue, AttachmentTypeValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.applications.applicationPatch({
    atsUpdateApplicationRequestDto: {
      applicationStatus: {
        sourceValue: "string",
        value: ApplicationStatusEnumValue.Hired,
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ApplicationPatchRequest](../../models/operations/applicationpatchrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ApplicationPatchResponse](../../models/operations/applicationpatchresponse.md)>**


## applicationPost

Create Application (early access)

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AnswerEnumValue, ApplicationStatusEnumValue, AttachmentTypeValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.applications.applicationPost({
    atsCreateApplicationRequestDto: {
      applicationStatus: {
        sourceValue: "string",
        value: ApplicationStatusEnumValue.UnmappedValue,
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

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ApplicationPostRequest](../../models/operations/applicationpostrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ApplicationPostResponse](../../models/operations/applicationpostresponse.md)>**


## applicationsGet

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

  const res = await sdk.applications.applicationsGet({
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
| `request`                                                                              | [operations.ApplicationsGetRequest](../../models/operations/applicationsgetrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ApplicationsGetResponse](../../models/operations/applicationsgetresponse.md)>**


## applicationsList

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

  const res = await sdk.applications.applicationsList({
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
| `request`                                                                                | [operations.ApplicationsListRequest](../../models/operations/applicationslistrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ApplicationsListResponse](../../models/operations/applicationslistresponse.md)>**


## applicationsOffersGet

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

  const res = await sdk.applications.applicationsOffersGet({
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ApplicationsOffersGetRequest](../../models/operations/applicationsoffersgetrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ApplicationsOffersGetResponse](../../models/operations/applicationsoffersgetresponse.md)>**


## applicationsOffersList

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

  const res = await sdk.applications.applicationsOffersList({
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ApplicationsOffersListRequest](../../models/operations/applicationsofferslistrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ApplicationsOffersListResponse](../../models/operations/applicationsofferslistresponse.md)>**


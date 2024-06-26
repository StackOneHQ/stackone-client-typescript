# Lms
(*lms*)

### Available Operations

* [createCompletion](#createcompletion) - Create Completion
* [createContent](#createcontent) - Create Content
* [getCategory](#getcategory) - Get Category
* [getCompletion](#getcompletion) - Get Completion
* [getContent](#getcontent) - Get Content
* [listCategories](#listcategories) - List Categories
* [updateContent](#updatecontent) - Update Content

## createCompletion

Create Completion

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.lms.createCompletion({
    lmsCreateCompletionRequestDto: {
      completedAt: "2021-07-21T14:00:00.000Z",
      contentId: "16873-ENG-VIDEO-1",
      expand: "user",
      externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-COMPLETION",
      passthrough: {
        "0": "{",
        "1": "\"",
        "2": "o",
        "3": "t",
        "4": "h",
        "5": "e",
        "6": "r",
        "7": "_",
        "8": "k",
        "9": "n",
        "10": "o",
        "11": "w",
        "12": "n",
        "13": "_",
        "14": "n",
        "15": "a",
        "16": "m",
        "17": "e",
        "18": "s",
        "19": "\"",
        "20": ":",
        "21": " ",
        "22": "\"",
        "23": "J",
        "24": "o",
        "25": "h",
        "26": "n",
        "27": " ",
        "28": "D",
        "29": "o",
        "30": "e",
        "31": "\"",
        "32": "}",
      },
      user: {
        createdAt: "2021-07-21T14:00:00.000Z",
        email: "john.doe@company.com",
        id: "16873",
        name: "John Doe",
        phoneNumber: "0123456789",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        updatedAt: "2021-07-21T14:00:00.000Z",
      },
      userId: "746359",
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
| `request`                                                                                                                                                                      | [operations.LmsCreateCompletionRequest](../../sdk/models/operations/lmscreatecompletionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.LmsCreateCompletionResponse](../../sdk/models/operations/lmscreatecompletionresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createContent

Create Content

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ContentLanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.lms.createContent({
    lmsCreateContentRequestDto: {
    active: true,
      categories: [
        {
          name: "Technology",
        },
      ],
      contentUrl: "https://www.youtube.com/watch?v=16873",
      courseIds: [
        "16873-SOFTWARE-ENG-COURSE",
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description: "This video acts as learning content for software engineers.",
      duration: "P3Y6M4DT12H30M5S",
      externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      languages: [
        {
          value: ContentLanguageEnumValue.EnGB,
        },
      ],
      order: 1,
      title: "Software Engineer Lv 1",
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
| `request`                                                                                                                                                                      | [operations.LmsCreateContentRequest](../../sdk/models/operations/lmscreatecontentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.LmsCreateContentResponse](../../sdk/models/operations/lmscreatecontentresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCategory

Get Category

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.lms.getCategory({
    fields: "id,remote_id,name",
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
| `request`                                                                                                                                                                      | [operations.LmsGetCategoryRequest](../../sdk/models/operations/lmsgetcategoryrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.LmsGetCategoryResponse](../../sdk/models/operations/lmsgetcategoryresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCompletion

Get Completion

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.lms.getCompletion({
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
| `request`                                                                                                                                                                      | [operations.LmsGetCompletionRequest](../../sdk/models/operations/lmsgetcompletionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.LmsGetCompletionResponse](../../sdk/models/operations/lmsgetcompletionresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getContent

Get Content

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.lms.getContent({
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
| `request`                                                                                                                                                                      | [operations.LmsGetContentRequest](../../sdk/models/operations/lmsgetcontentrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.LmsGetContentResponse](../../sdk/models/operations/lmsgetcontentresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCategories

List Categories

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.lms.listCategories({
    fields: "id,remote_id,name",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
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
| `request`                                                                                                                                                                      | [operations.LmsListCategoriesRequest](../../sdk/models/operations/lmslistcategoriesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.LmsListCategoriesResponse](../../sdk/models/operations/lmslistcategoriesresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateContent

Update Content

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ContentLanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.lms.updateContent({
    lmsCreateContentRequestDto: {
    active: true,
      categories: [
        {
          name: "Technology",
        },
      ],
      contentUrl: "https://www.youtube.com/watch?v=16873",
      courseIds: [
        "16873-SOFTWARE-ENG-COURSE",
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description: "This video acts as learning content for software engineers.",
      duration: "P3Y6M4DT12H30M5S",
      externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      languages: [
        {
          value: ContentLanguageEnumValue.EnGB,
        },
      ],
      order: 1,
      title: "Software Engineer Lv 1",
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
| `request`                                                                                                                                                                      | [operations.LmsUpdateContentRequest](../../sdk/models/operations/lmsupdatecontentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.LmsUpdateContentResponse](../../sdk/models/operations/lmsupdatecontentresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

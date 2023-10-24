# Templates
(*templates*)

### Available Operations

* [marketingEmailTemplateCreate](#marketingemailtemplatecreate) - Create email template
* [marketingEmailTemplateUpdate](#marketingemailtemplateupdate) - Update email template
* [marketingEmailTemplatesGet](#marketingemailtemplatesget) - Get email template
* [marketingEmailTemplatesList](#marketingemailtemplateslist) - List email templates
* [marketingOmniChannelTemplateCreate](#marketingomnichanneltemplatecreate) - Create omni-channel template
* [marketingOmniChannelTemplateUpdate](#marketingomnichanneltemplateupdate) - Update omni-channel template
* [marketingOmniChannelTemplatesGet](#marketingomnichanneltemplatesget) - Get omni-channel template
* [marketingOmniChannelTemplatesList](#marketingomnichanneltemplateslist) - List omni-channel templates
* [marketingPushTemplateCreate](#marketingpushtemplatecreate) - Create push template
* [marketingPushTemplateUpdate](#marketingpushtemplateupdate) - Update push template
* [marketingPushTemplatesGet](#marketingpushtemplatesget) - Get push template
* [marketingPushTemplatesList](#marketingpushtemplateslist) - List push templates

## marketingEmailTemplateCreate

Create email template

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { MessageTypeEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.templates.marketingEmailTemplateCreate({
    marketingCreateEmailTemplateRequestDto: {
      messages: [
        {
          messageContent: {
            body: "string",
            from: "string",
            subject: "string",
          },
          messageType: {
            sourceValue: "string",
            value: MessageTypeEnumValue.Sms,
          },
        },
      ],
      tags: [
        "string",
      ],
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.MarketingEmailTemplateCreateRequest](../../models/operations/marketingemailtemplatecreaterequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.MarketingEmailTemplateCreateResponse](../../models/operations/marketingemailtemplatecreateresponse.md)>**


## marketingEmailTemplateUpdate

Update email template

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { MessageTypeEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.templates.marketingEmailTemplateUpdate({
    marketingCreateEmailTemplateRequestDto: {
      messages: [
        {
          messageContent: {
            body: "string",
            from: "string",
            subject: "string",
          },
          messageType: {
            sourceValue: "string",
            value: MessageTypeEnumValue.AppPush,
          },
        },
      ],
      tags: [
        "string",
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

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.MarketingEmailTemplateUpdateRequest](../../models/operations/marketingemailtemplateupdaterequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.MarketingEmailTemplateUpdateResponse](../../models/operations/marketingemailtemplateupdateresponse.md)>**


## marketingEmailTemplatesGet

Get email template

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

  const res = await sdk.templates.marketingEmailTemplatesGet({
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.MarketingEmailTemplatesGetRequest](../../models/operations/marketingemailtemplatesgetrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.MarketingEmailTemplatesGetResponse](../../models/operations/marketingemailtemplatesgetresponse.md)>**


## marketingEmailTemplatesList

List email templates

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

  const res = await sdk.templates.marketingEmailTemplatesList({
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

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.MarketingEmailTemplatesListRequest](../../models/operations/marketingemailtemplateslistrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.MarketingEmailTemplatesListResponse](../../models/operations/marketingemailtemplateslistresponse.md)>**


## marketingOmniChannelTemplateCreate

Create omni-channel template

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { MessageMessageType } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.templates.marketingOmniChannelTemplateCreate({
    marketingCreateTemplateRequestDto: {
      messages: {
        id: "<ID>",
        messageContent: "string",
        messageType: MessageMessageType.Email,
        name: "string",
      },
      tags: [
        "string",
      ],
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.MarketingOmniChannelTemplateCreateRequest](../../models/operations/marketingomnichanneltemplatecreaterequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.MarketingOmniChannelTemplateCreateResponse](../../models/operations/marketingomnichanneltemplatecreateresponse.md)>**


## marketingOmniChannelTemplateUpdate

Update omni-channel template

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { MessageMessageType } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.templates.marketingOmniChannelTemplateUpdate({
    marketingCreateTemplateRequestDto: {
      messages: {
        id: "<ID>",
        messageContent: "string",
        messageType: MessageMessageType.UnmappedValue,
        name: "string",
      },
      tags: [
        "string",
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

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.MarketingOmniChannelTemplateUpdateRequest](../../models/operations/marketingomnichanneltemplateupdaterequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.MarketingOmniChannelTemplateUpdateResponse](../../models/operations/marketingomnichanneltemplateupdateresponse.md)>**


## marketingOmniChannelTemplatesGet

Get omni-channel template

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

  const res = await sdk.templates.marketingOmniChannelTemplatesGet({
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.MarketingOmniChannelTemplatesGetRequest](../../models/operations/marketingomnichanneltemplatesgetrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.MarketingOmniChannelTemplatesGetResponse](../../models/operations/marketingomnichanneltemplatesgetresponse.md)>**


## marketingOmniChannelTemplatesList

List omni-channel templates

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

  const res = await sdk.templates.marketingOmniChannelTemplatesList({
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

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.MarketingOmniChannelTemplatesListRequest](../../models/operations/marketingomnichanneltemplateslistrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.MarketingOmniChannelTemplatesListResponse](../../models/operations/marketingomnichanneltemplateslistresponse.md)>**


## marketingPushTemplateCreate

Create push template

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { MessageTypeEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.templates.marketingPushTemplateCreate({
    marketingCreatePushTemplateRequestDto: {
      messages: [
        {
          messageContent: {
            body: "string",
          },
          messageType: {
            sourceValue: "string",
            value: MessageTypeEnumValue.WebPush,
          },
        },
      ],
      tags: [
        "string",
      ],
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.MarketingPushTemplateCreateRequest](../../models/operations/marketingpushtemplatecreaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.MarketingPushTemplateCreateResponse](../../models/operations/marketingpushtemplatecreateresponse.md)>**


## marketingPushTemplateUpdate

Update push template

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { MessageTypeEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.templates.marketingPushTemplateUpdate({
    marketingCreatePushTemplateRequestDto: {
      messages: [
        {
          messageContent: {
            body: "string",
          },
          messageType: {
            sourceValue: "string",
            value: MessageTypeEnumValue.UnmappedValue,
          },
        },
      ],
      tags: [
        "string",
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

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.MarketingPushTemplateUpdateRequest](../../models/operations/marketingpushtemplateupdaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.MarketingPushTemplateUpdateResponse](../../models/operations/marketingpushtemplateupdateresponse.md)>**


## marketingPushTemplatesGet

Get push template

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

  const res = await sdk.templates.marketingPushTemplatesGet({
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
| `request`                                                                                                  | [operations.MarketingPushTemplatesGetRequest](../../models/operations/marketingpushtemplatesgetrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.MarketingPushTemplatesGetResponse](../../models/operations/marketingpushtemplatesgetresponse.md)>**


## marketingPushTemplatesList

List push templates

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

  const res = await sdk.templates.marketingPushTemplatesList({
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.MarketingPushTemplatesListRequest](../../models/operations/marketingpushtemplateslistrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.MarketingPushTemplatesListResponse](../../models/operations/marketingpushtemplateslistresponse.md)>**


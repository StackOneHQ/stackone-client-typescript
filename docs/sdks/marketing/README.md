# Marketing
(*marketing*)

### Available Operations

* [createEmailTemplate](#createemailtemplate) - Create email template
* [createOmniChannelTemplate](#createomnichanneltemplate) - Create omni-channel template
* [createPushTemplate](#createpushtemplate) - Create push template
* [getCampaign](#getcampaign) - Get campaign
* [getEmailTemplate](#getemailtemplate) - Get email template
* [getOmniChannelTemplate](#getomnichanneltemplate) - Get omni-channel template
* [getPushTemplate](#getpushtemplate) - Get push template
* [listCampaigns](#listcampaigns) - List campaigns
* [listEmailTemplates](#listemailtemplates) - List email templates
* [listOmniChannelTemplates](#listomnichanneltemplates) - List omni-channel templates
* [listPushTemplates](#listpushtemplates) - List push templates
* [updateEmailTemplate](#updateemailtemplate) - Update email template
* [updateOmniChannelTemplate](#updateomnichanneltemplate) - Update omni-channel template
* [updatePushTemplate](#updatepushtemplate) - Update push template

## createEmailTemplate

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

  const res = await sdk.marketing.createEmailTemplate({
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
| `request`                                                                                                        | [operations.MarketingCreateEmailTemplateRequest](../../models/operations/marketingcreateemailtemplaterequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.MarketingCreateEmailTemplateResponse](../../models/operations/marketingcreateemailtemplateresponse.md)>**


## createOmniChannelTemplate

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

  const res = await sdk.marketing.createOmniChannelTemplate({
    marketingCreateTemplateRequestDto: {
      messages: {
        id: "<ID>",
        messageContent: "string",
        messageType: MessageMessageType.Unknown,
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
| `request`                                                                                                                    | [operations.MarketingCreateOmniChannelTemplateRequest](../../models/operations/marketingcreateomnichanneltemplaterequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.MarketingCreateOmniChannelTemplateResponse](../../models/operations/marketingcreateomnichanneltemplateresponse.md)>**


## createPushTemplate

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

  const res = await sdk.marketing.createPushTemplate({
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
| `request`                                                                                                      | [operations.MarketingCreatePushTemplateRequest](../../models/operations/marketingcreatepushtemplaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.MarketingCreatePushTemplateResponse](../../models/operations/marketingcreatepushtemplateresponse.md)>**


## getCampaign

Get campaign

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

  const res = await sdk.marketing.getCampaign({
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
| `request`                                                                                        | [operations.MarketingGetCampaignRequest](../../models/operations/marketinggetcampaignrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.MarketingGetCampaignResponse](../../models/operations/marketinggetcampaignresponse.md)>**


## getEmailTemplate

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

  const res = await sdk.marketing.getEmailTemplate({
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
| `request`                                                                                                  | [operations.MarketingGetEmailTemplateRequest](../../models/operations/marketinggetemailtemplaterequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.MarketingGetEmailTemplateResponse](../../models/operations/marketinggetemailtemplateresponse.md)>**


## getOmniChannelTemplate

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

  const res = await sdk.marketing.getOmniChannelTemplate({
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

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.MarketingGetOmniChannelTemplateRequest](../../models/operations/marketinggetomnichanneltemplaterequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.MarketingGetOmniChannelTemplateResponse](../../models/operations/marketinggetomnichanneltemplateresponse.md)>**


## getPushTemplate

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

  const res = await sdk.marketing.getPushTemplate({
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

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.MarketingGetPushTemplateRequest](../../models/operations/marketinggetpushtemplaterequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.MarketingGetPushTemplateResponse](../../models/operations/marketinggetpushtemplateresponse.md)>**


## listCampaigns

List campaigns

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

  const res = await sdk.marketing.listCampaigns({
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
| `request`                                                                                            | [operations.MarketingListCampaignsRequest](../../models/operations/marketinglistcampaignsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.MarketingListCampaignsResponse](../../models/operations/marketinglistcampaignsresponse.md)>**


## listEmailTemplates

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

  const res = await sdk.marketing.listEmailTemplates({
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
| `request`                                                                                                      | [operations.MarketingListEmailTemplatesRequest](../../models/operations/marketinglistemailtemplatesrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.MarketingListEmailTemplatesResponse](../../models/operations/marketinglistemailtemplatesresponse.md)>**


## listOmniChannelTemplates

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

  const res = await sdk.marketing.listOmniChannelTemplates({
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
| `request`                                                                                                                  | [operations.MarketingListOmniChannelTemplatesRequest](../../models/operations/marketinglistomnichanneltemplatesrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.MarketingListOmniChannelTemplatesResponse](../../models/operations/marketinglistomnichanneltemplatesresponse.md)>**


## listPushTemplates

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

  const res = await sdk.marketing.listPushTemplates({
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
| `request`                                                                                                    | [operations.MarketingListPushTemplatesRequest](../../models/operations/marketinglistpushtemplatesrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.MarketingListPushTemplatesResponse](../../models/operations/marketinglistpushtemplatesresponse.md)>**


## updateEmailTemplate

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

  const res = await sdk.marketing.updateEmailTemplate({
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
            value: MessageTypeEnumValue.WebPush,
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
| `request`                                                                                                        | [operations.MarketingUpdateEmailTemplateRequest](../../models/operations/marketingupdateemailtemplaterequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.MarketingUpdateEmailTemplateResponse](../../models/operations/marketingupdateemailtemplateresponse.md)>**


## updateOmniChannelTemplate

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

  const res = await sdk.marketing.updateOmniChannelTemplate({
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
| `request`                                                                                                                    | [operations.MarketingUpdateOmniChannelTemplateRequest](../../models/operations/marketingupdateomnichanneltemplaterequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.MarketingUpdateOmniChannelTemplateResponse](../../models/operations/marketingupdateomnichanneltemplateresponse.md)>**


## updatePushTemplate

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

  const res = await sdk.marketing.updatePushTemplate({
    marketingCreatePushTemplateRequestDto: {
      messages: [
        {
          messageContent: {
            body: "string",
          },
          messageType: {
            sourceValue: "string",
            value: MessageTypeEnumValue.Unknown,
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
| `request`                                                                                                      | [operations.MarketingUpdatePushTemplateRequest](../../models/operations/marketingupdatepushtemplaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.MarketingUpdatePushTemplateResponse](../../models/operations/marketingupdatepushtemplateresponse.md)>**


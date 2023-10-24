# TimeOff
(*timeOff*)

### Available Operations

* [hrisTimeOffGet](#hristimeoffget) - Get time off request
* [hrisTimeOffList](#hristimeofflist) - List time off requests
* [timeOffCreate](#timeoffcreate) - Creates a time off request
* [timeOffUpdate](#timeoffupdate) - Update time off request

## hrisTimeOffGet

Get time off request

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

  const res = await sdk.timeOff.hrisTimeOffGet({
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
| `request`                                                                            | [operations.HrisTimeOffGetRequest](../../models/operations/hristimeoffgetrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.HrisTimeOffGetResponse](../../models/operations/hristimeoffgetresponse.md)>**


## hrisTimeOffList

List time off requests

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

  const res = await sdk.timeOff.hrisTimeOffList({
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
| `request`                                                                              | [operations.HrisTimeOffListRequest](../../models/operations/hristimeofflistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.HrisTimeOffListResponse](../../models/operations/hristimeofflistresponse.md)>**


## timeOffCreate

Creates a time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { TimeOffStatusEnumValue, TimeOffTypeEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.timeOff.timeOffCreate({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      status: {
        sourceValue: "string",
        value: TimeOffStatusEnumValue.Approved,
      },
      type: {
        sourceValue: "string",
        value: TimeOffTypeEnumValue.UnmappedValue,
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.TimeOffCreateRequest](../../models/operations/timeoffcreaterequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.TimeOffCreateResponse](../../models/operations/timeoffcreateresponse.md)>**


## timeOffUpdate

Update time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { TimeOffStatusEnumValue, TimeOffTypeEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.timeOff.timeOffUpdate({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      status: {
        sourceValue: "string",
        value: TimeOffStatusEnumValue.Approved,
      },
      type: {
        sourceValue: "string",
        value: TimeOffTypeEnumValue.UnmappedValue,
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.TimeOffUpdateRequest](../../models/operations/timeoffupdaterequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.TimeOffUpdateResponse](../../models/operations/timeoffupdateresponse.md)>**


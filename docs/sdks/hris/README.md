# Hris
(*hris*)

### Available Operations

* [createEmployee](#createemployee) - Creates an employee
* [createEmployeeTimeOffRequest](#createemployeetimeoffrequest) - Create Employee Time Off Request
* [createTimeOffRequest](#createtimeoffrequest) - Creates a time off request
* [getCompany](#getcompany) - Get Company
* [getEmployee](#getemployee) - Get Employee
* [getEmployeesTimeOffRequest](#getemployeestimeoffrequest) - Get Employees Time Off Request
* [getEmployment](#getemployment) - Get Employment
* [getLocation](#getlocation) - Get Location
* [getTimeOffRequest](#gettimeoffrequest) - Get time off request
* [listCompanies](#listcompanies) - List Companies
* [listEmployeeTimeOffRequests](#listemployeetimeoffrequests) - List Employee Time Off Requests
* [listEmployees](#listemployees) - List Employees
* [listEmployments](#listemployments) - List Employments
* [listLocations](#listlocations) - List locations
* [listTimeOffRequests](#listtimeoffrequests) - List time off requests
* [updateEmployee](#updateemployee) - Updates an employee
* [updateTimeOffRequest](#updatetimeoffrequest) - Update time off request

## createEmployee

Creates an employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  EmployeeCustomFieldsSchemasValue,
  EmploymentSchemasPayFrequencyValue,
  EmploymentSchemasPayPeriodValue,
  EmploymentSchemasValue,
  EmploymentValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoSchemasEthnicityValue,
  HrisCreateEmployeeRequestDtoSchemasGenderValue,
  HrisCreateEmployeeRequestDtoSchemasMaritalStatusValue,
  HrisCreateEmployeeRequestDtoSchemasValue,
  HrisCreateEmployeeRequestDtoValue,
  HrisLocationsCreateRequestDtoSchemasValue,
  HrisLocationsCreateRequestDtoValue,
} from "@stackone/stackone-client-ts/dist/sdk/models/shared";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.createEmployee({
    hrisCreateEmployeeRequestDto: {
      avatar: {},
      avatarUrl: "https://example.com/avatar.png",
      birthday: new Date("2021-01-01T00:00:00Z"),
      companyName: "Example Corp",
      customFields: [
        {
          description: "The completion status of the employee's training.",
          id: "custom_field_123",
          name: "Training Completion Status",
          options: [
            "Not Started",
            "In Progress",
            "Completed",
            "Overdue",
          ],
          type: {
            sourceValue: "string",
            value: EmployeeCustomFieldsSchemasValue.Integer,
          },
          value: {},
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00.000Z"),
      department: "Physics",
      displayName: "Sir Issac Newton",
      employmentContractType: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoValue.PartTime,
      },
      employmentStatus: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasValue.Pending,
      },
      employmentType: {
        sourceValue: "Permanent",
        value: HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue.Permanent,
      },
      employments: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
          employeeId: "1687-3",
          employmentContractType: {
            sourceValue: "string",
            value: EmploymentValue.UnmappedValue,
          },
          employmentType: {
            sourceValue: "Permanent",
            value: EmploymentSchemasValue.Permanent,
          },
          id: "123456",
          jobTitle: "Software Engineer",
          payCurrency: "USD",
          payFrequency: {
            sourceValue: "Hourly",
            value: EmploymentSchemasPayFrequencyValue.Hourly,
          },
          payPeriod: {
            sourceValue: "Hour",
            value: EmploymentSchemasPayPeriodValue.Hour,
          },
          payRate: "40.00",
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
      ],
      ethnicity: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasEthnicityValue.Other,
      },
      firstName: "Issac",
      gender: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasGenderValue.Female,
      },
      hireDate: new Date("2021-01-01T00:00.000Z"),
      homeLocation: {
        city: "Grantham",
        country: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoValue.Vg,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoSchemasValue.Tr73,
        },
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasMaritalStatusValue.Widowed,
      },
      name: "Issac Newton",
      personalEmail: "isaac.newton@example.com",
      personalPhoneNumber: "+1234567890",
      startDate: new Date("2021-01-01T00:00.000Z"),
      tenure: 2,
      terminationDate: new Date("2021-01-01T00:00:00Z"),
      workAnniversary: new Date("2021-01-01T00:00:00Z"),
      workEmail: "newton@example.com",
      workLocation: {
        city: "Grantham",
        country: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoValue.Gs,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoSchemasValue.Ug215,
        },
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      workPhoneNumber: "+1234567890",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.HrisCreateEmployeeRequest](../../sdk/models/operations/hriscreateemployeerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.HrisCreateEmployeeResponse](../../sdk/models/operations/hriscreateemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createEmployeeTimeOffRequest

Create Employee Time Off Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { TimeOffStatusEnumValue, TimeOffTypeEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.createEmployeeTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      status: {
        sourceValue: "string",
        value: TimeOffStatusEnumValue.UnmappedValue,
      },
      type: {
        sourceValue: "string",
        value: TimeOffTypeEnumValue.Vacation,
      },
    },
    id: "<ID>",
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.HrisCreateEmployeeTimeOffRequestRequest](../../sdk/models/operations/hriscreateemployeetimeoffrequestrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.HrisCreateEmployeeTimeOffRequestResponse](../../sdk/models/operations/hriscreateemployeetimeoffrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTimeOffRequest

Creates a time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { TimeOffStatusEnumValue, TimeOffTypeEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.createTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      status: {
        sourceValue: "string",
        value: TimeOffStatusEnumValue.UnmappedValue,
      },
      type: {
        sourceValue: "string",
        value: TimeOffTypeEnumValue.Vacation,
      },
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.HrisCreateTimeOffRequestRequest](../../sdk/models/operations/hriscreatetimeoffrequestrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.HrisCreateTimeOffRequestResponse](../../sdk/models/operations/hriscreatetimeoffrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getCompany

Get Company

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.getCompany({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.HrisGetCompanyRequest](../../sdk/models/operations/hrisgetcompanyrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.HrisGetCompanyResponse](../../sdk/models/operations/hrisgetcompanyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getEmployee

Get Employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.getEmployee({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.HrisGetEmployeeRequest](../../sdk/models/operations/hrisgetemployeerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisGetEmployeeResponse](../../sdk/models/operations/hrisgetemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getEmployeesTimeOffRequest

Get Employees Time Off Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.getEmployeesTimeOffRequest({
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
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.HrisGetEmployeesTimeOffRequestRequest](../../sdk/models/operations/hrisgetemployeestimeoffrequestrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.HrisGetEmployeesTimeOffRequestResponse](../../sdk/models/operations/hrisgetemployeestimeoffrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getEmployment

Get Employment

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.getEmployment({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.HrisGetEmploymentRequest](../../sdk/models/operations/hrisgetemploymentrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.HrisGetEmploymentResponse](../../sdk/models/operations/hrisgetemploymentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

  const res = await sdk.hris.getLocation({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.HrisGetLocationRequest](../../sdk/models/operations/hrisgetlocationrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisGetLocationResponse](../../sdk/models/operations/hrisgetlocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTimeOffRequest

Get time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.getTimeOffRequest({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.HrisGetTimeOffRequestRequest](../../sdk/models/operations/hrisgettimeoffrequestrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.HrisGetTimeOffRequestResponse](../../sdk/models/operations/hrisgettimeoffrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listCompanies

List Companies

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.listCompanies({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.HrisListCompaniesRequest](../../sdk/models/operations/hrislistcompaniesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.HrisListCompaniesResponse](../../sdk/models/operations/hrislistcompaniesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listEmployeeTimeOffRequests

List Employee Time Off Requests

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.listEmployeeTimeOffRequests({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.HrisListEmployeeTimeOffRequestsRequest](../../sdk/models/operations/hrislistemployeetimeoffrequestsrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.HrisListEmployeeTimeOffRequestsResponse](../../sdk/models/operations/hrislistemployeetimeoffrequestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listEmployees

List Employees

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.listEmployees({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.HrisListEmployeesRequest](../../sdk/models/operations/hrislistemployeesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.HrisListEmployeesResponse](../../sdk/models/operations/hrislistemployeesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listEmployments

List Employments

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.listEmployments({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.HrisListEmploymentsRequest](../../sdk/models/operations/hrislistemploymentsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.HrisListEmploymentsResponse](../../sdk/models/operations/hrislistemploymentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

  const res = await sdk.hris.listLocations({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.HrisListLocationsRequest](../../sdk/models/operations/hrislistlocationsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.HrisListLocationsResponse](../../sdk/models/operations/hrislistlocationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTimeOffRequests

List time off requests

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.listTimeOffRequests({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.HrisListTimeOffRequestsRequest](../../sdk/models/operations/hrislisttimeoffrequestsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.HrisListTimeOffRequestsResponse](../../sdk/models/operations/hrislisttimeoffrequestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateEmployee

Updates an employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  EmployeeCustomFieldsSchemasValue,
  EmploymentSchemasPayFrequencyValue,
  EmploymentSchemasPayPeriodValue,
  EmploymentSchemasValue,
  EmploymentValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoSchemasEthnicityValue,
  HrisCreateEmployeeRequestDtoSchemasGenderValue,
  HrisCreateEmployeeRequestDtoSchemasMaritalStatusValue,
  HrisCreateEmployeeRequestDtoSchemasValue,
  HrisCreateEmployeeRequestDtoValue,
  HrisLocationsCreateRequestDtoSchemasValue,
  HrisLocationsCreateRequestDtoValue,
} from "@stackone/stackone-client-ts/dist/sdk/models/shared";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.updateEmployee({
    hrisCreateEmployeeRequestDto: {
      avatar: {},
      avatarUrl: "https://example.com/avatar.png",
      birthday: new Date("2021-01-01T00:00:00Z"),
      companyName: "Example Corp",
      customFields: [
        {
          description: "The completion status of the employee's training.",
          id: "custom_field_123",
          name: "Training Completion Status",
          options: [
            "Not Started",
            "In Progress",
            "Completed",
            "Overdue",
          ],
          type: {
            sourceValue: "string",
            value: EmployeeCustomFieldsSchemasValue.Float,
          },
          value: {},
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00.000Z"),
      department: "Physics",
      displayName: "Sir Issac Newton",
      employmentContractType: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoValue.PartTime,
      },
      employmentStatus: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasValue.Leave,
      },
      employmentType: {
        sourceValue: "Permanent",
        value: HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue.Permanent,
      },
      employments: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
          employeeId: "1687-3",
          employmentContractType: {
            sourceValue: "string",
            value: EmploymentValue.UnmappedValue,
          },
          employmentType: {
            sourceValue: "Permanent",
            value: EmploymentSchemasValue.Permanent,
          },
          id: "123456",
          jobTitle: "Software Engineer",
          payCurrency: "USD",
          payFrequency: {
            sourceValue: "Hourly",
            value: EmploymentSchemasPayFrequencyValue.Hourly,
          },
          payPeriod: {
            sourceValue: "Hour",
            value: EmploymentSchemasPayPeriodValue.Hour,
          },
          payRate: "40.00",
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
      ],
      ethnicity: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasEthnicityValue.BlackOrAfricanAmerican,
      },
      firstName: "Issac",
      gender: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasGenderValue.Male,
      },
      hireDate: new Date("2021-01-01T00:00.000Z"),
      homeLocation: {
        city: "Grantham",
        country: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoValue.Ba,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoSchemasValue.PhSun,
        },
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasMaritalStatusValue.Separated,
      },
      name: "Issac Newton",
      personalEmail: "isaac.newton@example.com",
      personalPhoneNumber: "+1234567890",
      startDate: new Date("2021-01-01T00:00.000Z"),
      tenure: 2,
      terminationDate: new Date("2021-01-01T00:00:00Z"),
      workAnniversary: new Date("2021-01-01T00:00:00Z"),
      workEmail: "newton@example.com",
      workLocation: {
        city: "Grantham",
        country: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoValue.Np,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoSchemasValue.LsG,
        },
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      workPhoneNumber: "+1234567890",
    },
    id: "<ID>",
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.HrisUpdateEmployeeRequest](../../sdk/models/operations/hrisupdateemployeerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.HrisUpdateEmployeeResponse](../../sdk/models/operations/hrisupdateemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTimeOffRequest

Update time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { TimeOffStatusEnumValue, TimeOffTypeEnumValue } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "<YOUR_PASSWORD_HERE>",
    },
  });

  const res = await sdk.hris.updateTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      status: {
        sourceValue: "string",
        value: TimeOffStatusEnumValue.Approved,
      },
      type: {
        sourceValue: "string",
        value: TimeOffTypeEnumValue.Vacation,
      },
    },
    id: "<ID>",
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.HrisUpdateTimeOffRequestRequest](../../sdk/models/operations/hrisupdatetimeoffrequestrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.HrisUpdateTimeOffRequestResponse](../../sdk/models/operations/hrisupdatetimeoffrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

# Hris
(*.hris*)

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

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.hris.createEmployee({
    hrisCreateEmployeeRequestDto: {
      avatar: {},
      avatarUrl: "https://example.com/avatar.png",
      birthday: "2023-06-14T00:00:00Z",
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
      dateOfBirth: "1990-01-01",
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
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue.Internal,
      },
      employments: [
        {
          createdAt: "2023-06-14T01:00:00Z",
          effectiveDate: new Date("2023-07-01"),
          employeeId: "1687-3",
          employmentContractType: {
            sourceValue: "string",
            value: EmploymentValue.UnmappedValue,
          },
          employmentType: {
            sourceValue: "string",
            value: EmploymentSchemasValue.Contractor,
          },
          id: "123456",
          jobTitle: "Software Engineer",
          payCurrency: "USD",
          payFrequency: {
            sourceValue: "string",
            value: EmploymentSchemasPayFrequencyValue.HalfYearly,
          },
          payPeriod: {
            sourceValue: "string",
            value: EmploymentSchemasPayPeriodValue.Year,
          },
          payRate: "40.00",
          updatedAt: "2023-06-14T01:00:00Z",
        },
      ],
      ethnicity: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasEthnicityValue.AmericanIndianOrAlaskaNative,
      },
      firstName: "Issac",
      gender: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasGenderValue.Diverse,
      },
      hireDate: "2022-01-01",
      homeLocation: {
        city: "Grantham",
        country: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoValue.Gb,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoSchemasValue.AoHua,
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
        value: HrisCreateEmployeeRequestDtoSchemasMaritalStatusValue.Single,
      },
      name: "Issac Newton",
      personalEmail: "isaac.newton@example.com",
      personalPhoneNumber: "+1234567890",
      startDate: "2022-01-01",
      tenure: "2",
      terminationDate: "2023-06-14T00:00:00Z",
      workAnniversary: "2022-06-14T00:00:00Z",
      workEmail: "newton@example.com",
      workLocation: {
        city: "Grantham",
        country: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoValue.Bg,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoSchemasValue.Mm14,
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
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.HrisCreateEmployeeRequest](../../models/operations/hriscreateemployeerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.HrisCreateEmployeeResponse](../../models/operations/hriscreateemployeeresponse.md)>**


## createEmployeeTimeOffRequest

Create Employee Time Off Request

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

  const res = await sdk.hris.createEmployeeTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
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
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.HrisCreateEmployeeTimeOffRequestRequest](../../models/operations/hriscreateemployeetimeoffrequestrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.HrisCreateEmployeeTimeOffRequestResponse](../../models/operations/hriscreateemployeetimeoffrequestresponse.md)>**


## createTimeOffRequest

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

  const res = await sdk.hris.createTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
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
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.HrisCreateTimeOffRequestRequest](../../models/operations/hriscreatetimeoffrequestrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.HrisCreateTimeOffRequestResponse](../../models/operations/hriscreatetimeoffrequestresponse.md)>**


## getCompany

Get Company

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
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.HrisGetCompanyRequest](../../models/operations/hrisgetcompanyrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.HrisGetCompanyResponse](../../models/operations/hrisgetcompanyresponse.md)>**


## getEmployee

Get Employee

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
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.HrisGetEmployeeRequest](../../models/operations/hrisgetemployeerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.HrisGetEmployeeResponse](../../models/operations/hrisgetemployeeresponse.md)>**


## getEmployeesTimeOffRequest

Get Employees Time Off Request

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
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.HrisGetEmployeesTimeOffRequestRequest](../../models/operations/hrisgetemployeestimeoffrequestrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.HrisGetEmployeesTimeOffRequestResponse](../../models/operations/hrisgetemployeestimeoffrequestresponse.md)>**


## getEmployment

Get Employment

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
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.HrisGetEmploymentRequest](../../models/operations/hrisgetemploymentrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisGetEmploymentResponse](../../models/operations/hrisgetemploymentresponse.md)>**


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
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.HrisGetLocationRequest](../../models/operations/hrisgetlocationrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.HrisGetLocationResponse](../../models/operations/hrisgetlocationresponse.md)>**


## getTimeOffRequest

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
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.HrisGetTimeOffRequestRequest](../../models/operations/hrisgettimeoffrequestrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.HrisGetTimeOffRequestResponse](../../models/operations/hrisgettimeoffrequestresponse.md)>**


## listCompanies

List Companies

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

  const res = await sdk.hris.listCompanies({
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
| `request`                                                                                  | [operations.HrisListCompaniesRequest](../../models/operations/hrislistcompaniesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisListCompaniesResponse](../../models/operations/hrislistcompaniesresponse.md)>**


## listEmployeeTimeOffRequests

List Employee Time Off Requests

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
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.HrisListEmployeeTimeOffRequestsRequest](../../models/operations/hrislistemployeetimeoffrequestsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.HrisListEmployeeTimeOffRequestsResponse](../../models/operations/hrislistemployeetimeoffrequestsresponse.md)>**


## listEmployees

List Employees

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

  const res = await sdk.hris.listEmployees({
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
| `request`                                                                                  | [operations.HrisListEmployeesRequest](../../models/operations/hrislistemployeesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisListEmployeesResponse](../../models/operations/hrislistemployeesresponse.md)>**


## listEmployments

List Employments

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

  const res = await sdk.hris.listEmployments({
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
| `request`                                                                                      | [operations.HrisListEmploymentsRequest](../../models/operations/hrislistemploymentsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.HrisListEmploymentsResponse](../../models/operations/hrislistemploymentsresponse.md)>**


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

  const res = await sdk.hris.listLocations({
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
| `request`                                                                                  | [operations.HrisListLocationsRequest](../../models/operations/hrislistlocationsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisListLocationsResponse](../../models/operations/hrislistlocationsresponse.md)>**


## listTimeOffRequests

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

  const res = await sdk.hris.listTimeOffRequests({
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.HrisListTimeOffRequestsRequest](../../models/operations/hrislisttimeoffrequestsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.HrisListTimeOffRequestsResponse](../../models/operations/hrislisttimeoffrequestsresponse.md)>**


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

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.hris.updateEmployee({
    hrisCreateEmployeeRequestDto: {
      avatar: {},
      avatarUrl: "https://example.com/avatar.png",
      birthday: "2023-06-14T00:00:00Z",
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
      dateOfBirth: "1990-01-01",
      department: "Physics",
      displayName: "Sir Issac Newton",
      employmentContractType: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoValue.PartTime,
      },
      employmentStatus: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasValue.Terminated,
      },
      employmentType: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue.EmployerOfRecord,
      },
      employments: [
        {
          createdAt: "2023-06-14T01:00:00Z",
          effectiveDate: new Date("2023-07-01"),
          employeeId: "1687-3",
          employmentContractType: {
            sourceValue: "string",
            value: EmploymentValue.FullTime,
          },
          employmentType: {
            sourceValue: "string",
            value: EmploymentSchemasValue.PartTime,
          },
          id: "123456",
          jobTitle: "Software Engineer",
          payCurrency: "USD",
          payFrequency: {
            sourceValue: "string",
            value: EmploymentSchemasPayFrequencyValue.Weekly,
          },
          payPeriod: {
            sourceValue: "string",
            value: EmploymentSchemasPayPeriodValue.Quarter,
          },
          payRate: "40.00",
          updatedAt: "2023-06-14T01:00:00Z",
        },
      ],
      ethnicity: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasEthnicityValue.TwoOrMoreRaces,
      },
      firstName: "Issac",
      gender: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoSchemasGenderValue.NotDisclosed,
      },
      hireDate: "2022-01-01",
      homeLocation: {
        city: "Grantham",
        country: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoValue.Ki,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoSchemasValue.IeKe,
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
        value: HrisCreateEmployeeRequestDtoSchemasMaritalStatusValue.DomesticPartnership,
      },
      name: "Issac Newton",
      personalEmail: "isaac.newton@example.com",
      personalPhoneNumber: "+1234567890",
      startDate: "2022-01-01",
      tenure: "2",
      terminationDate: "2023-06-14T00:00:00Z",
      workAnniversary: "2022-06-14T00:00:00Z",
      workEmail: "newton@example.com",
      workLocation: {
        city: "Grantham",
        country: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoValue.It,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoSchemasValue.AoMox,
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
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.HrisUpdateEmployeeRequest](../../models/operations/hrisupdateemployeerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.HrisUpdateEmployeeResponse](../../models/operations/hrisupdateemployeeresponse.md)>**


## updateTimeOffRequest

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

  const res = await sdk.hris.updateTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
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
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.HrisUpdateTimeOffRequestRequest](../../models/operations/hrisupdatetimeoffrequestrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.HrisUpdateTimeOffRequestResponse](../../models/operations/hrisupdatetimeoffrequestresponse.md)>**


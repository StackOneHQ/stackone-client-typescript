# Employees
(*employees*)

### Available Operations

* [employeeCreate](#employeecreate) - Creates an employee
* [employeeTimeOffCreate](#employeetimeoffcreate) - Create Employee Time Off Request
* [employeeTimeOffList](#employeetimeofflist) - List Employee Time Off Requests
* [employeeUpdate](#employeeupdate) - Updates an employee
* [employeesTimeOffGet](#employeestimeoffget) - Get Employees Time Off Request
* [hrisEmployeesGet](#hrisemployeesget) - Get Employee
* [hrisEmployeesList](#hrisemployeeslist) - List Employees

## employeeCreate

Creates an employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  EmployeeCustomFieldsTypeValue,
  EmploymentEmploymentContractTypeValue,
  EmploymentEmploymentTypeValue,
  EmploymentPayFrequencyValue,
  EmploymentPayPeriodValue,
  HrisCreateEmployeeRequestDtoEmploymentContractTypeValue,
  HrisCreateEmployeeRequestDtoEmploymentStatusValue,
  HrisCreateEmployeeRequestDtoEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoEthnicityValue,
  HrisCreateEmployeeRequestDtoGenderValue,
  HrisCreateEmployeeRequestDtoMaritalStatusValue,
  HrisLocationsCreateRequestDtoCountryValue,
  HrisLocationsCreateRequestDtoStateValue,
} from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.employees.employeeCreate({
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
            value: EmployeeCustomFieldsTypeValue.Text,
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
        value: HrisCreateEmployeeRequestDtoEmploymentContractTypeValue.FullTime,
      },
      employmentStatus: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoEmploymentStatusValue.Leave,
      },
      employmentType: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoEmploymentTypeValue.Probation,
      },
      employments: [
        {
          createdAt: "2023-06-14T01:00:00Z",
          effectiveDate: new Date("2023-07-01"),
          employeeId: "1687-3",
          employmentContractType: {
            sourceValue: "string",
            value: EmploymentEmploymentContractTypeValue.UnmappedValue,
          },
          employmentType: {
            sourceValue: "string",
            value: EmploymentEmploymentTypeValue.Contractor,
          },
          id: "123456",
          jobTitle: "Software Engineer",
          payCurrency: "USD",
          payFrequency: {
            sourceValue: "string",
            value: EmploymentPayFrequencyValue.Quarterly,
          },
          payPeriod: {
            sourceValue: "string",
            value: EmploymentPayPeriodValue.Week,
          },
          payRate: "40.00",
          updatedAt: "2023-06-14T01:00:00Z",
        },
      ],
      ethnicity: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoEthnicityValue.BlackOrAfricanAmerican,
      },
      firstName: "Issac",
      gender: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoGenderValue.UnmappedValue,
      },
      hireDate: "2022-01-01",
      homeLocation: {
        city: "Grantham",
        country: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoCountryValue.Mk,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoStateValue.PgWpd,
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
        value: HrisCreateEmployeeRequestDtoMaritalStatusValue.Separated,
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
          value: HrisLocationsCreateRequestDtoCountryValue.Af,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoStateValue.GbMea,
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.EmployeeCreateRequest](../../models/operations/employeecreaterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.EmployeeCreateResponse](../../models/operations/employeecreateresponse.md)>**


## employeeTimeOffCreate

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

  const res = await sdk.employees.employeeTimeOffCreate({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      status: {
        sourceValue: "string",
        value: TimeOffStatusEnumValue.Approved,
      },
      type: {
        sourceValue: "string",
        value: TimeOffTypeEnumValue.Sick,
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.EmployeeTimeOffCreateRequest](../../models/operations/employeetimeoffcreaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.EmployeeTimeOffCreateResponse](../../models/operations/employeetimeoffcreateresponse.md)>**


## employeeTimeOffList

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

  const res = await sdk.employees.employeeTimeOffList({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.EmployeeTimeOffListRequest](../../models/operations/employeetimeofflistrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.EmployeeTimeOffListResponse](../../models/operations/employeetimeofflistresponse.md)>**


## employeeUpdate

Updates an employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  EmployeeCustomFieldsTypeValue,
  EmploymentEmploymentContractTypeValue,
  EmploymentEmploymentTypeValue,
  EmploymentPayFrequencyValue,
  EmploymentPayPeriodValue,
  HrisCreateEmployeeRequestDtoEmploymentContractTypeValue,
  HrisCreateEmployeeRequestDtoEmploymentStatusValue,
  HrisCreateEmployeeRequestDtoEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoEthnicityValue,
  HrisCreateEmployeeRequestDtoGenderValue,
  HrisCreateEmployeeRequestDtoMaritalStatusValue,
  HrisLocationsCreateRequestDtoCountryValue,
  HrisLocationsCreateRequestDtoStateValue,
} from "@stackone/stackone-client-ts/dist/sdk/models/shared";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.employees.employeeUpdate({
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
            value: EmployeeCustomFieldsTypeValue.UnmappedValue,
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
        value: HrisCreateEmployeeRequestDtoEmploymentContractTypeValue.Shifts,
      },
      employmentStatus: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoEmploymentStatusValue.Active,
      },
      employmentType: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoEmploymentTypeValue.Seasonal,
      },
      employments: [
        {
          createdAt: "2023-06-14T01:00:00Z",
          effectiveDate: new Date("2023-07-01"),
          employeeId: "1687-3",
          employmentContractType: {
            sourceValue: "string",
            value: EmploymentEmploymentContractTypeValue.Shifts,
          },
          employmentType: {
            sourceValue: "string",
            value: EmploymentEmploymentTypeValue.Internal,
          },
          id: "123456",
          jobTitle: "Software Engineer",
          payCurrency: "USD",
          payFrequency: {
            sourceValue: "string",
            value: EmploymentPayFrequencyValue.UnmappedValue,
          },
          payPeriod: {
            sourceValue: "string",
            value: EmploymentPayPeriodValue.EverySixMonths,
          },
          payRate: "40.00",
          updatedAt: "2023-06-14T01:00:00Z",
        },
      ],
      ethnicity: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoEthnicityValue.UnmappedValue,
      },
      firstName: "Issac",
      gender: {
        sourceValue: "string",
        value: HrisCreateEmployeeRequestDtoGenderValue.Female,
      },
      hireDate: "2022-01-01",
      homeLocation: {
        city: "Grantham",
        country: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoCountryValue.Ls,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoStateValue.BfSor,
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
        value: HrisCreateEmployeeRequestDtoMaritalStatusValue.Married,
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
          value: HrisLocationsCreateRequestDtoCountryValue.Nf,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {
          sourceValue: "string",
          value: HrisLocationsCreateRequestDtoStateValue.GbEdu,
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.EmployeeUpdateRequest](../../models/operations/employeeupdaterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.EmployeeUpdateResponse](../../models/operations/employeeupdateresponse.md)>**


## employeesTimeOffGet

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

  const res = await sdk.employees.employeesTimeOffGet({
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
| `request`                                                                                      | [operations.EmployeesTimeOffGetRequest](../../models/operations/employeestimeoffgetrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.EmployeesTimeOffGetResponse](../../models/operations/employeestimeoffgetresponse.md)>**


## hrisEmployeesGet

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

  const res = await sdk.employees.hrisEmployeesGet({
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
| `request`                                                                                | [operations.HrisEmployeesGetRequest](../../models/operations/hrisemployeesgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.HrisEmployeesGetResponse](../../models/operations/hrisemployeesgetresponse.md)>**


## hrisEmployeesList

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

  const res = await sdk.employees.hrisEmployeesList({
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
| `request`                                                                                  | [operations.HrisEmployeesListRequest](../../models/operations/hrisemployeeslistrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.HrisEmployeesListResponse](../../models/operations/hrisemployeeslistresponse.md)>**


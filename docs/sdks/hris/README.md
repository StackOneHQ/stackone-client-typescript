# Hris
(*hris*)

### Available Operations

* [createEmployee](#createemployee) - Creates an employee
* [createEmployeeTimeOffRequest](#createemployeetimeoffrequest) - Create Employee Time Off Request
* [createEmployeeWorkEligibilityRequest](#createemployeeworkeligibilityrequest) - Create Employee Work Eligibility Request
* [createTimeOffRequest](#createtimeoffrequest) - Creates a time off request
* [downloadEmployeeDocument](#downloademployeedocument) - Download Employee Document
* [getBenefit](#getbenefit) - Get Benefit
* [getCompany](#getcompany) - Get Company
* [getEmployee](#getemployee) - Get Employee
* [getEmployeeDocument](#getemployeedocument) - Get Employee Document
* [getEmployeesTimeOffRequest](#getemployeestimeoffrequest) - Get Employees Time Off Request
* [getEmployeesWorkEligibility](#getemployeesworkeligibility) - Get Employees Work Eligibility
* [getEmployment](#getemployment) - Get Employment
* [getGroup](#getgroup) - Get Group
* [getLocation](#getlocation) - Get Location
* [getTimeOffRequest](#gettimeoffrequest) - Get time off request
* [listBenefits](#listbenefits) - List benefits
* [listCompanies](#listcompanies) - List Companies
* [listEmployeeDocuments](#listemployeedocuments) - List Employee Documents
* [listEmployeeTimeOffRequests](#listemployeetimeoffrequests) - List Employee Time Off Requests
* [listEmployeeWorkEligibility](#listemployeeworkeligibility) - List Employee Work Eligibility
* [listEmployees](#listemployees) - List Employees
* [listEmployments](#listemployments) - List Employments
* [listGroups](#listgroups) - List Groups
* [listLocations](#listlocations) - List locations
* [listTimeOffRequests](#listtimeoffrequests) - List time off requests
* [updateEmployee](#updateemployee) - Updates an employee
* [updateEmployeeWorkEligibilityRequest](#updateemployeeworkeligibilityrequest) - Update Employee Work Eligibility Request
* [updateTimeOffRequest](#updatetimeoffrequest) - Update time off request
* [uploadEmployeeDocument](#uploademployeedocument) - Upload Employee Document

## createEmployee

Creates an employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  CountryCodeEnumValue,
  EmploymentSchemasPayFrequencyValue,
  EmploymentSchemasPayPeriodValue,
  EmploymentSchemasValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.createEmployee({
    hrisCreateEmployeeRequestDto: {
      avatar: {},
      avatarUrl: "https://example.com/avatar.png",
      benefits: [
        {
          createdAt: new Date("2021-01-01T00:00:00Z"),
          description: "Health insurance for employees",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Health Insurance",
          provider: "Aetna",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          updatedAt: new Date("2021-01-01T00:00:00Z"),
        },
      ],
      birthday: new Date("2021-01-01T00:00:00Z"),
      citizenships: [
        {
          value: CountryCodeEnumValue.Us,
        },
      ],
      companyName: "Example Corp",
      customFields: [
        {
          description: "The completion status of the employee's training.",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          options: [
            "Not Started",
            "In Progress",
            "Completed",
            "Overdue",
          ],
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          type: {},
        value: "Completed",
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00.000Z"),
      department: "Physics",
      displayName: "Sir Issac Newton",
      employmentContractType: {},
      employmentStatus: {},
      employmentType: {
      sourceValue: "Permanent",
        value: HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue.Permanent,
      },
      employments: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
          employeeId: "1687-3",
          employmentContractType: {},
          employmentType: {
          sourceValue: "Permanent",
            value: EmploymentSchemasValue.Permanent,
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
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
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
      ],
      ethnicity: {},
      firstName: "Issac",
      gender: {},
      hireDate: new Date("2021-01-01T00:00.000Z"),
      homeLocation: {
        city: "Grantham",
        country: {
          value: HrisCreateEmployeeRequestDtoSchemasHomeLocationValue.Us,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {},
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {},
      name: "Issac Newton",
      personalEmail: "isaac.newton@example.com",
      personalPhoneNumber: "+1234567890",
      preferredLanguage: {
        value: HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue.Eng,
      },
      startDate: new Date("2021-01-01T00:00.000Z"),
      tenure: 2,
      terminationDate: new Date("2021-01-01T00:00:00Z"),
      workAnniversary: new Date("2021-01-01T00:00:00Z"),
      workEmail: "newton@example.com",
      workLocation: {
        city: "Grantham",
        country: {
          value: HrisCreateEmployeeRequestDtoSchemasWorkLocationValue.Us,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {},
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      workPhoneNumber: "+1234567890",
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
| `request`                                                                                                                                                                      | [operations.HrisCreateEmployeeRequest](../../sdk/models/operations/hriscreateemployeerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisCreateEmployeeResponse](../../sdk/models/operations/hriscreateemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createEmployeeTimeOffRequest

Create Employee Time Off Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.createEmployeeTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      startDate: new Date("2021-01-01T01:01:01.000Z"),
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
| `request`                                                                                                                                                                      | [operations.HrisCreateEmployeeTimeOffRequestRequest](../../sdk/models/operations/hriscreateemployeetimeoffrequestrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisCreateEmployeeTimeOffRequestResponse](../../sdk/models/operations/hriscreateemployeetimeoffrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createEmployeeWorkEligibilityRequest

Create Employee Work Eligibility Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ContentValue, HrisCreateWorkEligibilityRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.createEmployeeWorkEligibilityRequest({
    hrisCreateWorkEligibilityRequestDto: {
      document: {
        category: "templates, forms, backups, etc.",
        contents: [
          {
            fileFormat: {
            sourceValue: "abc",
              value: ContentValue.Pdf,
            },
            unifiedUrl: "https://api.stackone.com/unified/hris/employees/12345/documents/67890/download",
            url: "https://example.com/file.pdf",
          },
        ],
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "My Document",
        path: "/path/to/file",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        updatedAt: new Date("2021-01-02T01:01:01.000Z"),
      },
      issuedBy: {
        value: HrisCreateWorkEligibilityRequestDtoValue.Us,
      },
      number: "1234567890",
      subType: "H1B",
      type: {},
      validFrom: new Date("2021-01-01T00:00.000Z"),
      validTo: new Date("2021-01-01T00:00.000Z"),
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
| `request`                                                                                                                                                                      | [operations.HrisCreateEmployeeWorkEligibilityRequestRequest](../../sdk/models/operations/hriscreateemployeeworkeligibilityrequestrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisCreateEmployeeWorkEligibilityRequestResponse](../../sdk/models/operations/hriscreateemployeeworkeligibilityrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createTimeOffRequest

Creates a time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.createTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      startDate: new Date("2021-01-01T01:01:01.000Z"),
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
| `request`                                                                                                                                                                      | [operations.HrisCreateTimeOffRequestRequest](../../sdk/models/operations/hriscreatetimeoffrequestrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisCreateTimeOffRequestResponse](../../sdk/models/operations/hriscreatetimeoffrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## downloadEmployeeDocument

Download Employee Document

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.downloadEmployeeDocument({
    format: "base64",
    id: "<id>",
    subResourceId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.HrisDownloadEmployeeDocumentRequest](../../sdk/models/operations/hrisdownloademployeedocumentrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisDownloadEmployeeDocumentResponse](../../sdk/models/operations/hrisdownloademployeedocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getBenefit

Get Benefit

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.getBenefit({
    fields: "id,name,benefit_type,provider,description,created_at,updated_at",
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
| `request`                                                                                                                                                                      | [operations.HrisGetBenefitRequest](../../sdk/models/operations/hrisgetbenefitrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisGetBenefitResponse](../../sdk/models/operations/hrisgetbenefitresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCompany

Get Company

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.getCompany({
    fields: "id,name,full_name,display_name,created_at,updated_at",
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
| `request`                                                                                                                                                                      | [operations.HrisGetCompanyRequest](../../sdk/models/operations/hrisgetcompanyrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisGetCompanyResponse](../../sdk/models/operations/hrisgetcompanyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getEmployee

Get Employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployee({
    expand: "company,employments,work_location,home_location,custom_fields,groups",
    fields: "id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_title,job_description,department,cost_centers,benefits,manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,employee_number",
    id: "<id>",
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
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
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeeRequest](../../sdk/models/operations/hrisgetemployeerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisGetEmployeeResponse](../../sdk/models/operations/hrisgetemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getEmployeeDocument

Get Employee Document

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeeDocument({
    fields: "id,name,path,type,contents,created_at,updated_at",
    id: "<id>",
    subResourceId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeeDocumentRequest](../../sdk/models/operations/hrisgetemployeedocumentrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisGetEmployeeDocumentResponse](../../sdk/models/operations/hrisgetemployeedocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getEmployeesTimeOffRequest

Get Employees Time Off Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeesTimeOffRequest({
    fields: "id,employee_id,approver_id,status,type,start_date,end_date,created_at,updated_at",
    id: "<id>",
    subResourceId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeesTimeOffRequestRequest](../../sdk/models/operations/hrisgetemployeestimeoffrequestrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisGetEmployeesTimeOffRequestResponse](../../sdk/models/operations/hrisgetemployeestimeoffrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getEmployeesWorkEligibility

Get Employees Work Eligibility

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeesWorkEligibility({
    fields: "id,type,sub_type,document,valid_from,valid_to,issued_by,number",
    id: "<id>",
    subResourceId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeesWorkEligibilityRequest](../../sdk/models/operations/hrisgetemployeesworkeligibilityrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisGetEmployeesWorkEligibilityResponse](../../sdk/models/operations/hrisgetemployeesworkeligibilityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getEmployment

Get Employment

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployment({
    fields: "id,employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,employment_type,employment_contract_type,created_at,updated_at",
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
| `request`                                                                                                                                                                      | [operations.HrisGetEmploymentRequest](../../sdk/models/operations/hrisgetemploymentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisGetEmploymentResponse](../../sdk/models/operations/hrisgetemploymentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getGroup

Get Group

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.getGroup({
    fields: "id,name,type,parent_ids",
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
| `request`                                                                                                                                                                      | [operations.HrisGetGroupRequest](../../sdk/models/operations/hrisgetgrouprequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisGetGroupResponse](../../sdk/models/operations/hrisgetgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getLocation

Get Location

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.getLocation({
    fields: "id,employee_id,name,phone_number,street_1,street_2,city,state,zip_code,country,location_type,created_at,updated_at",
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
| `request`                                                                                                                                                                      | [operations.HrisGetLocationRequest](../../sdk/models/operations/hrisgetlocationrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisGetLocationResponse](../../sdk/models/operations/hrisgetlocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getTimeOffRequest

Get time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.getTimeOffRequest({
    fields: "id,employee_id,approver_id,status,type,start_date,end_date,created_at,updated_at",
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
| `request`                                                                                                                                                                      | [operations.HrisGetTimeOffRequestRequest](../../sdk/models/operations/hrisgettimeoffrequestrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisGetTimeOffRequestResponse](../../sdk/models/operations/hrisgettimeoffrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listBenefits

List benefits

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.listBenefits({
    fields: "id,name,benefit_type,provider,description,created_at,updated_at",
    filterUpdatedAfter: "2020-01-01T00:00:00.000Z",
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
| `request`                                                                                                                                                                      | [operations.HrisListBenefitsRequest](../../sdk/models/operations/hrislistbenefitsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisListBenefitsResponse](../../sdk/models/operations/hrislistbenefitsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCompanies

List Companies

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.listCompanies({
    fields: "id,name,full_name,display_name,created_at,updated_at",
    filterUpdatedAfter: "2020-01-01T00:00:00.000Z",
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
| `request`                                                                                                                                                                      | [operations.HrisListCompaniesRequest](../../sdk/models/operations/hrislistcompaniesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisListCompaniesResponse](../../sdk/models/operations/hrislistcompaniesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listEmployeeDocuments

List Employee Documents

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeDocuments({
    fields: "id,name,path,type,contents,created_at,updated_at",
    filterUpdatedAfter: "2020-01-01T00:00:00.000Z",
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
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeDocumentsRequest](../../sdk/models/operations/hrislistemployeedocumentsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisListEmployeeDocumentsResponse](../../sdk/models/operations/hrislistemployeedocumentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listEmployeeTimeOffRequests

List Employee Time Off Requests

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeTimeOffRequests({
    fields: "id,employee_id,approver_id,status,type,start_date,end_date,created_at,updated_at",
    filterUpdatedAfter: "2020-01-01T00:00:00.000Z",
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
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeTimeOffRequestsRequest](../../sdk/models/operations/hrislistemployeetimeoffrequestsrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisListEmployeeTimeOffRequestsResponse](../../sdk/models/operations/hrislistemployeetimeoffrequestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listEmployeeWorkEligibility

List Employee Work Eligibility

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeWorkEligibility({
    fields: "id,type,sub_type,document,valid_from,valid_to,issued_by,number",
    filterUpdatedAfter: "2020-01-01T00:00:00.000Z",
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
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeWorkEligibilityRequest](../../sdk/models/operations/hrislistemployeeworkeligibilityrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisListEmployeeWorkEligibilityResponse](../../sdk/models/operations/hrislistemployeeworkeligibilityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listEmployees

List Employees

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployees({
    expand: "company,employments,work_location,home_location,custom_fields,groups",
    fields: "id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_title,job_description,department,cost_centers,benefits,manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,employee_number",
    filterUpdatedAfter: "2020-01-01T00:00:00.000Z",
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    xAccountId: "<value>",
  });

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeesRequest](../../sdk/models/operations/hrislistemployeesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisListEmployeesResponse](../../sdk/models/operations/hrislistemployeesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listEmployments

List Employments

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployments({
    fields: "id,employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,employment_type,employment_contract_type,created_at,updated_at",
    filterUpdatedAfter: "2020-01-01T00:00:00.000Z",
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
| `request`                                                                                                                                                                      | [operations.HrisListEmploymentsRequest](../../sdk/models/operations/hrislistemploymentsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisListEmploymentsResponse](../../sdk/models/operations/hrislistemploymentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listGroups

List Groups

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.listGroups({
    fields: "id,name,type,parent_ids",
    filterUpdatedAfter: "2020-01-01T00:00:00.000Z",
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
| `request`                                                                                                                                                                      | [operations.HrisListGroupsRequest](../../sdk/models/operations/hrislistgroupsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisListGroupsResponse](../../sdk/models/operations/hrislistgroupsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLocations

List locations

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.listLocations({
    fields: "id,employee_id,name,phone_number,street_1,street_2,city,state,zip_code,country,location_type,created_at,updated_at",
    filterUpdatedAfter: "2020-01-01T00:00:00.000Z",
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
| `request`                                                                                                                                                                      | [operations.HrisListLocationsRequest](../../sdk/models/operations/hrislistlocationsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisListLocationsResponse](../../sdk/models/operations/hrislistlocationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listTimeOffRequests

List time off requests

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.listTimeOffRequests({
    fields: "id,employee_id,approver_id,status,type,start_date,end_date,created_at,updated_at",
    filterUpdatedAfter: "2020-01-01T00:00:00.000Z",
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
| `request`                                                                                                                                                                      | [operations.HrisListTimeOffRequestsRequest](../../sdk/models/operations/hrislisttimeoffrequestsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisListTimeOffRequestsResponse](../../sdk/models/operations/hrislisttimeoffrequestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateEmployee

Updates an employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  CountryCodeEnumValue,
  EmploymentSchemasPayFrequencyValue,
  EmploymentSchemasPayPeriodValue,
  EmploymentSchemasValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.updateEmployee({
    hrisCreateEmployeeRequestDto: {
      avatar: {},
      avatarUrl: "https://example.com/avatar.png",
      benefits: [
        {
          createdAt: new Date("2021-01-01T00:00:00Z"),
          description: "Health insurance for employees",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Health Insurance",
          provider: "Aetna",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          updatedAt: new Date("2021-01-01T00:00:00Z"),
        },
      ],
      birthday: new Date("2021-01-01T00:00:00Z"),
      citizenships: [
        {
          value: CountryCodeEnumValue.Us,
        },
      ],
      companyName: "Example Corp",
      customFields: [
        {
          description: "The completion status of the employee's training.",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          options: [
            "Not Started",
            "In Progress",
            "Completed",
            "Overdue",
          ],
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          type: {},
        value: "Completed",
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00.000Z"),
      department: "Physics",
      displayName: "Sir Issac Newton",
      employmentContractType: {},
      employmentStatus: {},
      employmentType: {
      sourceValue: "Permanent",
        value: HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue.Permanent,
      },
      employments: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
          employeeId: "1687-3",
          employmentContractType: {},
          employmentType: {
          sourceValue: "Permanent",
            value: EmploymentSchemasValue.Permanent,
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
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
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
      ],
      ethnicity: {},
      firstName: "Issac",
      gender: {},
      hireDate: new Date("2021-01-01T00:00.000Z"),
      homeLocation: {
        city: "Grantham",
        country: {
          value: HrisCreateEmployeeRequestDtoSchemasHomeLocationValue.Us,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {},
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {},
      name: "Issac Newton",
      personalEmail: "isaac.newton@example.com",
      personalPhoneNumber: "+1234567890",
      preferredLanguage: {
        value: HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue.Eng,
      },
      startDate: new Date("2021-01-01T00:00.000Z"),
      tenure: 2,
      terminationDate: new Date("2021-01-01T00:00:00Z"),
      workAnniversary: new Date("2021-01-01T00:00:00Z"),
      workEmail: "newton@example.com",
      workLocation: {
        city: "Grantham",
        country: {
          value: HrisCreateEmployeeRequestDtoSchemasWorkLocationValue.Us,
        },
        name: "Woolsthorpe Manor",
        phoneNumber: "+44 1476 860 364",
        state: {},
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      workPhoneNumber: "+1234567890",
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
| `request`                                                                                                                                                                      | [operations.HrisUpdateEmployeeRequest](../../sdk/models/operations/hrisupdateemployeerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisUpdateEmployeeResponse](../../sdk/models/operations/hrisupdateemployeeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateEmployeeWorkEligibilityRequest

Update Employee Work Eligibility Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ContentValue, HrisCreateWorkEligibilityRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.updateEmployeeWorkEligibilityRequest({
    hrisCreateWorkEligibilityRequestDto: {
      document: {
        category: "templates, forms, backups, etc.",
        contents: [
          {
            fileFormat: {
            sourceValue: "abc",
              value: ContentValue.Pdf,
            },
            unifiedUrl: "https://api.stackone.com/unified/hris/employees/12345/documents/67890/download",
            url: "https://example.com/file.pdf",
          },
        ],
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "My Document",
        path: "/path/to/file",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        updatedAt: new Date("2021-01-02T01:01:01.000Z"),
      },
      issuedBy: {
        value: HrisCreateWorkEligibilityRequestDtoValue.Us,
      },
      number: "1234567890",
      subType: "H1B",
      type: {},
      validFrom: new Date("2021-01-01T00:00.000Z"),
      validTo: new Date("2021-01-01T00:00.000Z"),
    },
    id: "<id>",
    subResourceId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.HrisUpdateEmployeeWorkEligibilityRequestRequest](../../sdk/models/operations/hrisupdateemployeeworkeligibilityrequestrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisUpdateEmployeeWorkEligibilityRequestResponse](../../sdk/models/operations/hrisupdateemployeeworkeligibilityrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateTimeOffRequest

Update time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.updateTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      startDate: new Date("2021-01-01T01:01:01.000Z"),
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
| `request`                                                                                                                                                                      | [operations.HrisUpdateTimeOffRequestRequest](../../sdk/models/operations/hrisupdatetimeoffrequestrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisUpdateTimeOffRequestResponse](../../sdk/models/operations/hrisupdatetimeoffrequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## uploadEmployeeDocument

Upload Employee Document

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { UnifiedUploadRequestDtoSchemasValue, UnifiedUploadRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "<YOUR_PASSWORD_HERE>",
  },
});

async function run() {
  const result = await stackOne.hris.uploadEmployeeDocument({
    unifiedUploadRequestDto: {
      category: "reports, resumes",
      confidential: {
      sourceValue: "public",
        value: UnifiedUploadRequestDtoValue.True,
      },
      content: "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
      fileFormat: {
      sourceValue: "abc",
        value: UnifiedUploadRequestDtoSchemasValue.Pdf,
      },
      name: "weather-forecast",
      path: "/path/to/file",
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
| `request`                                                                                                                                                                      | [operations.HrisUploadEmployeeDocumentRequest](../../sdk/models/operations/hrisuploademployeedocumentrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.HrisUploadEmployeeDocumentResponse](../../sdk/models/operations/hrisuploademployeedocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

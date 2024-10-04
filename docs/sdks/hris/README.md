# Hris
(*hris*)

## Overview

### Available Operations

* [batchUploadEmployeeDocument](#batchuploademployeedocument) - Batch Upload Employee Document
* [createEmployee](#createemployee) - Creates an employee
* [createEmployeeTimeOffRequest](#createemployeetimeoffrequest) - Create Employee Time Off Request
* [createEmployeeWorkEligibilityRequest](#createemployeeworkeligibilityrequest) - Create Employee Work Eligibility Request
* [createTimeOffRequest](#createtimeoffrequest) - Creates a time off request
* [downloadEmployeeDocument](#downloademployeedocument) - Download Employee Document
* [getBenefit](#getbenefit) - Get Benefit
* [getCompany](#getcompany) - Get Company
* [getDepartmentGroup](#getdepartmentgroup) - Get Department Group
* [getEmployee](#getemployee) - Get Employee
* [getEmployeeDocument](#getemployeedocument) - Get Employee Document
* [getEmployeeDocumentCategory](#getemployeedocumentcategory) - Get Employee Document Category
* [getEmployeeEmployment](#getemployeeemployment) - Get Employee Employment
* [getEmployeesTimeOffRequest](#getemployeestimeoffrequest) - Get Employees Time Off Request
* [getEmployeesWorkEligibility](#getemployeesworkeligibility) - Get Employees Work Eligibility
* [getEmployment](#getemployment) - Get Employment
* [getGroup](#getgroup) - Get Group
* [getJob](#getjob) - Get Job
* [getLocation](#getlocation) - Get Location
* [getTimeOffRequest](#gettimeoffrequest) - Get time off request
* [listBenefits](#listbenefits) - List benefits
* [listCompanies](#listcompanies) - List Companies
* [listDepartmentGroups](#listdepartmentgroups) - List Department Groups
* [listEmployeeCategories](#listemployeecategories) - List Employee Document Categories
* [listEmployeeDocuments](#listemployeedocuments) - List Employee Documents
* [listEmployeeEmployments](#listemployeeemployments) - List Employee Employments
* [listEmployeeTimeOffRequests](#listemployeetimeoffrequests) - List Employee Time Off Requests
* [listEmployeeWorkEligibility](#listemployeeworkeligibility) - List Employee Work Eligibility
* [listEmployees](#listemployees) - List Employees
* [listEmployments](#listemployments) - List Employments
* [listGroups](#listgroups) - List Groups
* [listJobs](#listjobs) - List Jobs
* [listLocations](#listlocations) - List locations
* [listTimeOffRequests](#listtimeoffrequests) - List time off requests
* [updateEmployee](#updateemployee) - Updates an employee
* [updateEmployeeWorkEligibilityRequest](#updateemployeeworkeligibilityrequest) - Update Employee Work Eligibility Request
* [updateTimeOffRequest](#updatetimeoffrequest) - Update time off request
* [uploadEmployeeDocument](#uploademployeedocument) - Upload Employee Document

## batchUploadEmployeeDocument

Batch Upload Employee Document

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
  HrisDocumentsUploadRequestDtoSchemasValue,
  HrisDocumentsUploadRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.batchUploadEmployeeDocument({
    hrisBatchDocumentUploadRequestDto: {
      items: [
        {
          category: {
            sourceValue: "550e8400-e29b-41d4-a716-446655440000",
            value: HrisDocumentsUploadRequestDtoValue.Academic,
          },
          categoryId: "6530",
          confidential: {
            sourceValue: "public",
            value: HrisDocumentsUploadRequestDtoSchemasValue.True,
          },
          content: "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
          fileFormat: {
            sourceValue: "abc",
            value: HrisDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
          },
          name: "weather-forecast",
          path: "/path/to/file",
        },
      ],
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisBatchUploadEmployeeDocument } from "@stackone/stackone-client-ts/funcs/hrisBatchUploadEmployeeDocument.js";
import {
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
  HrisDocumentsUploadRequestDtoSchemasValue,
  HrisDocumentsUploadRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisBatchUploadEmployeeDocument(stackOne, {
    hrisBatchDocumentUploadRequestDto: {
      items: [
        {
          category: {
            sourceValue: "550e8400-e29b-41d4-a716-446655440000",
            value: HrisDocumentsUploadRequestDtoValue.OfferLetter,
          },
          categoryId: "6530",
          confidential: {
            sourceValue: "public",
            value: HrisDocumentsUploadRequestDtoSchemasValue.True,
          },
          content: "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
          fileFormat: {
            sourceValue: "abc",
            value: HrisDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
          },
          name: "weather-forecast",
          path: "/path/to/file",
        },
      ],
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisBatchUploadEmployeeDocumentRequest](../../sdk/models/operations/hrisbatchuploademployeedocumentrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisBatchUploadEmployeeDocumentResponse](../../sdk/models/operations/hrisbatchuploademployeedocumentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createEmployee

Creates an employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  CountryCodeEnumValue,
  CreateEmploymentApiModelSchemasPayFrequencyValue,
  CreateEmploymentApiModelSchemasPayPeriodValue,
  CreateEmploymentApiModelSchemasValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
  HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
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
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00.000Z"),
      department: "Physics",
      departmentId: "3093",
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
            value: CreateEmploymentApiModelSchemasValue.Permanent,
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          jobTitle: "Software Engineer",
          payCurrency: "USD",
          payFrequency: {
            sourceValue: "Hourly",
            value: CreateEmploymentApiModelSchemasPayFrequencyValue.Hourly,
          },
          payPeriod: {
            sourceValue: "Hour",
            value: CreateEmploymentApiModelSchemasPayPeriodValue.Hour,
          },
          payRate: "40.00",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
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
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Woolsthorpe Manor",
        passthrough: {
          "other_known_names": "John Doe",
        },
        phoneNumber: "+44 1476 860 364",
        state: {},
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      jobId: "R-6789",
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {},
      name: "Issac Newton",
      nationalIdentityNumber: {
        type: {
          value: HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Ssn,
        },
        value: "123456789",
      },
      passthrough: {
        "other_known_names": "John Doe",
      },
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
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Woolsthorpe Manor",
        passthrough: {
          "other_known_names": "John Doe",
        },
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
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisCreateEmployee } from "@stackone/stackone-client-ts/funcs/hrisCreateEmployee.js";
import {
  CountryCodeEnumValue,
  CreateEmploymentApiModelSchemasPayFrequencyValue,
  CreateEmploymentApiModelSchemasPayPeriodValue,
  CreateEmploymentApiModelSchemasValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
  HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisCreateEmployee(stackOne, {
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
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00.000Z"),
      department: "Physics",
      departmentId: "3093",
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
            value: CreateEmploymentApiModelSchemasValue.Permanent,
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          jobTitle: "Software Engineer",
          payCurrency: "USD",
          payFrequency: {
            sourceValue: "Hourly",
            value: CreateEmploymentApiModelSchemasPayFrequencyValue.Hourly,
          },
          payPeriod: {
            sourceValue: "Hour",
            value: CreateEmploymentApiModelSchemasPayPeriodValue.Hour,
          },
          payRate: "40.00",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
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
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Woolsthorpe Manor",
        passthrough: {
          "other_known_names": "John Doe",
        },
        phoneNumber: "+44 1476 860 364",
        state: {},
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      jobId: "R-6789",
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {},
      name: "Issac Newton",
      nationalIdentityNumber: {
        type: {
          value: HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Ssn,
        },
        value: "123456789",
      },
      passthrough: {
        "other_known_names": "John Doe",
      },
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
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Woolsthorpe Manor",
        passthrough: {
          "other_known_names": "John Doe",
        },
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisCreateEmployeeRequest](../../sdk/models/operations/hriscreateemployeerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisCreateEmployeeResponse](../../sdk/models/operations/hriscreateemployeeresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createEmployeeTimeOffRequest

Create Employee Time Off Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.createEmployeeTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      endHalfDay: true,
      passthrough: {
        "other_known_names": "John Doe",
      },
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      startHalfDay: true,
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisCreateEmployeeTimeOffRequest } from "@stackone/stackone-client-ts/funcs/hrisCreateEmployeeTimeOffRequest.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisCreateEmployeeTimeOffRequest(stackOne, {
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      endHalfDay: true,
      passthrough: {
        "other_known_names": "John Doe",
      },
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      startHalfDay: true,
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisCreateEmployeeTimeOffRequestRequest](../../sdk/models/operations/hriscreateemployeetimeoffrequestrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisCreateEmployeeTimeOffRequestResponse](../../sdk/models/operations/hriscreateemployeetimeoffrequestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createEmployeeWorkEligibilityRequest

Create Employee Work Eligibility Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue,
  HrisCreateWorkEligibilityRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.createEmployeeWorkEligibilityRequest({
    hrisCreateWorkEligibilityRequestDto: {
      document: {
        category: {},
        categoryId: "6530",
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        fileFormat: {
          sourceValue: "abc",
          value: HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue.Pdf,
        },
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "My Document",
        path: "/path/to/file",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteUrl: "https://example.com/file.pdf",
        updatedAt: new Date("2021-01-02T01:01:01.000Z"),
      },
      issuedBy: {
        value: HrisCreateWorkEligibilityRequestDtoValue.Us,
      },
      number: "1234567890",
      passthrough: {
        "other_known_names": "John Doe",
      },
      subType: "H1B",
      type: {},
      validFrom: new Date("2021-01-01T00:00.000Z"),
      validTo: new Date("2021-01-01T00:00.000Z"),
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisCreateEmployeeWorkEligibilityRequest } from "@stackone/stackone-client-ts/funcs/hrisCreateEmployeeWorkEligibilityRequest.js";
import {
  HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue,
  HrisCreateWorkEligibilityRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisCreateEmployeeWorkEligibilityRequest(stackOne, {
    hrisCreateWorkEligibilityRequestDto: {
      document: {
        category: {},
        categoryId: "6530",
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        fileFormat: {
          sourceValue: "abc",
          value: HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue.Pdf,
        },
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "My Document",
        path: "/path/to/file",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteUrl: "https://example.com/file.pdf",
        updatedAt: new Date("2021-01-02T01:01:01.000Z"),
      },
      issuedBy: {
        value: HrisCreateWorkEligibilityRequestDtoValue.Us,
      },
      number: "1234567890",
      passthrough: {
        "other_known_names": "John Doe",
      },
      subType: "H1B",
      type: {},
      validFrom: new Date("2021-01-01T00:00.000Z"),
      validTo: new Date("2021-01-01T00:00.000Z"),
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisCreateEmployeeWorkEligibilityRequestRequest](../../sdk/models/operations/hriscreateemployeeworkeligibilityrequestrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisCreateEmployeeWorkEligibilityRequestResponse](../../sdk/models/operations/hriscreateemployeeworkeligibilityrequestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createTimeOffRequest

Creates a time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.createTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      endHalfDay: true,
      passthrough: {
        "other_known_names": "John Doe",
      },
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      startHalfDay: true,
    },
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisCreateTimeOffRequest } from "@stackone/stackone-client-ts/funcs/hrisCreateTimeOffRequest.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisCreateTimeOffRequest(stackOne, {
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      endHalfDay: true,
      passthrough: {
        "other_known_names": "John Doe",
      },
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      startHalfDay: true,
    },
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisCreateTimeOffRequestRequest](../../sdk/models/operations/hriscreatetimeoffrequestrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisCreateTimeOffRequestResponse](../../sdk/models/operations/hriscreatetimeoffrequestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## downloadEmployeeDocument

Download Employee Document

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
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
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisDownloadEmployeeDocument } from "@stackone/stackone-client-ts/funcs/hrisDownloadEmployeeDocument.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisDownloadEmployeeDocument(stackOne, {
    format: "base64",
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisDownloadEmployeeDocumentRequest](../../sdk/models/operations/hrisdownloademployeedocumentrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisDownloadEmployeeDocumentResponse](../../sdk/models/operations/hrisdownloademployeedocumentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getBenefit

Get Benefit

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getBenefit({
    fields: "id,remote_id,name,benefit_type,provider,description,created_at,updated_at",
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetBenefit } from "@stackone/stackone-client-ts/funcs/hrisGetBenefit.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetBenefit(stackOne, {
    fields: "id,remote_id,name,benefit_type,provider,description,created_at,updated_at",
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetBenefitRequest](../../sdk/models/operations/hrisgetbenefitrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetBenefitResponse](../../sdk/models/operations/hrisgetbenefitresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCompany

Get Company

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getCompany({
    fields: "id,remote_id,name,full_name,display_name,created_at,updated_at",
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetCompany } from "@stackone/stackone-client-ts/funcs/hrisGetCompany.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetCompany(stackOne, {
    fields: "id,remote_id,name,full_name,display_name,created_at,updated_at",
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetCompanyRequest](../../sdk/models/operations/hrisgetcompanyrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetCompanyResponse](../../sdk/models/operations/hrisgetcompanyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDepartmentGroup

Get Department Group

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getDepartmentGroup({
    fields: "id,remote_id,name",
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetDepartmentGroup } from "@stackone/stackone-client-ts/funcs/hrisGetDepartmentGroup.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetDepartmentGroup(stackOne, {
    fields: "id,remote_id,name",
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetDepartmentGroupRequest](../../sdk/models/operations/hrisgetdepartmentgrouprequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetDepartmentGroupResponse](../../sdk/models/operations/hrisgetdepartmentgroupresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getEmployee

Get Employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployee({
    expand: "company,employments,work_location,home_location,custom_fields,groups",
    fields: "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,benefits,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,employee_number,national_identity_number",
    id: "<id>",
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployee } from "@stackone/stackone-client-ts/funcs/hrisGetEmployee.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployee(stackOne, {
    expand: "company,employments,work_location,home_location,custom_fields,groups",
    fields: "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,benefits,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,employee_number,national_identity_number",
    id: "<id>",
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeeRequest](../../sdk/models/operations/hrisgetemployeerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmployeeResponse](../../sdk/models/operations/hrisgetemployeeresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getEmployeeDocument

Get Employee Document

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeeDocument({
    fields: "id,remote_id,name,path,type,category,category_id,remote_category_id,contents,created_at,updated_at,remote_url,file_format",
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployeeDocument } from "@stackone/stackone-client-ts/funcs/hrisGetEmployeeDocument.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployeeDocument(stackOne, {
    fields: "id,remote_id,name,path,type,category,category_id,remote_category_id,contents,created_at,updated_at,remote_url,file_format",
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeeDocumentRequest](../../sdk/models/operations/hrisgetemployeedocumentrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmployeeDocumentResponse](../../sdk/models/operations/hrisgetemployeedocumentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getEmployeeDocumentCategory

Get Employee Document Category

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeeDocumentCategory({
    fields: "id,remote_id,name,active",
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployeeDocumentCategory } from "@stackone/stackone-client-ts/funcs/hrisGetEmployeeDocumentCategory.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployeeDocumentCategory(stackOne, {
    fields: "id,remote_id,name,active",
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeeDocumentCategoryRequest](../../sdk/models/operations/hrisgetemployeedocumentcategoryrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmployeeDocumentCategoryResponse](../../sdk/models/operations/hrisgetemployeedocumentcategoryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getEmployeeEmployment

Get Employee Employment

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeeEmployment({
    expand: "groups",
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,employment_type,employment_contract_type,created_at,updated_at",
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployeeEmployment } from "@stackone/stackone-client-ts/funcs/hrisGetEmployeeEmployment.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployeeEmployment(stackOne, {
    expand: "groups",
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,employment_type,employment_contract_type,created_at,updated_at",
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeeEmploymentRequest](../../sdk/models/operations/hrisgetemployeeemploymentrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmployeeEmploymentResponse](../../sdk/models/operations/hrisgetemployeeemploymentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getEmployeesTimeOffRequest

Get Employees Time Off Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeesTimeOffRequest({
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,duration,created_at,updated_at",
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployeesTimeOffRequest } from "@stackone/stackone-client-ts/funcs/hrisGetEmployeesTimeOffRequest.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployeesTimeOffRequest(stackOne, {
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,duration,created_at,updated_at",
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeesTimeOffRequestRequest](../../sdk/models/operations/hrisgetemployeestimeoffrequestrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmployeesTimeOffRequestResponse](../../sdk/models/operations/hrisgetemployeestimeoffrequestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getEmployeesWorkEligibility

Get Employees Work Eligibility

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeesWorkEligibility({
    fields: "id,remote_id,type,sub_type,document,valid_from,valid_to,issued_by,number",
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployeesWorkEligibility } from "@stackone/stackone-client-ts/funcs/hrisGetEmployeesWorkEligibility.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployeesWorkEligibility(stackOne, {
    fields: "id,remote_id,type,sub_type,document,valid_from,valid_to,issued_by,number",
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeesWorkEligibilityRequest](../../sdk/models/operations/hrisgetemployeesworkeligibilityrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmployeesWorkEligibilityResponse](../../sdk/models/operations/hrisgetemployeesworkeligibilityresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getEmployment

Get Employment

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployment({
    expand: "groups",
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,employment_type,employment_contract_type,created_at,updated_at",
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployment } from "@stackone/stackone-client-ts/funcs/hrisGetEmployment.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployment(stackOne, {
    expand: "groups",
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,employment_type,employment_contract_type,created_at,updated_at",
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmploymentRequest](../../sdk/models/operations/hrisgetemploymentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmploymentResponse](../../sdk/models/operations/hrisgetemploymentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getGroup

Get Group

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getGroup({
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetGroup } from "@stackone/stackone-client-ts/funcs/hrisGetGroup.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetGroup(stackOne, {
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetGroupRequest](../../sdk/models/operations/hrisgetgrouprequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetGroupResponse](../../sdk/models/operations/hrisgetgroupresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getJob

Get Job

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getJob({
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetJob } from "@stackone/stackone-client-ts/funcs/hrisGetJob.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetJob(stackOne, {
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetJobRequest](../../sdk/models/operations/hrisgetjobrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetJobResponse](../../sdk/models/operations/hrisgetjobresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLocation

Get Location

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getLocation({
    fields: "id,remote_id,employee_id,remote_employee_id,name,phone_number,street_1,street_2,city,state,zip_code,country,location_type,created_at,updated_at",
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetLocation } from "@stackone/stackone-client-ts/funcs/hrisGetLocation.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetLocation(stackOne, {
    fields: "id,remote_id,employee_id,remote_employee_id,name,phone_number,street_1,street_2,city,state,zip_code,country,location_type,created_at,updated_at",
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetLocationRequest](../../sdk/models/operations/hrisgetlocationrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetLocationResponse](../../sdk/models/operations/hrisgetlocationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getTimeOffRequest

Get time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getTimeOffRequest({
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,duration,created_at,updated_at",
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetTimeOffRequest } from "@stackone/stackone-client-ts/funcs/hrisGetTimeOffRequest.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetTimeOffRequest(stackOne, {
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,duration,created_at,updated_at",
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetTimeOffRequestRequest](../../sdk/models/operations/hrisgettimeoffrequestrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetTimeOffRequestResponse](../../sdk/models/operations/hrisgettimeoffrequestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listBenefits

List benefits

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listBenefits({
    fields: "id,remote_id,name,benefit_type,provider,description,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListBenefits } from "@stackone/stackone-client-ts/funcs/hrisListBenefits.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListBenefits(stackOne, {
    fields: "id,remote_id,name,benefit_type,provider,description,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListBenefitsRequest](../../sdk/models/operations/hrislistbenefitsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListBenefitsResponse](../../sdk/models/operations/hrislistbenefitsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCompanies

List Companies

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listCompanies({
    fields: "id,remote_id,name,full_name,display_name,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListCompanies } from "@stackone/stackone-client-ts/funcs/hrisListCompanies.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListCompanies(stackOne, {
    fields: "id,remote_id,name,full_name,display_name,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListCompaniesRequest](../../sdk/models/operations/hrislistcompaniesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListCompaniesResponse](../../sdk/models/operations/hrislistcompaniesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listDepartmentGroups

List Department Groups

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listDepartmentGroups({
    fields: "id,remote_id,name",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListDepartmentGroups } from "@stackone/stackone-client-ts/funcs/hrisListDepartmentGroups.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListDepartmentGroups(stackOne, {
    fields: "id,remote_id,name",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListDepartmentGroupsRequest](../../sdk/models/operations/hrislistdepartmentgroupsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListDepartmentGroupsResponse](../../sdk/models/operations/hrislistdepartmentgroupsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listEmployeeCategories

List Employee Document Categories

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeCategories({
    fields: "id,remote_id,name,active",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployeeCategories } from "@stackone/stackone-client-ts/funcs/hrisListEmployeeCategories.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployeeCategories(stackOne, {
    fields: "id,remote_id,name,active",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeCategoriesRequest](../../sdk/models/operations/hrislistemployeecategoriesrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeeCategoriesResponse](../../sdk/models/operations/hrislistemployeecategoriesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listEmployeeDocuments

List Employee Documents

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeDocuments({
    fields: "id,remote_id,name,path,type,category,category_id,remote_category_id,contents,created_at,updated_at,remote_url,file_format",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployeeDocuments } from "@stackone/stackone-client-ts/funcs/hrisListEmployeeDocuments.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployeeDocuments(stackOne, {
    fields: "id,remote_id,name,path,type,category,category_id,remote_category_id,contents,created_at,updated_at,remote_url,file_format",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeDocumentsRequest](../../sdk/models/operations/hrislistemployeedocumentsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeeDocumentsResponse](../../sdk/models/operations/hrislistemployeedocumentsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listEmployeeEmployments

List Employee Employments

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeEmployments({
    expand: "groups",
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,employment_type,employment_contract_type,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployeeEmployments } from "@stackone/stackone-client-ts/funcs/hrisListEmployeeEmployments.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployeeEmployments(stackOne, {
    expand: "groups",
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,employment_type,employment_contract_type,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeEmploymentsRequest](../../sdk/models/operations/hrislistemployeeemploymentsrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeeEmploymentsResponse](../../sdk/models/operations/hrislistemployeeemploymentsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listEmployeeTimeOffRequests

List Employee Time Off Requests

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeTimeOffRequests({
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,duration,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployeeTimeOffRequests } from "@stackone/stackone-client-ts/funcs/hrisListEmployeeTimeOffRequests.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployeeTimeOffRequests(stackOne, {
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,duration,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeTimeOffRequestsRequest](../../sdk/models/operations/hrislistemployeetimeoffrequestsrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeeTimeOffRequestsResponse](../../sdk/models/operations/hrislistemployeetimeoffrequestsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listEmployeeWorkEligibility

List Employee Work Eligibility

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeWorkEligibility({
    fields: "id,remote_id,type,sub_type,document,valid_from,valid_to,issued_by,number",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployeeWorkEligibility } from "@stackone/stackone-client-ts/funcs/hrisListEmployeeWorkEligibility.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployeeWorkEligibility(stackOne, {
    fields: "id,remote_id,type,sub_type,document,valid_from,valid_to,issued_by,number",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeWorkEligibilityRequest](../../sdk/models/operations/hrislistemployeeworkeligibilityrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeeWorkEligibilityResponse](../../sdk/models/operations/hrislistemployeeworkeligibilityresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listEmployees

List Employees

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployees({
    expand: "company,employments,work_location,home_location,custom_fields,groups",
    fields: "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,benefits,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,employee_number,national_identity_number",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployees } from "@stackone/stackone-client-ts/funcs/hrisListEmployees.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployees(stackOne, {
    expand: "company,employments,work_location,home_location,custom_fields,groups",
    fields: "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,benefits,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,employee_number,national_identity_number",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
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
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeesResponse](../../sdk/models/operations/hrislistemployeesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listEmployments

List Employments

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployments({
    expand: "groups",
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,employment_type,employment_contract_type,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployments } from "@stackone/stackone-client-ts/funcs/hrisListEmployments.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployments(stackOne, {
    expand: "groups",
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,employment_type,employment_contract_type,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmploymentsRequest](../../sdk/models/operations/hrislistemploymentsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmploymentsResponse](../../sdk/models/operations/hrislistemploymentsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listGroups

List Groups

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listGroups({
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListGroups } from "@stackone/stackone-client-ts/funcs/hrisListGroups.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListGroups(stackOne, {
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListGroupsRequest](../../sdk/models/operations/hrislistgroupsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListGroupsResponse](../../sdk/models/operations/hrislistgroupsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listJobs

List Jobs

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listJobs({
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListJobs } from "@stackone/stackone-client-ts/funcs/hrisListJobs.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListJobs(stackOne, {
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListJobsRequest](../../sdk/models/operations/hrislistjobsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListJobsResponse](../../sdk/models/operations/hrislistjobsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLocations

List locations

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listLocations({
    fields: "id,remote_id,employee_id,remote_employee_id,name,phone_number,street_1,street_2,city,state,zip_code,country,location_type,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListLocations } from "@stackone/stackone-client-ts/funcs/hrisListLocations.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListLocations(stackOne, {
    fields: "id,remote_id,employee_id,remote_employee_id,name,phone_number,street_1,street_2,city,state,zip_code,country,location_type,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListLocationsRequest](../../sdk/models/operations/hrislistlocationsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListLocationsResponse](../../sdk/models/operations/hrislistlocationsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listTimeOffRequests

List time off requests

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listTimeOffRequests({
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,duration,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListTimeOffRequests } from "@stackone/stackone-client-ts/funcs/hrisListTimeOffRequests.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListTimeOffRequests(stackOne, {
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,duration,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListTimeOffRequestsRequest](../../sdk/models/operations/hrislisttimeoffrequestsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListTimeOffRequestsResponse](../../sdk/models/operations/hrislisttimeoffrequestsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateEmployee

Updates an employee

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  CountryCodeEnumValue,
  CreateEmploymentApiModelSchemasPayFrequencyValue,
  CreateEmploymentApiModelSchemasPayPeriodValue,
  CreateEmploymentApiModelSchemasValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
  HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
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
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00.000Z"),
      department: "Physics",
      departmentId: "3093",
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
            value: CreateEmploymentApiModelSchemasValue.Permanent,
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          jobTitle: "Software Engineer",
          payCurrency: "USD",
          payFrequency: {
            sourceValue: "Hourly",
            value: CreateEmploymentApiModelSchemasPayFrequencyValue.Hourly,
          },
          payPeriod: {
            sourceValue: "Hour",
            value: CreateEmploymentApiModelSchemasPayPeriodValue.Hour,
          },
          payRate: "40.00",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
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
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Woolsthorpe Manor",
        passthrough: {
          "other_known_names": "John Doe",
        },
        phoneNumber: "+44 1476 860 364",
        state: {},
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      jobId: "R-6789",
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {},
      name: "Issac Newton",
      nationalIdentityNumber: {
        type: {
          value: HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Ssn,
        },
        value: "123456789",
      },
      passthrough: {
        "other_known_names": "John Doe",
      },
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
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Woolsthorpe Manor",
        passthrough: {
          "other_known_names": "John Doe",
        },
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
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisUpdateEmployee } from "@stackone/stackone-client-ts/funcs/hrisUpdateEmployee.js";
import {
  CountryCodeEnumValue,
  CreateEmploymentApiModelSchemasPayFrequencyValue,
  CreateEmploymentApiModelSchemasPayPeriodValue,
  CreateEmploymentApiModelSchemasValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentTypeValue,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue,
  HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisUpdateEmployee(stackOne, {
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
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00.000Z"),
      department: "Physics",
      departmentId: "3093",
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
            value: CreateEmploymentApiModelSchemasValue.Permanent,
          },
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          jobTitle: "Software Engineer",
          payCurrency: "USD",
          payFrequency: {
            sourceValue: "Hourly",
            value: CreateEmploymentApiModelSchemasPayFrequencyValue.Hourly,
          },
          payPeriod: {
            sourceValue: "Hour",
            value: CreateEmploymentApiModelSchemasPayPeriodValue.Hour,
          },
          payRate: "40.00",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
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
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Woolsthorpe Manor",
        passthrough: {
          "other_known_names": "John Doe",
        },
        phoneNumber: "+44 1476 860 364",
        state: {},
        street1: "Water Lane",
        street2: "Woolsthorpe by Colsterworth",
        zipCode: "NG33 5NR",
      },
      jobId: "R-6789",
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {},
      name: "Issac Newton",
      nationalIdentityNumber: {
        type: {
          value: HrisCreateEmployeeRequestDtoSchemasNationalIdentityNumberValue.Ssn,
        },
        value: "123456789",
      },
      passthrough: {
        "other_known_names": "John Doe",
      },
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
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Woolsthorpe Manor",
        passthrough: {
          "other_known_names": "John Doe",
        },
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisUpdateEmployeeRequest](../../sdk/models/operations/hrisupdateemployeerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisUpdateEmployeeResponse](../../sdk/models/operations/hrisupdateemployeeresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateEmployeeWorkEligibilityRequest

Update Employee Work Eligibility Request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue,
  HrisCreateWorkEligibilityRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.updateEmployeeWorkEligibilityRequest({
    hrisCreateWorkEligibilityRequestDto: {
      document: {
        category: {},
        categoryId: "6530",
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        fileFormat: {
          sourceValue: "abc",
          value: HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue.Pdf,
        },
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "My Document",
        path: "/path/to/file",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteUrl: "https://example.com/file.pdf",
        updatedAt: new Date("2021-01-02T01:01:01.000Z"),
      },
      issuedBy: {
        value: HrisCreateWorkEligibilityRequestDtoValue.Us,
      },
      number: "1234567890",
      passthrough: {
        "other_known_names": "John Doe",
      },
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
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisUpdateEmployeeWorkEligibilityRequest } from "@stackone/stackone-client-ts/funcs/hrisUpdateEmployeeWorkEligibilityRequest.js";
import {
  HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue,
  HrisCreateWorkEligibilityRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisUpdateEmployeeWorkEligibilityRequest(stackOne, {
    hrisCreateWorkEligibilityRequestDto: {
      document: {
        category: {},
        categoryId: "6530",
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        fileFormat: {
          sourceValue: "abc",
          value: HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue.Pdf,
        },
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "My Document",
        path: "/path/to/file",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteUrl: "https://example.com/file.pdf",
        updatedAt: new Date("2021-01-02T01:01:01.000Z"),
      },
      issuedBy: {
        value: HrisCreateWorkEligibilityRequestDtoValue.Us,
      },
      number: "1234567890",
      passthrough: {
        "other_known_names": "John Doe",
      },
      subType: "H1B",
      type: {},
      validFrom: new Date("2021-01-01T00:00.000Z"),
      validTo: new Date("2021-01-01T00:00.000Z"),
    },
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisUpdateEmployeeWorkEligibilityRequestRequest](../../sdk/models/operations/hrisupdateemployeeworkeligibilityrequestrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisUpdateEmployeeWorkEligibilityRequestResponse](../../sdk/models/operations/hrisupdateemployeeworkeligibilityrequestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateTimeOffRequest

Update time off request

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.updateTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      endHalfDay: true,
      passthrough: {
        "other_known_names": "John Doe",
      },
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      startHalfDay: true,
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisUpdateTimeOffRequest } from "@stackone/stackone-client-ts/funcs/hrisUpdateTimeOffRequest.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisUpdateTimeOffRequest(stackOne, {
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      employeeId: "1687-3",
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      endHalfDay: true,
      passthrough: {
        "other_known_names": "John Doe",
      },
      startDate: new Date("2021-01-01T01:01:01.000Z"),
      startHalfDay: true,
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisUpdateTimeOffRequestRequest](../../sdk/models/operations/hrisupdatetimeoffrequestrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisUpdateTimeOffRequestResponse](../../sdk/models/operations/hrisupdatetimeoffrequestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## uploadEmployeeDocument

Upload Employee Document

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
  HrisDocumentsUploadRequestDtoSchemasValue,
  HrisDocumentsUploadRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.uploadEmployeeDocument({
    hrisDocumentsUploadRequestDto: {
      category: {
        sourceValue: "550e8400-e29b-41d4-a716-446655440000",
        value: HrisDocumentsUploadRequestDtoValue.UnmappedValue,
      },
      categoryId: "6530",
      confidential: {
        sourceValue: "public",
        value: HrisDocumentsUploadRequestDtoSchemasValue.True,
      },
      content: "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
      fileFormat: {
        sourceValue: "abc",
        value: HrisDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
      },
      name: "weather-forecast",
      path: "/path/to/file",
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisUploadEmployeeDocument } from "@stackone/stackone-client-ts/funcs/hrisUploadEmployeeDocument.js";
import {
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
  HrisDocumentsUploadRequestDtoSchemasValue,
  HrisDocumentsUploadRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisUploadEmployeeDocument(stackOne, {
    hrisDocumentsUploadRequestDto: {
      category: {
        sourceValue: "550e8400-e29b-41d4-a716-446655440000",
        value: HrisDocumentsUploadRequestDtoValue.UnmappedValue,
      },
      categoryId: "6530",
      confidential: {
        sourceValue: "public",
        value: HrisDocumentsUploadRequestDtoSchemasValue.True,
      },
      content: "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
      fileFormat: {
        sourceValue: "abc",
        value: HrisDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
      },
      name: "weather-forecast",
      path: "/path/to/file",
    },
    id: "<id>",
    xAccountId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisUploadEmployeeDocumentRequest](../../sdk/models/operations/hrisuploademployeedocumentrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisUploadEmployeeDocumentResponse](../../sdk/models/operations/hrisuploademployeedocumentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |
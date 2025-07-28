# Hris
(*hris*)

## Overview

### Available Operations

* [batchUploadEmployeeDocument](#batchuploademployeedocument) - Batch Upload Employee Document
* [cancelEmployeeTimeOffRequest](#cancelemployeetimeoffrequest) - Cancel Employee Time Off Request
* [createEmployee](#createemployee) - Creates an employee
* [createEmployeeEmployment](#createemployeeemployment) - Create Employee Employment
* [createEmployeeSkill](#createemployeeskill) - Create Employee Skill
* [createEmployeeTimeOffRequest](#createemployeetimeoffrequest) - Create Employee Time Off Request
* [createEmployeeWorkEligibilityRequest](#createemployeeworkeligibilityrequest) - Create Employee Work Eligibility Request
* [downloadEmployeeDocument](#downloademployeedocument) - Download Employee Document
* [getBenefit](#getbenefit) - Get Benefit
* [getCompany](#getcompany) - Get Company
* [getCompanyGroup](#getcompanygroup) - Get Company Group
* [getCostCenterGroup](#getcostcentergroup) - Get Cost Center Group
* [getDepartmentGroup](#getdepartmentgroup) - Get Department Group
* [getDivisionGroup](#getdivisiongroup) - Get Division Group
* [getEmployee](#getemployee) - Get Employee
* [getEmployeeCustomFieldDefinition](#getemployeecustomfielddefinition) - Get employee Custom Field Definition
* [getEmployeeDocument](#getemployeedocument) - Get Employee Document
* [getEmployeeDocumentCategory](#getemployeedocumentcategory) - Get Employee Document Category
* [getEmployeeEmployment](#getemployeeemployment) - Get Employee Employment
* [getEmployeeSkill](#getemployeeskill) - Get Employee Skill
* [getEmployeeTask](#getemployeetask) - Get Employee Task
* [getEmployeeTimeOffBalance](#getemployeetimeoffbalance) - Get Employee Time Off Balance
* [getEmployeesTimeOffRequest](#getemployeestimeoffrequest) - Get Employees Time Off Request
* [getEmployeesWorkEligibility](#getemployeesworkeligibility) - Get Employees Work Eligibility
* [getEmployment](#getemployment) - Get Employment
* [getGroup](#getgroup) - Get Group
* [getJob](#getjob) - Get Job
* [getLocation](#getlocation) - Get Work Location
* [getPosition](#getposition) - Get Position
* [getShift](#getshift) - Get Shift
* [getTask](#gettask) - Get Task
* [getTeamGroup](#getteamgroup) - Get Team Group
* [getTimeEntries](#gettimeentries) - Get Time Entry
* [getTimeOffPolicy](#gettimeoffpolicy) - Get Time Off Policy
* [getTimeOffRequest](#gettimeoffrequest) - Get time off request
* [~~getTimeOffType~~](#gettimeofftype) - Get time off type :warning: **Deprecated**
* [inviteEmployee](#inviteemployee) - Invite Employee
* [listBenefits](#listbenefits) - List benefits
* [listCompanies](#listcompanies) - List Companies
* [listCompaniesGroups](#listcompaniesgroups) - List Companies Groups
* [listCostCenterGroups](#listcostcentergroups) - List Cost Center Groups
* [listDepartmentGroups](#listdepartmentgroups) - List Department Groups
* [listDivisionGroups](#listdivisiongroups) - List Division Groups
* [listEmployeeCategories](#listemployeecategories) - List Employee Document Categories
* [listEmployeeCustomFieldDefinitions](#listemployeecustomfielddefinitions) - List employee Custom Field Definitions
* [listEmployeeDocuments](#listemployeedocuments) - List Employee Documents
* [listEmployeeEmployments](#listemployeeemployments) - List Employee Employments
* [listEmployeeSkills](#listemployeeskills) - List Employee Skills
* [listEmployeeTasks](#listemployeetasks) - List Employee Tasks
* [listEmployeeTimeOffBalances](#listemployeetimeoffbalances) - List Employee Time Off Balances
* [listEmployeeTimeOffPolicies](#listemployeetimeoffpolicies) - List Assigned Time Off Policies
* [listEmployeeTimeOffRequests](#listemployeetimeoffrequests) - List Employee Time Off Requests
* [listEmployeeWorkEligibility](#listemployeeworkeligibility) - List Employee Work Eligibility
* [listEmployees](#listemployees) - List Employees
* [listEmployments](#listemployments) - List Employments
* [listGroups](#listgroups) - List Groups
* [listJobs](#listjobs) - List Jobs
* [listLocations](#listlocations) - List Work Locations
* [listPositions](#listpositions) - List Positions
* [listShifts](#listshifts) - List Shifts
* [listTasks](#listtasks) - List Tasks
* [listTeamGroups](#listteamgroups) - List Team Groups
* [listTimeEntries](#listtimeentries) - List Time Entries
* [listTimeOffPolicies](#listtimeoffpolicies) - List Time Off Policies
* [listTimeOffRequests](#listtimeoffrequests) - List time off requests
* [~~listTimeOffTypes~~](#listtimeofftypes) - List time off types :warning: **Deprecated**
* [updateEmployee](#updateemployee) - Updates an employee
* [updateEmployeeEmployment](#updateemployeeemployment) - Update Employee Employment
* [updateEmployeeTimeOffRequest](#updateemployeetimeoffrequest) - Update Employee Time Off Request
* [updateEmployeeWorkEligibilityRequest](#updateemployeeworkeligibilityrequest) - Update Employee Work Eligibility Request
* [uploadEmployeeDocument](#uploademployeedocument) - Upload Employee Document

## batchUploadEmployeeDocument

Batch Upload Employee Document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_batch_upload_employee_document" method="post" path="/unified/hris/employees/{id}/documents/upload/batch" -->
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
            value: HrisDocumentsUploadRequestDtoValue.Shared,
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
        {
          category: {
            sourceValue: "550e8400-e29b-41d4-a716-446655440000",
            value: HrisDocumentsUploadRequestDtoValue.Shared,
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
    xAccountId: "<id>",
  });

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
            value: HrisDocumentsUploadRequestDtoValue.Shared,
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
        {
          category: {
            sourceValue: "550e8400-e29b-41d4-a716-446655440000",
            value: HrisDocumentsUploadRequestDtoValue.Shared,
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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisBatchUploadEmployeeDocument failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## cancelEmployeeTimeOffRequest

Cancel Employee Time Off Request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_cancel_employee_time_off_request" method="delete" path="/unified/hris/employees/{id}/time_off/{subResourceId}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.cancelEmployeeTimeOffRequest({
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisCancelEmployeeTimeOffRequest } from "@stackone/stackone-client-ts/funcs/hrisCancelEmployeeTimeOffRequest.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisCancelEmployeeTimeOffRequest(stackOne, {
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCancelEmployeeTimeOffRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisCancelEmployeeTimeOffRequestRequest](../../sdk/models/operations/hriscancelemployeetimeoffrequestrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisCancelEmployeeTimeOffRequestResponse](../../sdk/models/operations/hriscancelemployeetimeoffrequestresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## createEmployee

Creates an employee

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_create_employee" method="post" path="/unified/hris/employees" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  CountryCodeEnumValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentPayPeriodValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentWorkTimeValue,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
  NationalIdentityNumberApiModelSchemasValue,
  NationalIdentityNumberApiModelValue,
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
      companyId: "1234567890",
      costCenters: [
        {
          distributionPercentage: 100,
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "R&D",
        },
        {
          distributionPercentage: 100,
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "R&D",
        },
        {
          distributionPercentage: 100,
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "R&D",
        },
      ],
      customFields: [
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00:00.000Z"),
      department: "Physics",
      departmentId: "3093",
      displayName: "Sir Isaac Newton",
      employeeNumber: "125",
      employment: {
        endDate: new Date("2021-01-01T01:01:01.000Z"),
        grade: {
          description: "Mid-level employee demonstrating proficiency and autonomy.",
          id: "1687-3",
          name: "1687-4",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
        jobTitle: "Software Engineer",
        passthrough: {
          "other_known_names": "John Doe",
        },
        payCurrency: "USD",
        payFrequency: {
          sourceValue: "Hourly",
          value: HrisCreateEmployeeRequestDtoSchemasEmploymentValue.Hourly,
        },
        payPeriod: {
          sourceValue: "Hour",
          value: HrisCreateEmployeeRequestDtoSchemasEmploymentPayPeriodValue.Hour,
        },
        payRate: "40.00",
        payrollCode: "PC1",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        workTime: {
          duration: "P0Y0M0DT8H0M0S",
          durationUnit: {
            value: HrisCreateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month,
          },
        },
      },
      employmentStatus: {},
      ethnicity: {},
      firstName: "Isaac",
      gender: {},
      hireDate: new Date("2021-01-01T00:00:00.000Z"),
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
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {},
      name: "Isaac Newton",
      nationalIdentityNumbers: [
        {
          country: {
            value: NationalIdentityNumberApiModelValue.Us,
          },
          type: {
            value: NationalIdentityNumberApiModelSchemasValue.Ssn,
          },
          value: "123456789",
        },
        {
          country: {
            value: NationalIdentityNumberApiModelValue.Us,
          },
          type: {
            value: NationalIdentityNumberApiModelSchemasValue.Ssn,
          },
          value: "123456789",
        },
      ],
      passthrough: {
        "other_known_names": "John Doe",
      },
      personalEmail: "isaac.newton@example.com",
      personalPhoneNumber: "+1234567890",
      preferredLanguage: {
        value: HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue.Eng,
      },
      startDate: new Date("2021-01-01T00:00:00.000Z"),
      teamId: "2913",
      terminationDate: new Date("2021-01-01T00:00:00Z"),
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
    xAccountId: "<id>",
  });

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
  HrisCreateEmployeeRequestDtoSchemasEmploymentPayPeriodValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentValue,
  HrisCreateEmployeeRequestDtoSchemasEmploymentWorkTimeValue,
  HrisCreateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisCreateEmployeeRequestDtoSchemasWorkLocationValue,
  NationalIdentityNumberApiModelSchemasValue,
  NationalIdentityNumberApiModelValue,
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
      companyId: "1234567890",
      costCenters: [
        {
          distributionPercentage: 100,
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "R&D",
        },
        {
          distributionPercentage: 100,
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "R&D",
        },
        {
          distributionPercentage: 100,
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "R&D",
        },
      ],
      customFields: [
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00:00.000Z"),
      department: "Physics",
      departmentId: "3093",
      displayName: "Sir Isaac Newton",
      employeeNumber: "125",
      employment: {
        endDate: new Date("2021-01-01T01:01:01.000Z"),
        grade: {
          description: "Mid-level employee demonstrating proficiency and autonomy.",
          id: "1687-3",
          name: "1687-4",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
        jobTitle: "Software Engineer",
        passthrough: {
          "other_known_names": "John Doe",
        },
        payCurrency: "USD",
        payFrequency: {
          sourceValue: "Hourly",
          value: HrisCreateEmployeeRequestDtoSchemasEmploymentValue.Hourly,
        },
        payPeriod: {
          sourceValue: "Hour",
          value: HrisCreateEmployeeRequestDtoSchemasEmploymentPayPeriodValue.Hour,
        },
        payRate: "40.00",
        payrollCode: "PC1",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        workTime: {
          duration: "P0Y0M0DT8H0M0S",
          durationUnit: {
            value: HrisCreateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month,
          },
        },
      },
      employmentStatus: {},
      ethnicity: {},
      firstName: "Isaac",
      gender: {},
      hireDate: new Date("2021-01-01T00:00:00.000Z"),
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
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {},
      name: "Isaac Newton",
      nationalIdentityNumbers: [
        {
          country: {
            value: NationalIdentityNumberApiModelValue.Us,
          },
          type: {
            value: NationalIdentityNumberApiModelSchemasValue.Ssn,
          },
          value: "123456789",
        },
        {
          country: {
            value: NationalIdentityNumberApiModelValue.Us,
          },
          type: {
            value: NationalIdentityNumberApiModelSchemasValue.Ssn,
          },
          value: "123456789",
        },
      ],
      passthrough: {
        "other_known_names": "John Doe",
      },
      personalEmail: "isaac.newton@example.com",
      personalPhoneNumber: "+1234567890",
      preferredLanguage: {
        value: HrisCreateEmployeeRequestDtoSchemasPreferredLanguageValue.Eng,
      },
      startDate: new Date("2021-01-01T00:00:00.000Z"),
      teamId: "2913",
      terminationDate: new Date("2021-01-01T00:00:00Z"),
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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateEmployee failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## createEmployeeEmployment

Create Employee Employment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_create_employee_employment" method="post" path="/unified/hris/employees/{id}/employments" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  HrisCreateEmploymentRequestDtoSchemasPayFrequencyValue,
  HrisCreateEmploymentRequestDtoSchemasPayPeriodValue,
  HrisCreateEmploymentRequestDtoSchemasWorkTimeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.createEmployeeEmployment({
    hrisCreateEmploymentRequestDto: {
      effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      grade: {
        description: "Mid-level employee demonstrating proficiency and autonomy.",
        id: "1687-3",
        name: "1687-4",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      jobId: "5290",
      jobTitle: "Software Engineer",
      passthrough: {
        "other_known_names": "John Doe",
      },
      payCurrency: "USD",
      payFrequency: {
        sourceValue: "Hourly",
        value: HrisCreateEmploymentRequestDtoSchemasPayFrequencyValue.Hourly,
      },
      payPeriod: {
        sourceValue: "Hour",
        value: HrisCreateEmploymentRequestDtoSchemasPayPeriodValue.Hour,
      },
      payRate: "40.00",
      payrollCode: "PC1",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      workTime: {
        duration: "P0Y0M0DT8H0M0S",
        durationUnit: {
          value: HrisCreateEmploymentRequestDtoSchemasWorkTimeValue.Month,
        },
      },
    },
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisCreateEmployeeEmployment } from "@stackone/stackone-client-ts/funcs/hrisCreateEmployeeEmployment.js";
import {
  HrisCreateEmploymentRequestDtoSchemasPayFrequencyValue,
  HrisCreateEmploymentRequestDtoSchemasPayPeriodValue,
  HrisCreateEmploymentRequestDtoSchemasWorkTimeValue,
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
  const res = await hrisCreateEmployeeEmployment(stackOne, {
    hrisCreateEmploymentRequestDto: {
      effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      grade: {
        description: "Mid-level employee demonstrating proficiency and autonomy.",
        id: "1687-3",
        name: "1687-4",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      jobId: "5290",
      jobTitle: "Software Engineer",
      passthrough: {
        "other_known_names": "John Doe",
      },
      payCurrency: "USD",
      payFrequency: {
        sourceValue: "Hourly",
        value: HrisCreateEmploymentRequestDtoSchemasPayFrequencyValue.Hourly,
      },
      payPeriod: {
        sourceValue: "Hour",
        value: HrisCreateEmploymentRequestDtoSchemasPayPeriodValue.Hour,
      },
      payRate: "40.00",
      payrollCode: "PC1",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      workTime: {
        duration: "P0Y0M0DT8H0M0S",
        durationUnit: {
          value: HrisCreateEmploymentRequestDtoSchemasWorkTimeValue.Month,
        },
      },
    },
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateEmployeeEmployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisCreateEmployeeEmploymentRequest](../../sdk/models/operations/hriscreateemployeeemploymentrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisCreateEmployeeEmploymentResponse](../../sdk/models/operations/hriscreateemployeeemploymentresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## createEmployeeSkill

Create Employee Skill

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_create_employee_skill" method="post" path="/unified/hris/employees/{id}/skills" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.createEmployeeSkill({
    entitySkillsCreateRequestDto: {
      id: "16873-IT345",
      maximumProficiency: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Expert",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      minimumProficiency: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Expert",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      name: "Information-Technology",
    },
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisCreateEmployeeSkill } from "@stackone/stackone-client-ts/funcs/hrisCreateEmployeeSkill.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisCreateEmployeeSkill(stackOne, {
    entitySkillsCreateRequestDto: {
      id: "16873-IT345",
      maximumProficiency: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Expert",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      minimumProficiency: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Expert",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      name: "Information-Technology",
    },
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateEmployeeSkill failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisCreateEmployeeSkillRequest](../../sdk/models/operations/hriscreateemployeeskillrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisCreateEmployeeSkillResponse](../../sdk/models/operations/hriscreateemployeeskillresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## createEmployeeTimeOffRequest

Create Employee Time Off Request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_create_employee_time_off_request" method="post" path="/unified/hris/employees/{id}/time_off" -->
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
      comment: "Taking a day off for personal reasons",
      endDate: "2021-01-01T01:01:01.000",
      endHalfDay: true,
      passthrough: {
        "other_known_names": "John Doe",
      },
      reason: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      startDate: "2021-01-01T01:01:01.000",
      startHalfDay: true,
      timeOffPolicyId: "cx280928933",
    },
    id: "<id>",
    xAccountId: "<id>",
  });

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
      comment: "Taking a day off for personal reasons",
      endDate: "2021-01-01T01:01:01.000",
      endHalfDay: true,
      passthrough: {
        "other_known_names": "John Doe",
      },
      reason: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      startDate: "2021-01-01T01:01:01.000",
      startHalfDay: true,
      timeOffPolicyId: "cx280928933",
    },
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateEmployeeTimeOffRequest failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## createEmployeeWorkEligibilityRequest

Create Employee Work Eligibility Request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_create_employee_work_eligibility_request" method="post" path="/unified/hris/employees/{id}/work_eligibility" -->
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
          sourceValue: "application/pdf",
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
      validFrom: new Date("2021-01-01T00:00:00.000Z"),
      validTo: new Date("2021-01-01T00:00:00.000Z"),
    },
    id: "<id>",
    xAccountId: "<id>",
  });

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
          sourceValue: "application/pdf",
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
      validFrom: new Date("2021-01-01T00:00:00.000Z"),
      validTo: new Date("2021-01-01T00:00:00.000Z"),
    },
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisCreateEmployeeWorkEligibilityRequest failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## downloadEmployeeDocument

Download Employee Document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_download_employee_document" method="get" path="/unified/hris/employees/{id}/documents/{subResourceId}/download" -->
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
    exportFormat: "text/plain",
    format: "base64",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

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
    exportFormat: "text/plain",
    format: "base64",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisDownloadEmployeeDocument failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getBenefit

Get Benefit

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_benefit" method="get" path="/unified/hris/benefits/{id}" -->
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
    xAccountId: "<id>",
  });

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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetBenefit failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getCompany

Get Company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_company" method="get" path="/unified/hris/companies/{id}" -->
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
    xAccountId: "<id>",
  });

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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetCompany failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getCompanyGroup

Get Company Group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_company_group" method="get" path="/unified/hris/groups/companies/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getCompanyGroup({
    fields: "id,remote_id,name,full_name,display_name,created_at,updated_at",
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetCompanyGroup } from "@stackone/stackone-client-ts/funcs/hrisGetCompanyGroup.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetCompanyGroup(stackOne, {
    fields: "id,remote_id,name,full_name,display_name,created_at,updated_at",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetCompanyGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetCompanyGroupRequest](../../sdk/models/operations/hrisgetcompanygrouprequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetCompanyGroupResponse](../../sdk/models/operations/hrisgetcompanygroupresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getCostCenterGroup

Get Cost Center Group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_cost_center_group" method="get" path="/unified/hris/groups/cost_centers/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getCostCenterGroup({
    fields: "id,remote_id,name,type,distribution_percentage,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetCostCenterGroup } from "@stackone/stackone-client-ts/funcs/hrisGetCostCenterGroup.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetCostCenterGroup(stackOne, {
    fields: "id,remote_id,name,type,distribution_percentage,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetCostCenterGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetCostCenterGroupRequest](../../sdk/models/operations/hrisgetcostcentergrouprequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetCostCenterGroupResponse](../../sdk/models/operations/hrisgetcostcentergroupresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getDepartmentGroup

Get Department Group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_department_group" method="get" path="/unified/hris/groups/departments/{id}" -->
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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    id: "<id>",
    xAccountId: "<id>",
  });

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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetDepartmentGroup failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getDivisionGroup

Get Division Group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_division_group" method="get" path="/unified/hris/groups/divisions/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getDivisionGroup({
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetDivisionGroup } from "@stackone/stackone-client-ts/funcs/hrisGetDivisionGroup.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetDivisionGroup(stackOne, {
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetDivisionGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetDivisionGroupRequest](../../sdk/models/operations/hrisgetdivisiongrouprequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetDivisionGroupResponse](../../sdk/models/operations/hrisgetdivisiongroupresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployee

Get Employee

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employee" method="get" path="/unified/hris/employees/{id}" -->
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
    expand: "company,employments,work_location,home_location,groups,skills",
    fields: "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,company,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,company_id,remote_company_id,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,benefits,employee_number,national_identity_number,national_identity_numbers,skills",
    id: "<id>",
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    xAccountId: "<id>",
  });

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
    expand: "company,employments,work_location,home_location,groups,skills",
    fields: "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,company,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,company_id,remote_company_id,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,benefits,employee_number,national_identity_number,national_identity_numbers,skills",
    id: "<id>",
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployee failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployeeCustomFieldDefinition

Get employee Custom Field Definition

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employee_custom_field_definition" method="get" path="/unified/hris/custom_field_definitions/employees/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeeCustomFieldDefinition({
    fields: "id,remote_id,name,description,type,options",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployeeCustomFieldDefinition } from "@stackone/stackone-client-ts/funcs/hrisGetEmployeeCustomFieldDefinition.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployeeCustomFieldDefinition(stackOne, {
    fields: "id,remote_id,name,description,type,options",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployeeCustomFieldDefinition failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeeCustomFieldDefinitionRequest](../../sdk/models/operations/hrisgetemployeecustomfielddefinitionrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmployeeCustomFieldDefinitionResponse](../../sdk/models/operations/hrisgetemployeecustomfielddefinitionresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployeeDocument

Get Employee Document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employee_document" method="get" path="/unified/hris/employees/{id}/documents/{subResourceId}" -->
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
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

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
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployeeDocument failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployeeDocumentCategory

Get Employee Document Category

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employee_document_category" method="get" path="/unified/hris/documents/employee_categories/{id}" -->
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
    xAccountId: "<id>",
  });

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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployeeDocumentCategory failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployeeEmployment

Get Employee Employment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employee_employment" method="get" path="/unified/hris/employees/{id}/employments/{subResourceId}" -->
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
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,end_date,employment_type,employment_contract_type,change_reason,grade,work_time,payroll_code,fte,created_at,updated_at,start_date,active,department,team,cost_center,cost_centers,division,job,type,contract_type,manager",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

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
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,end_date,employment_type,employment_contract_type,change_reason,grade,work_time,payroll_code,fte,created_at,updated_at,start_date,active,department,team,cost_center,cost_centers,division,job,type,contract_type,manager",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployeeEmployment failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployeeSkill

Get Employee Skill

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employee_skill" method="get" path="/unified/hris/employees/{id}/skills/{subResourceId}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeeSkill({
    fields: "id,remote_id,name,active,language,maximum_proficiency,minimum_proficiency",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployeeSkill } from "@stackone/stackone-client-ts/funcs/hrisGetEmployeeSkill.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployeeSkill(stackOne, {
    fields: "id,remote_id,name,active,language,maximum_proficiency,minimum_proficiency",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployeeSkill failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeeSkillRequest](../../sdk/models/operations/hrisgetemployeeskillrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmployeeSkillResponse](../../sdk/models/operations/hrisgetemployeeskillresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployeeTask

Get Employee Task

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employee_task" method="get" path="/unified/hris/employees/{id}/tasks/{subResourceId}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeeTask({
    expand: "attachments",
    fields: "id,remote_id,employee_id,remote_employee_id,name,description,type,status,due_date,completion_date,assigned_by_employee_id,remote_assigned_by_employee_id,assigned_by_employee_name,link_to_task,extracted_links,next_task_id,remote_next_task_id,parent_process_name,comments,attachments,created_at,updated_at",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployeeTask } from "@stackone/stackone-client-ts/funcs/hrisGetEmployeeTask.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployeeTask(stackOne, {
    expand: "attachments",
    fields: "id,remote_id,employee_id,remote_employee_id,name,description,type,status,due_date,completion_date,assigned_by_employee_id,remote_assigned_by_employee_id,assigned_by_employee_name,link_to_task,extracted_links,next_task_id,remote_next_task_id,parent_process_name,comments,attachments,created_at,updated_at",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployeeTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeeTaskRequest](../../sdk/models/operations/hrisgetemployeetaskrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmployeeTaskResponse](../../sdk/models/operations/hrisgetemployeetaskresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployeeTimeOffBalance

Get Employee Time Off Balance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employee_time_off_balance" method="get" path="/unified/hris/employees/{id}/time_off_balances/{subResourceId}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getEmployeeTimeOffBalance({
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,policy_id,remote_policy_id,policy,current_balance,initial_balance,balance_unit,balance_start_date,balance_expiry_date,updated_at",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetEmployeeTimeOffBalance } from "@stackone/stackone-client-ts/funcs/hrisGetEmployeeTimeOffBalance.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetEmployeeTimeOffBalance(stackOne, {
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,policy_id,remote_policy_id,policy,current_balance,initial_balance,balance_unit,balance_start_date,balance_expiry_date,updated_at",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployeeTimeOffBalance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetEmployeeTimeOffBalanceRequest](../../sdk/models/operations/hrisgetemployeetimeoffbalancerequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetEmployeeTimeOffBalanceResponse](../../sdk/models/operations/hrisgetemployeetimeoffbalanceresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployeesTimeOffRequest

Get Employees Time Off Request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employees_time_off_request" method="get" path="/unified/hris/employees/{id}/time_off/{subResourceId}" -->
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
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,time_off_policy_id,remote_time_off_policy_id,reason,comment,duration,created_at,updated_at,policy",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

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
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,time_off_policy_id,remote_time_off_policy_id,reason,comment,duration,created_at,updated_at,policy",
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployeesTimeOffRequest failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployeesWorkEligibility

Get Employees Work Eligibility

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employees_work_eligibility" method="get" path="/unified/hris/employees/{id}/work_eligibility/{subResourceId}" -->
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
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

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
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployeesWorkEligibility failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getEmployment

Get Employment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_employment" method="get" path="/unified/hris/employments/{id}" -->
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
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,end_date,employment_type,employment_contract_type,change_reason,grade,work_time,payroll_code,fte,created_at,updated_at,start_date,active,department,team,cost_center,cost_centers,division,job,type,contract_type,manager",
    id: "<id>",
    xAccountId: "<id>",
  });

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
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,end_date,employment_type,employment_contract_type,change_reason,grade,work_time,payroll_code,fte,created_at,updated_at,start_date,active,department,team,cost_center,cost_centers,division,job,type,contract_type,manager",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetEmployment failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getGroup

Get Group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_group" method="get" path="/unified/hris/groups/{id}" -->
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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    id: "<id>",
    xAccountId: "<id>",
  });

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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetGroup failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getJob

Get Job

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_job" method="get" path="/unified/hris/jobs/{id}" -->
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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    id: "<id>",
    xAccountId: "<id>",
  });

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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetJob failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getLocation

Get Work Location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_location" method="get" path="/unified/hris/locations/{id}" -->
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
    xAccountId: "<id>",
  });

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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetLocation failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getPosition

Get Position

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_position" method="get" path="/unified/hris/positions/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getPosition({
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetPosition } from "@stackone/stackone-client-ts/funcs/hrisGetPosition.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetPosition(stackOne, {
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetPosition failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetPositionRequest](../../sdk/models/operations/hrisgetpositionrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetPositionResponse](../../sdk/models/operations/hrisgetpositionresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getShift

Get Shift

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_shift" method="get" path="/unified/hris/shifts/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getShift({
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetShift } from "@stackone/stackone-client-ts/funcs/hrisGetShift.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetShift(stackOne, {
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetShift failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetShiftRequest](../../sdk/models/operations/hrisgetshiftrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetShiftResponse](../../sdk/models/operations/hrisgetshiftresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getTask

Get Task

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_task" method="get" path="/unified/hris/tasks/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getTask({
    expand: "attachments",
    fields: "id,remote_id,employee_id,remote_employee_id,name,description,type,status,due_date,completion_date,assigned_by_employee_id,remote_assigned_by_employee_id,assigned_by_employee_name,link_to_task,extracted_links,next_task_id,remote_next_task_id,parent_process_name,comments,attachments,created_at,updated_at",
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetTask } from "@stackone/stackone-client-ts/funcs/hrisGetTask.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetTask(stackOne, {
    expand: "attachments",
    fields: "id,remote_id,employee_id,remote_employee_id,name,description,type,status,due_date,completion_date,assigned_by_employee_id,remote_assigned_by_employee_id,assigned_by_employee_name,link_to_task,extracted_links,next_task_id,remote_next_task_id,parent_process_name,comments,attachments,created_at,updated_at",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetTaskRequest](../../sdk/models/operations/hrisgettaskrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetTaskResponse](../../sdk/models/operations/hrisgettaskresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getTeamGroup

Get Team Group

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_team_group" method="get" path="/unified/hris/groups/teams/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getTeamGroup({
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetTeamGroup } from "@stackone/stackone-client-ts/funcs/hrisGetTeamGroup.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetTeamGroup(stackOne, {
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetTeamGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetTeamGroupRequest](../../sdk/models/operations/hrisgetteamgrouprequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetTeamGroupResponse](../../sdk/models/operations/hrisgetteamgroupresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getTimeEntries

Get Time Entry

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_time_entries" method="get" path="/unified/hris/time_entries/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getTimeEntries({
    fields: "id,remote_id,employee_id,remote_employee_id,start_time,end_time,hours_worked,break_duration,labor_type,location,status,created_at,updated_at",
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetTimeEntries } from "@stackone/stackone-client-ts/funcs/hrisGetTimeEntries.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetTimeEntries(stackOne, {
    fields: "id,remote_id,employee_id,remote_employee_id,start_time,end_time,hours_worked,break_duration,labor_type,location,status,created_at,updated_at",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetTimeEntries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetTimeEntriesRequest](../../sdk/models/operations/hrisgettimeentriesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetTimeEntriesResponse](../../sdk/models/operations/hrisgettimeentriesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getTimeOffPolicy

Get Time Off Policy

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_time_off_policy" method="get" path="/unified/hris/time_off_policies/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getTimeOffPolicy({
    fields: "id,remote_id,name,description,type,duration_unit,reasons,updated_at,created_at",
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetTimeOffPolicy } from "@stackone/stackone-client-ts/funcs/hrisGetTimeOffPolicy.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetTimeOffPolicy(stackOne, {
    fields: "id,remote_id,name,description,type,duration_unit,reasons,updated_at,created_at",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetTimeOffPolicy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetTimeOffPolicyRequest](../../sdk/models/operations/hrisgettimeoffpolicyrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetTimeOffPolicyResponse](../../sdk/models/operations/hrisgettimeoffpolicyresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getTimeOffRequest

Get time off request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_time_off_request" method="get" path="/unified/hris/time_off/{id}" -->
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
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,time_off_policy_id,remote_time_off_policy_id,reason,comment,duration,created_at,updated_at,policy",
    id: "<id>",
    xAccountId: "<id>",
  });

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
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,time_off_policy_id,remote_time_off_policy_id,reason,comment,duration,created_at,updated_at,policy",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetTimeOffRequest failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## ~~getTimeOffType~~

Get time off type

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_get_time_off_type" method="get" path="/unified/hris/time_off_types/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.getTimeOffType({
    fields: "id,remote_id,name,active",
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisGetTimeOffType } from "@stackone/stackone-client-ts/funcs/hrisGetTimeOffType.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisGetTimeOffType(stackOne, {
    fields: "id,remote_id,name,active",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisGetTimeOffType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisGetTimeOffTypeRequest](../../sdk/models/operations/hrisgettimeofftyperequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisGetTimeOffTypeResponse](../../sdk/models/operations/hrisgettimeofftyperesponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## inviteEmployee

Invite Employee

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_invite_employee" method="post" path="/unified/hris/employees/{id}/invite" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.inviteEmployee({
    hrisInviteEmployeeRequestDto: {
      passthrough: {
        "other_known_names": "John Doe",
      },
    },
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisInviteEmployee } from "@stackone/stackone-client-ts/funcs/hrisInviteEmployee.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisInviteEmployee(stackOne, {
    hrisInviteEmployeeRequestDto: {
      passthrough: {
        "other_known_names": "John Doe",
      },
    },
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisInviteEmployee failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisInviteEmployeeRequest](../../sdk/models/operations/hrisinviteemployeerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisInviteEmployeeResponse](../../sdk/models/operations/hrisinviteemployeeresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listBenefits

List benefits

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_benefits" method="get" path="/unified/hris/benefits" -->
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
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListBenefits failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listCompanies

List Companies

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_companies" method="get" path="/unified/hris/companies" -->
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
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListCompanies failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listCompaniesGroups

List Companies Groups

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_companies_groups" method="get" path="/unified/hris/groups/companies" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listCompaniesGroups({
    fields: "id,remote_id,name,full_name,display_name,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListCompaniesGroups } from "@stackone/stackone-client-ts/funcs/hrisListCompaniesGroups.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListCompaniesGroups(stackOne, {
    fields: "id,remote_id,name,full_name,display_name,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListCompaniesGroups failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListCompaniesGroupsRequest](../../sdk/models/operations/hrislistcompaniesgroupsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListCompaniesGroupsResponse](../../sdk/models/operations/hrislistcompaniesgroupsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listCostCenterGroups

List Cost Center Groups

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_cost_center_groups" method="get" path="/unified/hris/groups/cost_centers" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listCostCenterGroups({
    fields: "id,remote_id,name,type,distribution_percentage,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListCostCenterGroups } from "@stackone/stackone-client-ts/funcs/hrisListCostCenterGroups.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListCostCenterGroups(stackOne, {
    fields: "id,remote_id,name,type,distribution_percentage,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListCostCenterGroups failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListCostCenterGroupsRequest](../../sdk/models/operations/hrislistcostcentergroupsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListCostCenterGroupsResponse](../../sdk/models/operations/hrislistcostcentergroupsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listDepartmentGroups

List Department Groups

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_department_groups" method="get" path="/unified/hris/groups/departments" -->
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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListDepartmentGroups failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listDivisionGroups

List Division Groups

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_division_groups" method="get" path="/unified/hris/groups/divisions" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listDivisionGroups({
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListDivisionGroups } from "@stackone/stackone-client-ts/funcs/hrisListDivisionGroups.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListDivisionGroups(stackOne, {
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListDivisionGroups failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListDivisionGroupsRequest](../../sdk/models/operations/hrislistdivisiongroupsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListDivisionGroupsResponse](../../sdk/models/operations/hrislistdivisiongroupsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployeeCategories

List Employee Document Categories

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employee_categories" method="get" path="/unified/hris/documents/employee_categories" -->
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
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployeeCategories failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployeeCustomFieldDefinitions

List employee Custom Field Definitions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employee_custom_field_definitions" method="get" path="/unified/hris/custom_field_definitions/employees" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeCustomFieldDefinitions({
    fields: "id,remote_id,name,description,type,options",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployeeCustomFieldDefinitions } from "@stackone/stackone-client-ts/funcs/hrisListEmployeeCustomFieldDefinitions.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployeeCustomFieldDefinitions(stackOne, {
    fields: "id,remote_id,name,description,type,options",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployeeCustomFieldDefinitions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeCustomFieldDefinitionsRequest](../../sdk/models/operations/hrislistemployeecustomfielddefinitionsrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeeCustomFieldDefinitionsResponse](../../sdk/models/operations/hrislistemployeecustomfielddefinitionsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployeeDocuments

List Employee Documents

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employee_documents" method="get" path="/unified/hris/employees/{id}/documents" -->
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
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployeeDocuments failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployeeEmployments

List Employee Employments

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employee_employments" method="get" path="/unified/hris/employees/{id}/employments" -->
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
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,end_date,employment_type,employment_contract_type,change_reason,grade,work_time,payroll_code,fte,created_at,updated_at,start_date,active,department,team,cost_center,cost_centers,division,job,type,contract_type,manager",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,end_date,employment_type,employment_contract_type,change_reason,grade,work_time,payroll_code,fte,created_at,updated_at,start_date,active,department,team,cost_center,cost_centers,division,job,type,contract_type,manager",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployeeEmployments failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployeeSkills

List Employee Skills

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employee_skills" method="get" path="/unified/hris/employees/{id}/skills" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeSkills({
    fields: "id,remote_id,name,active,language,maximum_proficiency,minimum_proficiency",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployeeSkills } from "@stackone/stackone-client-ts/funcs/hrisListEmployeeSkills.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployeeSkills(stackOne, {
    fields: "id,remote_id,name,active,language,maximum_proficiency,minimum_proficiency",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployeeSkills failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeSkillsRequest](../../sdk/models/operations/hrislistemployeeskillsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeeSkillsResponse](../../sdk/models/operations/hrislistemployeeskillsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployeeTasks

List Employee Tasks

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employee_tasks" method="get" path="/unified/hris/employees/{id}/tasks" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeTasks({
    expand: "attachments",
    fields: "id,remote_id,employee_id,remote_employee_id,name,description,type,status,due_date,completion_date,assigned_by_employee_id,remote_assigned_by_employee_id,assigned_by_employee_name,link_to_task,extracted_links,next_task_id,remote_next_task_id,parent_process_name,comments,attachments,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployeeTasks } from "@stackone/stackone-client-ts/funcs/hrisListEmployeeTasks.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployeeTasks(stackOne, {
    expand: "attachments",
    fields: "id,remote_id,employee_id,remote_employee_id,name,description,type,status,due_date,completion_date,assigned_by_employee_id,remote_assigned_by_employee_id,assigned_by_employee_name,link_to_task,extracted_links,next_task_id,remote_next_task_id,parent_process_name,comments,attachments,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployeeTasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeTasksRequest](../../sdk/models/operations/hrislistemployeetasksrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeeTasksResponse](../../sdk/models/operations/hrislistemployeetasksresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployeeTimeOffBalances

List Employee Time Off Balances

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employee_time_off_balances" method="get" path="/unified/hris/employees/{id}/time_off_balances" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeTimeOffBalances({
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,policy_id,remote_policy_id,policy,current_balance,initial_balance,balance_unit,balance_start_date,balance_expiry_date,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployeeTimeOffBalances } from "@stackone/stackone-client-ts/funcs/hrisListEmployeeTimeOffBalances.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployeeTimeOffBalances(stackOne, {
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,policy_id,remote_policy_id,policy,current_balance,initial_balance,balance_unit,balance_start_date,balance_expiry_date,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployeeTimeOffBalances failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeTimeOffBalancesRequest](../../sdk/models/operations/hrislistemployeetimeoffbalancesrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeeTimeOffBalancesResponse](../../sdk/models/operations/hrislistemployeetimeoffbalancesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployeeTimeOffPolicies

List Assigned Time Off Policies

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employee_time_off_policies" method="get" path="/unified/hris/employees/{id}/time_off_policies" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listEmployeeTimeOffPolicies({
    fields: "id,remote_id,name,description,type,duration_unit,reasons,updated_at,created_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployeeTimeOffPolicies } from "@stackone/stackone-client-ts/funcs/hrisListEmployeeTimeOffPolicies.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployeeTimeOffPolicies(stackOne, {
    fields: "id,remote_id,name,description,type,duration_unit,reasons,updated_at,created_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployeeTimeOffPolicies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListEmployeeTimeOffPoliciesRequest](../../sdk/models/operations/hrislistemployeetimeoffpoliciesrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListEmployeeTimeOffPoliciesResponse](../../sdk/models/operations/hrislistemployeetimeoffpoliciesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployeeTimeOffRequests

List Employee Time Off Requests

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employee_time_off_requests" method="get" path="/unified/hris/employees/{id}/time_off" -->
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
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,time_off_policy_id,remote_time_off_policy_id,reason,comment,duration,created_at,updated_at,policy",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,time_off_policy_id,remote_time_off_policy_id,reason,comment,duration,created_at,updated_at,policy",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployeeTimeOffRequests failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployeeWorkEligibility

List Employee Work Eligibility

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employee_work_eligibility" method="get" path="/unified/hris/employees/{id}/work_eligibility" -->
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
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployeeWorkEligibility failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployees

List Employees

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employees" method="get" path="/unified/hris/employees" -->
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
    expand: "company,employments,work_location,home_location,groups,skills",
    fields: "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,company,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,company_id,remote_company_id,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,benefits,employee_number,national_identity_number,national_identity_numbers,skills",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
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
    expand: "company,employments,work_location,home_location,groups,skills",
    fields: "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,company,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,company_id,remote_company_id,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,benefits,employee_number,national_identity_number,national_identity_numbers,skills",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployees failed:", res.error);
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listEmployments

List Employments

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_employments" method="get" path="/unified/hris/employments" -->
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
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,end_date,employment_type,employment_contract_type,change_reason,grade,work_time,payroll_code,fte,created_at,updated_at,start_date,active,department,team,cost_center,cost_centers,division,job,type,contract_type,manager",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    fields: "id,remote_id,employee_id,remote_employee_id,job_title,pay_rate,pay_period,pay_frequency,pay_currency,effective_date,end_date,employment_type,employment_contract_type,change_reason,grade,work_time,payroll_code,fte,created_at,updated_at,start_date,active,department,team,cost_center,cost_centers,division,job,type,contract_type,manager",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListEmployments failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listGroups

List Groups

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_groups" method="get" path="/unified/hris/groups" -->
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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListGroups failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listJobs

List Jobs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_jobs" method="get" path="/unified/hris/jobs" -->
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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids,company_id,remote_company_id",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListJobs failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listLocations

List Work Locations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_locations" method="get" path="/unified/hris/locations" -->
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
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListLocations failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listPositions

List Positions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_positions" method="get" path="/unified/hris/positions" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { QueryParamStatus } from "@stackone/stackone-client-ts/sdk/models/operations";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listPositions({
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    status: QueryParamStatus.Open,
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListPositions } from "@stackone/stackone-client-ts/funcs/hrisListPositions.js";
import { QueryParamStatus } from "@stackone/stackone-client-ts/sdk/models/operations";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListPositions(stackOne, {
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    status: QueryParamStatus.Open,
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListPositions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListPositionsRequest](../../sdk/models/operations/hrislistpositionsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListPositionsResponse](../../sdk/models/operations/hrislistpositionsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listShifts

List Shifts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_shifts" method="get" path="/unified/hris/shifts" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listShifts({
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListShifts } from "@stackone/stackone-client-ts/funcs/hrisListShifts.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListShifts(stackOne, {
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListShifts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListShiftsRequest](../../sdk/models/operations/hrislistshiftsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListShiftsResponse](../../sdk/models/operations/hrislistshiftsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listTasks

List Tasks

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_tasks" method="get" path="/unified/hris/tasks" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listTasks({
    expand: "attachments",
    fields: "id,remote_id,employee_id,remote_employee_id,name,description,type,status,due_date,completion_date,assigned_by_employee_id,remote_assigned_by_employee_id,assigned_by_employee_name,link_to_task,extracted_links,next_task_id,remote_next_task_id,parent_process_name,comments,attachments,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListTasks } from "@stackone/stackone-client-ts/funcs/hrisListTasks.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListTasks(stackOne, {
    expand: "attachments",
    fields: "id,remote_id,employee_id,remote_employee_id,name,description,type,status,due_date,completion_date,assigned_by_employee_id,remote_assigned_by_employee_id,assigned_by_employee_name,link_to_task,extracted_links,next_task_id,remote_next_task_id,parent_process_name,comments,attachments,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListTasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListTasksRequest](../../sdk/models/operations/hrislisttasksrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListTasksResponse](../../sdk/models/operations/hrislisttasksresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listTeamGroups

List Team Groups

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_team_groups" method="get" path="/unified/hris/groups/teams" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listTeamGroups({
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListTeamGroups } from "@stackone/stackone-client-ts/funcs/hrisListTeamGroups.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListTeamGroups(stackOne, {
    fields: "id,remote_id,name,type,parent_ids,remote_parent_ids,owner_ids,remote_owner_ids",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListTeamGroups failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListTeamGroupsRequest](../../sdk/models/operations/hrislistteamgroupsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListTeamGroupsResponse](../../sdk/models/operations/hrislistteamgroupsresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listTimeEntries

List Time Entries

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_time_entries" method="get" path="/unified/hris/time_entries" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listTimeEntries({
    fields: "id,remote_id,employee_id,remote_employee_id,start_time,end_time,hours_worked,break_duration,labor_type,location,status,created_at,updated_at",
    filter: {
      endTime: "2020-01-01T00:00:00.000Z",
      startTime: "2020-01-01T00:00:00.000Z",
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListTimeEntries } from "@stackone/stackone-client-ts/funcs/hrisListTimeEntries.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListTimeEntries(stackOne, {
    fields: "id,remote_id,employee_id,remote_employee_id,start_time,end_time,hours_worked,break_duration,labor_type,location,status,created_at,updated_at",
    filter: {
      endTime: "2020-01-01T00:00:00.000Z",
      startTime: "2020-01-01T00:00:00.000Z",
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListTimeEntries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListTimeEntriesRequest](../../sdk/models/operations/hrislisttimeentriesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListTimeEntriesResponse](../../sdk/models/operations/hrislisttimeentriesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listTimeOffPolicies

List Time Off Policies

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_time_off_policies" method="get" path="/unified/hris/time_off_policies" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listTimeOffPolicies({
    fields: "id,remote_id,name,description,type,duration_unit,reasons,updated_at,created_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListTimeOffPolicies } from "@stackone/stackone-client-ts/funcs/hrisListTimeOffPolicies.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListTimeOffPolicies(stackOne, {
    fields: "id,remote_id,name,description,type,duration_unit,reasons,updated_at,created_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListTimeOffPolicies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListTimeOffPoliciesRequest](../../sdk/models/operations/hrislisttimeoffpoliciesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListTimeOffPoliciesResponse](../../sdk/models/operations/hrislisttimeoffpoliciesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listTimeOffRequests

List time off requests

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_time_off_requests" method="get" path="/unified/hris/time_off" -->
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
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,time_off_policy_id,remote_time_off_policy_id,reason,comment,duration,created_at,updated_at,policy",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
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
    expand: "policy",
    fields: "id,remote_id,employee_id,remote_employee_id,approver_id,remote_approver_id,status,type,start_date,end_date,start_half_day,end_half_day,time_off_policy_id,remote_time_off_policy_id,reason,comment,duration,created_at,updated_at,policy",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListTimeOffRequests failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## ~~listTimeOffTypes~~

List time off types

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_list_time_off_types" method="get" path="/unified/hris/time_off_types" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.listTimeOffTypes({
    fields: "id,remote_id,name,active",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListTimeOffTypes } from "@stackone/stackone-client-ts/funcs/hrisListTimeOffTypes.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListTimeOffTypes(stackOne, {
    fields: "id,remote_id,name,active",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("hrisListTimeOffTypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisListTimeOffTypesRequest](../../sdk/models/operations/hrislisttimeofftypesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisListTimeOffTypesResponse](../../sdk/models/operations/hrislisttimeofftypesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## updateEmployee

Updates an employee

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_update_employee" method="patch" path="/unified/hris/employees/{id}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  CountryCodeEnumValue,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentPayPeriodValue,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentValue,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue,
  HrisUpdateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisUpdateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisUpdateEmployeeRequestDtoSchemasWorkLocationValue,
  NationalIdentityNumberApiModelSchemasValue,
  NationalIdentityNumberApiModelValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.updateEmployee({
    hrisUpdateEmployeeRequestDto: {
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
      companyId: "1234567890",
      customFields: [
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00:00.000Z"),
      department: "Physics",
      departmentId: "3093",
      displayName: "Sir Isaac Newton",
      employeeNumber: "125",
      employment: {
        endDate: new Date("2021-01-01T01:01:01.000Z"),
        grade: {
          description: "Mid-level employee demonstrating proficiency and autonomy.",
          id: "1687-3",
          name: "1687-4",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
        jobTitle: "Software Engineer",
        passthrough: {
          "other_known_names": "John Doe",
        },
        payCurrency: "USD",
        payFrequency: {
          sourceValue: "Hourly",
          value: HrisUpdateEmployeeRequestDtoSchemasEmploymentValue.Hourly,
        },
        payPeriod: {
          sourceValue: "Hour",
          value: HrisUpdateEmployeeRequestDtoSchemasEmploymentPayPeriodValue.Hour,
        },
        payRate: "40.00",
        payrollCode: "PC1",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        workTime: {
          duration: "P0Y0M0DT8H0M0S",
          durationUnit: {
            value: HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month,
          },
        },
      },
      employmentStatus: {},
      ethnicity: {},
      firstName: "Isaac",
      gender: {},
      hireDate: new Date("2021-01-01T00:00:00.000Z"),
      homeLocation: {
        city: "Grantham",
        country: {
          value: HrisUpdateEmployeeRequestDtoSchemasHomeLocationValue.Us,
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
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {},
      name: "Isaac Newton",
      nationalIdentityNumbers: [
        {
          country: {
            value: NationalIdentityNumberApiModelValue.Us,
          },
          type: {
            value: NationalIdentityNumberApiModelSchemasValue.Ssn,
          },
          value: "123456789",
        },
      ],
      passthrough: {
        "other_known_names": "John Doe",
      },
      personalEmail: "isaac.newton@example.com",
      personalPhoneNumber: "+1234567890",
      preferredLanguage: {
        value: HrisUpdateEmployeeRequestDtoSchemasPreferredLanguageValue.Eng,
      },
      startDate: new Date("2021-01-01T00:00:00.000Z"),
      teamId: "2913",
      terminationDate: new Date("2021-01-01T00:00:00Z"),
      workEmail: "newton@example.com",
      workLocation: {
        city: "Grantham",
        country: {
          value: HrisUpdateEmployeeRequestDtoSchemasWorkLocationValue.Us,
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
    xAccountId: "<id>",
  });

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
  HrisUpdateEmployeeRequestDtoSchemasEmploymentPayPeriodValue,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentValue,
  HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue,
  HrisUpdateEmployeeRequestDtoSchemasHomeLocationValue,
  HrisUpdateEmployeeRequestDtoSchemasPreferredLanguageValue,
  HrisUpdateEmployeeRequestDtoSchemasWorkLocationValue,
  NationalIdentityNumberApiModelSchemasValue,
  NationalIdentityNumberApiModelValue,
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
    hrisUpdateEmployeeRequestDto: {
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
      companyId: "1234567890",
      customFields: [
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
      ],
      dateOfBirth: new Date("1990-01-01T00:00:00.000Z"),
      department: "Physics",
      departmentId: "3093",
      displayName: "Sir Isaac Newton",
      employeeNumber: "125",
      employment: {
        endDate: new Date("2021-01-01T01:01:01.000Z"),
        grade: {
          description: "Mid-level employee demonstrating proficiency and autonomy.",
          id: "1687-3",
          name: "1687-4",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
        jobTitle: "Software Engineer",
        passthrough: {
          "other_known_names": "John Doe",
        },
        payCurrency: "USD",
        payFrequency: {
          sourceValue: "Hourly",
          value: HrisUpdateEmployeeRequestDtoSchemasEmploymentValue.Hourly,
        },
        payPeriod: {
          sourceValue: "Hour",
          value: HrisUpdateEmployeeRequestDtoSchemasEmploymentPayPeriodValue.Hour,
        },
        payRate: "40.00",
        payrollCode: "PC1",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        workTime: {
          duration: "P0Y0M0DT8H0M0S",
          durationUnit: {
            value: HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month,
          },
        },
      },
      employmentStatus: {},
      ethnicity: {},
      firstName: "Isaac",
      gender: {},
      hireDate: new Date("2021-01-01T00:00:00.000Z"),
      homeLocation: {
        city: "Grantham",
        country: {
          value: HrisUpdateEmployeeRequestDtoSchemasHomeLocationValue.Us,
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
      jobTitle: "Physicist",
      lastName: "Newton",
      managerId: "67890",
      maritalStatus: {},
      name: "Isaac Newton",
      nationalIdentityNumbers: [
        {
          country: {
            value: NationalIdentityNumberApiModelValue.Us,
          },
          type: {
            value: NationalIdentityNumberApiModelSchemasValue.Ssn,
          },
          value: "123456789",
        },
      ],
      passthrough: {
        "other_known_names": "John Doe",
      },
      personalEmail: "isaac.newton@example.com",
      personalPhoneNumber: "+1234567890",
      preferredLanguage: {
        value: HrisUpdateEmployeeRequestDtoSchemasPreferredLanguageValue.Eng,
      },
      startDate: new Date("2021-01-01T00:00:00.000Z"),
      teamId: "2913",
      terminationDate: new Date("2021-01-01T00:00:00Z"),
      workEmail: "newton@example.com",
      workLocation: {
        city: "Grantham",
        country: {
          value: HrisUpdateEmployeeRequestDtoSchemasWorkLocationValue.Us,
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
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateEmployee failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## updateEmployeeEmployment

Update Employee Employment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_update_employee_employment" method="patch" path="/unified/hris/employees/{id}/employments/{subResourceId}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  HrisUpdateEmploymentRequestDtoSchemasPayFrequencyValue,
  HrisUpdateEmploymentRequestDtoSchemasPayPeriodValue,
  HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.updateEmployeeEmployment({
    hrisUpdateEmploymentRequestDto: {
      effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      grade: {
        description: "Mid-level employee demonstrating proficiency and autonomy.",
        id: "1687-3",
        name: "1687-4",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      jobTitle: "Software Engineer",
      passthrough: {
        "other_known_names": "John Doe",
      },
      payCurrency: "USD",
      payFrequency: {
        sourceValue: "Hourly",
        value: HrisUpdateEmploymentRequestDtoSchemasPayFrequencyValue.Hourly,
      },
      payPeriod: {
        sourceValue: "Hour",
        value: HrisUpdateEmploymentRequestDtoSchemasPayPeriodValue.Hour,
      },
      payRate: "40.00",
      payrollCode: "PC1",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      workTime: {
        duration: "P0Y0M0DT8H0M0S",
        durationUnit: {
          value: HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue.Month,
        },
      },
    },
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisUpdateEmployeeEmployment } from "@stackone/stackone-client-ts/funcs/hrisUpdateEmployeeEmployment.js";
import {
  HrisUpdateEmploymentRequestDtoSchemasPayFrequencyValue,
  HrisUpdateEmploymentRequestDtoSchemasPayPeriodValue,
  HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue,
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
  const res = await hrisUpdateEmployeeEmployment(stackOne, {
    hrisUpdateEmploymentRequestDto: {
      effectiveDate: new Date("2021-01-01T01:01:01.000Z"),
      endDate: new Date("2021-01-01T01:01:01.000Z"),
      grade: {
        description: "Mid-level employee demonstrating proficiency and autonomy.",
        id: "1687-3",
        name: "1687-4",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      jobTitle: "Software Engineer",
      passthrough: {
        "other_known_names": "John Doe",
      },
      payCurrency: "USD",
      payFrequency: {
        sourceValue: "Hourly",
        value: HrisUpdateEmploymentRequestDtoSchemasPayFrequencyValue.Hourly,
      },
      payPeriod: {
        sourceValue: "Hour",
        value: HrisUpdateEmploymentRequestDtoSchemasPayPeriodValue.Hour,
      },
      payRate: "40.00",
      payrollCode: "PC1",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      workTime: {
        duration: "P0Y0M0DT8H0M0S",
        durationUnit: {
          value: HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue.Month,
        },
      },
    },
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateEmployeeEmployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisUpdateEmployeeEmploymentRequest](../../sdk/models/operations/hrisupdateemployeeemploymentrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisUpdateEmployeeEmploymentResponse](../../sdk/models/operations/hrisupdateemployeeemploymentresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## updateEmployeeTimeOffRequest

Update Employee Time Off Request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_update_employee_time_off_request" method="patch" path="/unified/hris/employees/{id}/time_off/{subResourceId}" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.hris.updateEmployeeTimeOffRequest({
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      comment: "Taking a day off for personal reasons",
      endDate: "2021-01-01T01:01:01.000",
      endHalfDay: true,
      passthrough: {
        "other_known_names": "John Doe",
      },
      reason: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      startDate: "2021-01-01T01:01:01.000",
      startHalfDay: true,
      timeOffPolicyId: "cx280928933",
    },
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisUpdateEmployeeTimeOffRequest } from "@stackone/stackone-client-ts/funcs/hrisUpdateEmployeeTimeOffRequest.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisUpdateEmployeeTimeOffRequest(stackOne, {
    hrisCreateTimeOffRequestDto: {
      approverId: "1687-4",
      comment: "Taking a day off for personal reasons",
      endDate: "2021-01-01T01:01:01.000",
      endHalfDay: true,
      passthrough: {
        "other_known_names": "John Doe",
      },
      reason: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      startDate: "2021-01-01T01:01:01.000",
      startHalfDay: true,
      timeOffPolicyId: "cx280928933",
    },
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateEmployeeTimeOffRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HrisUpdateEmployeeTimeOffRequestRequest](../../sdk/models/operations/hrisupdateemployeetimeoffrequestrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.HrisUpdateEmployeeTimeOffRequestResponse](../../sdk/models/operations/hrisupdateemployeetimeoffrequestresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## updateEmployeeWorkEligibilityRequest

Update Employee Work Eligibility Request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_update_employee_work_eligibility_request" method="patch" path="/unified/hris/employees/{id}/work_eligibility/{subResourceId}" -->
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
          sourceValue: "application/pdf",
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
      validFrom: new Date("2021-01-01T00:00:00.000Z"),
      validTo: new Date("2021-01-01T00:00:00.000Z"),
    },
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

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
          sourceValue: "application/pdf",
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
      validFrom: new Date("2021-01-01T00:00:00.000Z"),
      validTo: new Date("2021-01-01T00:00:00.000Z"),
    },
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUpdateEmployeeWorkEligibilityRequest failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## uploadEmployeeDocument

Upload Employee Document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hris_upload_employee_document" method="post" path="/unified/hris/employees/{id}/documents/upload" -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import {
  HrisDocumentsUploadRequestDtoSchemasFileFormatValue,
  HrisDocumentsUploadRequestDtoSchemasValue,
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
      category: {},
      categoryId: "6530",
      confidential: {
        sourceValue: "public",
        value: HrisDocumentsUploadRequestDtoSchemasValue.True,
      },
      content: "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
      fileFormat: {
        sourceValue: "application/pdf",
        value: HrisDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
      },
      name: "weather-forecast",
      path: "/path/to/file",
    },
    id: "<id>",
    xAccountId: "<id>",
  });

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
      category: {},
      categoryId: "6530",
      confidential: {
        sourceValue: "public",
        value: HrisDocumentsUploadRequestDtoSchemasValue.True,
      },
      content: "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
      fileFormat: {
        sourceValue: "application/pdf",
        value: HrisDocumentsUploadRequestDtoSchemasFileFormatValue.Pdf,
      },
      name: "weather-forecast",
      path: "/path/to/file",
    },
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hrisUploadEmployeeDocument failed:", res.error);
  }
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

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |
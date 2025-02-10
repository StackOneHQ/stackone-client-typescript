# @stackone/stackone-client-ts

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>    
</div>

<!-- Start Summary [summary] -->
## Summary

LMS: The documentation for the StackOne Unified API - LMS
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@stackone/stackone-client-ts](#stackonestackone-client-ts)
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Pagination](#pagination)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Requirements](#requirements)
  * [Retries](#retries)
  * [Standalone functions](#standalone-functions)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @stackone/stackone-client-ts
```

### PNPM

```bash
pnpm add @stackone/stackone-client-ts
```

### Bun

```bash
bun add @stackone/stackone-client-ts
```

### Yarn

```bash
yarn add @stackone/stackone-client-ts zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### List Employees

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
    expand: "company,employments,work_location,home_location,groups",
    fields:
      "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,benefits,company,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,employee_number,national_identity_number",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accounts](docs/sdks/accounts/README.md)

* [deleteAccount](docs/sdks/accounts/README.md#deleteaccount) - Delete Account
* [getAccount](docs/sdks/accounts/README.md#getaccount) - Get Account
* [getAccountMetaInfo](docs/sdks/accounts/README.md#getaccountmetainfo) - Get meta information of the account
* [listLinkedAccounts](docs/sdks/accounts/README.md#listlinkedaccounts) - List Accounts
* [updateAccount](docs/sdks/accounts/README.md#updateaccount) - Update Account

### [ats](docs/sdks/ats/README.md)

* [createApplication](docs/sdks/ats/README.md#createapplication) - Create Application
* [createApplicationNote](docs/sdks/ats/README.md#createapplicationnote) - Create Application Note
* [createBackgroundCheckPackage](docs/sdks/ats/README.md#createbackgroundcheckpackage) - Create Background Check Package
* [createCandidate](docs/sdks/ats/README.md#createcandidate) - Create Candidate
* [createCandidateNote](docs/sdks/ats/README.md#createcandidatenote) - Create Candidate Note
* [createJob](docs/sdks/ats/README.md#createjob) - Create Job
* [createOffer](docs/sdks/ats/README.md#createoffer) - Creates an offer
* [downloadApplicationDocument](docs/sdks/ats/README.md#downloadapplicationdocument) - Download Application Document
* [getApplication](docs/sdks/ats/README.md#getapplication) - Get Application
* [getApplicationCustomFieldDefinition](docs/sdks/ats/README.md#getapplicationcustomfielddefinition) - Get Application Custom Field Definition
* [getApplicationDocument](docs/sdks/ats/README.md#getapplicationdocument) - Get Application Document
* [getApplicationNote](docs/sdks/ats/README.md#getapplicationnote) - Get Application Note
* [getApplicationOffer](docs/sdks/ats/README.md#getapplicationoffer) - Get Application Offer
* [getApplicationScheduledInterview](docs/sdks/ats/README.md#getapplicationscheduledinterview) - Get Applications scheduled interview
* [getApplicationScorecard](docs/sdks/ats/README.md#getapplicationscorecard) - Get Application Scorecard
* [getAssessmentsPackage](docs/sdks/ats/README.md#getassessmentspackage) - Get Assessments Package
* [getAssessmentsRequest](docs/sdks/ats/README.md#getassessmentsrequest) - Get Assessments Requests
* [getAssessmentsResult](docs/sdks/ats/README.md#getassessmentsresult) - Get Assessments Results
* [getBackgroundCheckPackage](docs/sdks/ats/README.md#getbackgroundcheckpackage) - Get Background Check Package
* [getBackgroundCheckRequest](docs/sdks/ats/README.md#getbackgroundcheckrequest) - Get Background Check Request
* [getBackgroundCheckResult](docs/sdks/ats/README.md#getbackgroundcheckresult) - Get Background Check Results
* [getCandidate](docs/sdks/ats/README.md#getcandidate) - Get Candidate
* [getCandidateCustomFieldDefinition](docs/sdks/ats/README.md#getcandidatecustomfielddefinition) - Get Candidate Custom Field Definition
* [getCandidateNote](docs/sdks/ats/README.md#getcandidatenote) - Get Candidate Note
* [getDepartment](docs/sdks/ats/README.md#getdepartment) - Get Department
* [getInterview](docs/sdks/ats/README.md#getinterview) - Get Interview
* [getInterviewStage](docs/sdks/ats/README.md#getinterviewstage) - Get Interview Stage
* [getJob](docs/sdks/ats/README.md#getjob) - Get Job
* [getJobCustomFieldDefinition](docs/sdks/ats/README.md#getjobcustomfielddefinition) - Get Job Custom Field Definition
* [getJobPosting](docs/sdks/ats/README.md#getjobposting) - Get Job Posting
* [getList](docs/sdks/ats/README.md#getlist) - Get List
* [getLocation](docs/sdks/ats/README.md#getlocation) - Get Location
* [getOffer](docs/sdks/ats/README.md#getoffer) - Get Offer
* [getRejectedReason](docs/sdks/ats/README.md#getrejectedreason) - Get Rejected Reason
* [getUser](docs/sdks/ats/README.md#getuser) - Get User
* [listApplicationCustomFieldDefinitions](docs/sdks/ats/README.md#listapplicationcustomfielddefinitions) - List Application Custom Field Definitions
* [listApplicationDocuments](docs/sdks/ats/README.md#listapplicationdocuments) - List Application Documents
* [listApplicationNotes](docs/sdks/ats/README.md#listapplicationnotes) - List Application Notes
* [listApplicationScorecards](docs/sdks/ats/README.md#listapplicationscorecards) - List Application Scorecards
* [listApplications](docs/sdks/ats/README.md#listapplications) - List Applications
* [listApplicationsOffers](docs/sdks/ats/README.md#listapplicationsoffers) - List Application Offers
* [listApplicationsScheduledInterviews](docs/sdks/ats/README.md#listapplicationsscheduledinterviews) - List Applications scheduled interviews
* [listAssessmentsPackages](docs/sdks/ats/README.md#listassessmentspackages) - List Assessments Packages
* [listBackgroundCheckPackages](docs/sdks/ats/README.md#listbackgroundcheckpackages) - List Background Check Packages
* [listBackgroundCheckRequest](docs/sdks/ats/README.md#listbackgroundcheckrequest) - List Background Check Request
* [listCandidateCustomFieldDefinitions](docs/sdks/ats/README.md#listcandidatecustomfielddefinitions) - List Candidate Custom Field Definitions
* [listCandidateNotes](docs/sdks/ats/README.md#listcandidatenotes) - List Candidate Notes
* [listCandidates](docs/sdks/ats/README.md#listcandidates) - List Candidates
* [listDepartments](docs/sdks/ats/README.md#listdepartments) - List Departments
* [listInterviewStages](docs/sdks/ats/README.md#listinterviewstages) - List Interview Stages
* [listInterviews](docs/sdks/ats/README.md#listinterviews) - List Interviews
* [listJobCustomFieldDefinitions](docs/sdks/ats/README.md#listjobcustomfielddefinitions) - List Job Custom Field Definitions
* [listJobPostings](docs/sdks/ats/README.md#listjobpostings) - List Job Postings
* [listJobs](docs/sdks/ats/README.md#listjobs) - List Jobs
* [listLists](docs/sdks/ats/README.md#listlists) - Get all Lists
* [listLocations](docs/sdks/ats/README.md#listlocations) - List locations
* [listOffers](docs/sdks/ats/README.md#listoffers) - List Offers
* [listRejectedReasons](docs/sdks/ats/README.md#listrejectedreasons) - List Rejected Reasons
* [listUsers](docs/sdks/ats/README.md#listusers) - List Users
* [moveApplication](docs/sdks/ats/README.md#moveapplication) - Move Application
* [orderAssessmentsRequest](docs/sdks/ats/README.md#orderassessmentsrequest) - Order Assessments Request
* [orderBackgroundCheckRequest](docs/sdks/ats/README.md#orderbackgroundcheckrequest) - Order Background Check Request
* [rejectApplication](docs/sdks/ats/README.md#rejectapplication) - Reject Application
* [updateApplication](docs/sdks/ats/README.md#updateapplication) - Update an Application
* [updateApplicationNote](docs/sdks/ats/README.md#updateapplicationnote) - Update an Application Note
* [updateAssessmentsResult](docs/sdks/ats/README.md#updateassessmentsresult) - Update Assessments Result
* [updateBackgroundCheckResult](docs/sdks/ats/README.md#updatebackgroundcheckresult) - Update Background Check Result
* [updateCandidate](docs/sdks/ats/README.md#updatecandidate) - Update Candidate
* [updateJob](docs/sdks/ats/README.md#updatejob) - Update Job
* [uploadApplicationDocument](docs/sdks/ats/README.md#uploadapplicationdocument) - Upload Application Document

### [connectors](docs/sdks/connectors/README.md)

* [getConnectorMeta](docs/sdks/connectors/README.md#getconnectormeta) - Get Connector Meta information for the given provider key
* [listConnectorsMeta](docs/sdks/connectors/README.md#listconnectorsmeta) - List Connectors Meta Information for all providers

### [connectSessions](docs/sdks/connectsessions/README.md)

* [authenticateConnectSession](docs/sdks/connectsessions/README.md#authenticateconnectsession) - Authenticate Connect Session
* [createConnectSession](docs/sdks/connectsessions/README.md#createconnectsession) - Create Connect Session

### [crm](docs/sdks/crm/README.md)

* [createContact](docs/sdks/crm/README.md#createcontact) - Creates a new Contact
* [getAccount](docs/sdks/crm/README.md#getaccount) - Get Account
* [getContact](docs/sdks/crm/README.md#getcontact) - Get Contact
* [getContactCustomFieldDefinition](docs/sdks/crm/README.md#getcontactcustomfielddefinition) - Get Contact Custom Field Definition
* [getList](docs/sdks/crm/README.md#getlist) - Get List
* [listAccounts](docs/sdks/crm/README.md#listaccounts) - List Accounts
* [listContactCustomFieldDefinitions](docs/sdks/crm/README.md#listcontactcustomfielddefinitions) - List Contact Custom Field Definitions
* [listContacts](docs/sdks/crm/README.md#listcontacts) - List Contacts
* [listLists](docs/sdks/crm/README.md#listlists) - Get all Lists
* [updateContact](docs/sdks/crm/README.md#updatecontact) - Update Contact (early access)

### [hris](docs/sdks/hris/README.md)

* [batchUploadEmployeeDocument](docs/sdks/hris/README.md#batchuploademployeedocument) - Batch Upload Employee Document
* [createEmployee](docs/sdks/hris/README.md#createemployee) - Creates an employee
* [createEmployeeEmployment](docs/sdks/hris/README.md#createemployeeemployment) - Create Employee Employment
* [createEmployeeSkill](docs/sdks/hris/README.md#createemployeeskill) - Create Employee Skill
* [createEmployeeTimeOffRequest](docs/sdks/hris/README.md#createemployeetimeoffrequest) - Create Employee Time Off Request
* [createEmployeeWorkEligibilityRequest](docs/sdks/hris/README.md#createemployeeworkeligibilityrequest) - Create Employee Work Eligibility Request
* [createTimeOffRequest](docs/sdks/hris/README.md#createtimeoffrequest) - Creates a time off request
* [downloadEmployeeDocument](docs/sdks/hris/README.md#downloademployeedocument) - Download Employee Document
* [getBenefit](docs/sdks/hris/README.md#getbenefit) - Get Benefit
* [getCompany](docs/sdks/hris/README.md#getcompany) - Get Company
* [getCostCenterGroup](docs/sdks/hris/README.md#getcostcentergroup) - Get Cost Center Group
* [getDepartmentGroup](docs/sdks/hris/README.md#getdepartmentgroup) - Get Department Group
* [getEmployee](docs/sdks/hris/README.md#getemployee) - Get Employee
* [getEmployeeCustomFieldDefinition](docs/sdks/hris/README.md#getemployeecustomfielddefinition) - Get employee Custom Field Definition
* [getEmployeeDocument](docs/sdks/hris/README.md#getemployeedocument) - Get Employee Document
* [getEmployeeDocumentCategory](docs/sdks/hris/README.md#getemployeedocumentcategory) - Get Employee Document Category
* [getEmployeeEmployment](docs/sdks/hris/README.md#getemployeeemployment) - Get Employee Employment
* [getEmployeesTimeOffRequest](docs/sdks/hris/README.md#getemployeestimeoffrequest) - Get Employees Time Off Request
* [getEmployeesWorkEligibility](docs/sdks/hris/README.md#getemployeesworkeligibility) - Get Employees Work Eligibility
* [getEmployment](docs/sdks/hris/README.md#getemployment) - Get Employment
* [getGroup](docs/sdks/hris/README.md#getgroup) - Get Group
* [getJob](docs/sdks/hris/README.md#getjob) - Get Job
* [getLocation](docs/sdks/hris/README.md#getlocation) - Get Location
* [getTeamGroup](docs/sdks/hris/README.md#getteamgroup) - Get Team Group
* [getTimeEntries](docs/sdks/hris/README.md#gettimeentries) - Get Time Entry
* [getTimeOffRequest](docs/sdks/hris/README.md#gettimeoffrequest) - Get time off request
* [getTimeOffType](docs/sdks/hris/README.md#gettimeofftype) - Get time off type
* [listBenefits](docs/sdks/hris/README.md#listbenefits) - List benefits
* [listCompanies](docs/sdks/hris/README.md#listcompanies) - List Companies
* [listCostCenterGroups](docs/sdks/hris/README.md#listcostcentergroups) - List Cost Center Groups
* [listDepartmentGroups](docs/sdks/hris/README.md#listdepartmentgroups) - List Department Groups
* [listEmployeeCategories](docs/sdks/hris/README.md#listemployeecategories) - List Employee Document Categories
* [listEmployeeCustomFieldDefinitions](docs/sdks/hris/README.md#listemployeecustomfielddefinitions) - List employee Custom Field Definitions
* [listEmployeeDocuments](docs/sdks/hris/README.md#listemployeedocuments) - List Employee Documents
* [listEmployeeEmployments](docs/sdks/hris/README.md#listemployeeemployments) - List Employee Employments
* [listEmployeeTimeOffRequests](docs/sdks/hris/README.md#listemployeetimeoffrequests) - List Employee Time Off Requests
* [listEmployeeWorkEligibility](docs/sdks/hris/README.md#listemployeeworkeligibility) - List Employee Work Eligibility
* [listEmployees](docs/sdks/hris/README.md#listemployees) - List Employees
* [listEmployments](docs/sdks/hris/README.md#listemployments) - List Employments
* [listGroups](docs/sdks/hris/README.md#listgroups) - List Groups
* [listJobs](docs/sdks/hris/README.md#listjobs) - List Jobs
* [listLocations](docs/sdks/hris/README.md#listlocations) - List locations
* [listTeamGroups](docs/sdks/hris/README.md#listteamgroups) - List Team Groups
* [listTimeEntries](docs/sdks/hris/README.md#listtimeentries) - List Time Entries
* [listTimeOffRequests](docs/sdks/hris/README.md#listtimeoffrequests) - List time off requests
* [listTimeOffTypes](docs/sdks/hris/README.md#listtimeofftypes) - List time off types
* [updateEmployee](docs/sdks/hris/README.md#updateemployee) - Updates an employee
* [updateEmployeeEmployment](docs/sdks/hris/README.md#updateemployeeemployment) - Update Employee Employment
* [updateEmployeeWorkEligibilityRequest](docs/sdks/hris/README.md#updateemployeeworkeligibilityrequest) - Update Employee Work Eligibility Request
* [updateTimeOffRequest](docs/sdks/hris/README.md#updatetimeoffrequest) - Update time off request
* [uploadEmployeeDocument](docs/sdks/hris/README.md#uploademployeedocument) - Upload Employee Document

### [iam](docs/sdks/iam/README.md)

* [getGroup](docs/sdks/iam/README.md#getgroup) - Get Group
* [getPolicy](docs/sdks/iam/README.md#getpolicy) - Get Policy
* [getRole](docs/sdks/iam/README.md#getrole) - Get Role
* [getUser](docs/sdks/iam/README.md#getuser) - Get User
* [listGroups](docs/sdks/iam/README.md#listgroups) - List Groups
* [listPolicies](docs/sdks/iam/README.md#listpolicies) - List Policies
* [listRoles](docs/sdks/iam/README.md#listroles) - List Roles
* [listUsers](docs/sdks/iam/README.md#listusers) - List Users

### [lms](docs/sdks/lms/README.md)

* [batchUpsertContent](docs/sdks/lms/README.md#batchupsertcontent) - Batch Upsert Content
* [batchUpsertCourse](docs/sdks/lms/README.md#batchupsertcourse) - Batch Upsert Course
* [createCollection](docs/sdks/lms/README.md#createcollection) - Create Collection
* [createUserAssignment](docs/sdks/lms/README.md#createuserassignment) - Create User Assignment
* [createUserCompletion](docs/sdks/lms/README.md#createusercompletion) - Create User Completion
* [deleteUserCompletion](docs/sdks/lms/README.md#deleteusercompletion) - Delete User Completion
* [getAssignment](docs/sdks/lms/README.md#getassignment) - Get Assignment
* [getCategory](docs/sdks/lms/README.md#getcategory) - Get Category
* [getCompletion](docs/sdks/lms/README.md#getcompletion) - Get Completion
* [getContent](docs/sdks/lms/README.md#getcontent) - Get Content
* [getCourse](docs/sdks/lms/README.md#getcourse) - Get Course
* [getSkill](docs/sdks/lms/README.md#getskill) - Get Skill
* [getUser](docs/sdks/lms/README.md#getuser) - Get User
* [getUserAssignment](docs/sdks/lms/README.md#getuserassignment) - Get User Assignment
* [getUserCompletion](docs/sdks/lms/README.md#getusercompletion) - Get User Completion
* [listAssignments](docs/sdks/lms/README.md#listassignments) - List Assignments
* [listCategories](docs/sdks/lms/README.md#listcategories) - List Categories
* [listCompletions](docs/sdks/lms/README.md#listcompletions) - List Completions
* [listContent](docs/sdks/lms/README.md#listcontent) - List Content
* [listCourses](docs/sdks/lms/README.md#listcourses) - List Courses
* [listSkills](docs/sdks/lms/README.md#listskills) - List Skills
* [listUserAssignments](docs/sdks/lms/README.md#listuserassignments) - List User Assignments
* [listUserCompletions](docs/sdks/lms/README.md#listusercompletions) - List User Completions
* [listUsers](docs/sdks/lms/README.md#listusers) - List Users
* [updateCollection](docs/sdks/lms/README.md#updatecollection) - Update Collection
* [upsertContent](docs/sdks/lms/README.md#upsertcontent) - Upsert Content
* [upsertCourse](docs/sdks/lms/README.md#upsertcourse) - Upsert Course

### [marketing](docs/sdks/marketing/README.md)

* [createContentBlock](docs/sdks/marketing/README.md#createcontentblock) - Create Content Block
* [createEmailTemplate](docs/sdks/marketing/README.md#createemailtemplate) - Create Email Templates
* [createInAppTemplate](docs/sdks/marketing/README.md#createinapptemplate) - Create In-App Template
* [~~createOmniChannelTemplate~~](docs/sdks/marketing/README.md#createomnichanneltemplate) - Create Omni-Channel Template :warning: **Deprecated**
* [createPushTemplate](docs/sdks/marketing/README.md#createpushtemplate) - Create Push Template
* [createSmsTemplate](docs/sdks/marketing/README.md#createsmstemplate) - Create SMS Template
* [getCampaign](docs/sdks/marketing/README.md#getcampaign) - Get campaign
* [getContentBlock](docs/sdks/marketing/README.md#getcontentblock) - Get Content Blocks
* [getEmailTemplate](docs/sdks/marketing/README.md#getemailtemplate) - Get Email Templates
* [getInAppTemplate](docs/sdks/marketing/README.md#getinapptemplate) - Get In-App Template
* [~~getOmniChannelTemplate~~](docs/sdks/marketing/README.md#getomnichanneltemplate) - Get Omni-Channel Template :warning: **Deprecated**
* [getPushTemplate](docs/sdks/marketing/README.md#getpushtemplate) - Get Push Template
* [getSmsTemplate](docs/sdks/marketing/README.md#getsmstemplate) - Get SMS Template
* [listCampaigns](docs/sdks/marketing/README.md#listcampaigns) - List campaigns
* [listContentBlocks](docs/sdks/marketing/README.md#listcontentblocks) - List Content Blocks
* [listEmailTemplates](docs/sdks/marketing/README.md#listemailtemplates) - List Email Templates
* [listInAppTemplates](docs/sdks/marketing/README.md#listinapptemplates) - List In-App Templates
* [~~listOmniChannelTemplates~~](docs/sdks/marketing/README.md#listomnichanneltemplates) - List Omni-Channel Templates :warning: **Deprecated**
* [listPushTemplates](docs/sdks/marketing/README.md#listpushtemplates) - List Push Templates
* [listSmsTemplates](docs/sdks/marketing/README.md#listsmstemplates) - List SMS Templates
* [updateContentBlock](docs/sdks/marketing/README.md#updatecontentblock) - Update Content Block
* [updateEmailTemplate](docs/sdks/marketing/README.md#updateemailtemplate) - Update Email Templates
* [updateInAppTemplate](docs/sdks/marketing/README.md#updateinapptemplate) - Update In-App Template
* [~~updateOmniChannelTemplate~~](docs/sdks/marketing/README.md#updateomnichanneltemplate) - Update Omni-Channel Template :warning: **Deprecated**
* [updatePushTemplate](docs/sdks/marketing/README.md#updatepushtemplate) - Update Push Template
* [updateSmsTemplate](docs/sdks/marketing/README.md#updatesmstemplate) - Update SMS Template

### [proxy](docs/sdks/proxy/README.md)

* [proxyRequest](docs/sdks/proxy/README.md#proxyrequest) - Proxy Request


</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.ats.listApplicationCustomFieldDefinitions({
    fields: "id,remote_id,name,description,type,options",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Error Handling [errors] -->
## Error Handling

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `SDKError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4XX, 5XX    | \*/\*        |

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { SDKValidationError } from "@stackone/stackone-client-ts/sdk/models/errors";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  let result;
  try {
    result = await stackOne.accounts.deleteAccount({
      id: "<id>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError):
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty());
          // Raw value may also be inspected
          console.error(err.rawValue);
          return;
        }
        sdkerror.js;
      // Server returned an error status code or an unknown content type
      case (err instanceof SDKError): {
        console.error(err.statusCode);
        console.error(err.rawResponse.body);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `sdk/models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { HTTPClient } from "@stackone/stackone-client-ts/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new StackOne({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- No Server Selection -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                      | Type | Scheme     |
| ------------------------- | ---- | ---------- |
| `username`<br/>`password` | http | HTTP Basic |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.accounts.deleteAccount({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.accounts.deleteAccount({
    id: "<id>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.accounts.deleteAccount({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountsDeleteAccount`](docs/sdks/accounts/README.md#deleteaccount) - Delete Account
- [`accountsGetAccount`](docs/sdks/accounts/README.md#getaccount) - Get Account
- [`accountsGetAccountMetaInfo`](docs/sdks/accounts/README.md#getaccountmetainfo) - Get meta information of the account
- [`accountsListLinkedAccounts`](docs/sdks/accounts/README.md#listlinkedaccounts) - List Accounts
- [`accountsUpdateAccount`](docs/sdks/accounts/README.md#updateaccount) - Update Account
- [`atsCreateApplication`](docs/sdks/ats/README.md#createapplication) - Create Application
- [`atsCreateApplicationNote`](docs/sdks/ats/README.md#createapplicationnote) - Create Application Note
- [`atsCreateBackgroundCheckPackage`](docs/sdks/ats/README.md#createbackgroundcheckpackage) - Create Background Check Package
- [`atsCreateCandidate`](docs/sdks/ats/README.md#createcandidate) - Create Candidate
- [`atsCreateCandidateNote`](docs/sdks/ats/README.md#createcandidatenote) - Create Candidate Note
- [`atsCreateJob`](docs/sdks/ats/README.md#createjob) - Create Job
- [`atsCreateOffer`](docs/sdks/ats/README.md#createoffer) - Creates an offer
- [`atsDownloadApplicationDocument`](docs/sdks/ats/README.md#downloadapplicationdocument) - Download Application Document
- [`atsGetApplication`](docs/sdks/ats/README.md#getapplication) - Get Application
- [`atsGetApplicationCustomFieldDefinition`](docs/sdks/ats/README.md#getapplicationcustomfielddefinition) - Get Application Custom Field Definition
- [`atsGetApplicationDocument`](docs/sdks/ats/README.md#getapplicationdocument) - Get Application Document
- [`atsGetApplicationNote`](docs/sdks/ats/README.md#getapplicationnote) - Get Application Note
- [`atsGetApplicationOffer`](docs/sdks/ats/README.md#getapplicationoffer) - Get Application Offer
- [`atsGetApplicationScheduledInterview`](docs/sdks/ats/README.md#getapplicationscheduledinterview) - Get Applications scheduled interview
- [`atsGetApplicationScorecard`](docs/sdks/ats/README.md#getapplicationscorecard) - Get Application Scorecard
- [`atsGetAssessmentsPackage`](docs/sdks/ats/README.md#getassessmentspackage) - Get Assessments Package
- [`atsGetAssessmentsRequest`](docs/sdks/ats/README.md#getassessmentsrequest) - Get Assessments Requests
- [`atsGetAssessmentsResult`](docs/sdks/ats/README.md#getassessmentsresult) - Get Assessments Results
- [`atsGetBackgroundCheckPackage`](docs/sdks/ats/README.md#getbackgroundcheckpackage) - Get Background Check Package
- [`atsGetBackgroundCheckRequest`](docs/sdks/ats/README.md#getbackgroundcheckrequest) - Get Background Check Request
- [`atsGetBackgroundCheckResult`](docs/sdks/ats/README.md#getbackgroundcheckresult) - Get Background Check Results
- [`atsGetCandidate`](docs/sdks/ats/README.md#getcandidate) - Get Candidate
- [`atsGetCandidateCustomFieldDefinition`](docs/sdks/ats/README.md#getcandidatecustomfielddefinition) - Get Candidate Custom Field Definition
- [`atsGetCandidateNote`](docs/sdks/ats/README.md#getcandidatenote) - Get Candidate Note
- [`atsGetDepartment`](docs/sdks/ats/README.md#getdepartment) - Get Department
- [`atsGetInterview`](docs/sdks/ats/README.md#getinterview) - Get Interview
- [`atsGetInterviewStage`](docs/sdks/ats/README.md#getinterviewstage) - Get Interview Stage
- [`atsGetJob`](docs/sdks/ats/README.md#getjob) - Get Job
- [`atsGetJobCustomFieldDefinition`](docs/sdks/ats/README.md#getjobcustomfielddefinition) - Get Job Custom Field Definition
- [`atsGetJobPosting`](docs/sdks/ats/README.md#getjobposting) - Get Job Posting
- [`atsGetList`](docs/sdks/ats/README.md#getlist) - Get List
- [`atsGetLocation`](docs/sdks/ats/README.md#getlocation) - Get Location
- [`atsGetOffer`](docs/sdks/ats/README.md#getoffer) - Get Offer
- [`atsGetRejectedReason`](docs/sdks/ats/README.md#getrejectedreason) - Get Rejected Reason
- [`atsGetUser`](docs/sdks/ats/README.md#getuser) - Get User
- [`atsListApplicationCustomFieldDefinitions`](docs/sdks/ats/README.md#listapplicationcustomfielddefinitions) - List Application Custom Field Definitions
- [`atsListApplicationDocuments`](docs/sdks/ats/README.md#listapplicationdocuments) - List Application Documents
- [`atsListApplicationNotes`](docs/sdks/ats/README.md#listapplicationnotes) - List Application Notes
- [`atsListApplications`](docs/sdks/ats/README.md#listapplications) - List Applications
- [`atsListApplicationScorecards`](docs/sdks/ats/README.md#listapplicationscorecards) - List Application Scorecards
- [`atsListApplicationsOffers`](docs/sdks/ats/README.md#listapplicationsoffers) - List Application Offers
- [`atsListApplicationsScheduledInterviews`](docs/sdks/ats/README.md#listapplicationsscheduledinterviews) - List Applications scheduled interviews
- [`atsListAssessmentsPackages`](docs/sdks/ats/README.md#listassessmentspackages) - List Assessments Packages
- [`atsListBackgroundCheckPackages`](docs/sdks/ats/README.md#listbackgroundcheckpackages) - List Background Check Packages
- [`atsListBackgroundCheckRequest`](docs/sdks/ats/README.md#listbackgroundcheckrequest) - List Background Check Request
- [`atsListCandidateCustomFieldDefinitions`](docs/sdks/ats/README.md#listcandidatecustomfielddefinitions) - List Candidate Custom Field Definitions
- [`atsListCandidateNotes`](docs/sdks/ats/README.md#listcandidatenotes) - List Candidate Notes
- [`atsListCandidates`](docs/sdks/ats/README.md#listcandidates) - List Candidates
- [`atsListDepartments`](docs/sdks/ats/README.md#listdepartments) - List Departments
- [`atsListInterviews`](docs/sdks/ats/README.md#listinterviews) - List Interviews
- [`atsListInterviewStages`](docs/sdks/ats/README.md#listinterviewstages) - List Interview Stages
- [`atsListJobCustomFieldDefinitions`](docs/sdks/ats/README.md#listjobcustomfielddefinitions) - List Job Custom Field Definitions
- [`atsListJobPostings`](docs/sdks/ats/README.md#listjobpostings) - List Job Postings
- [`atsListJobs`](docs/sdks/ats/README.md#listjobs) - List Jobs
- [`atsListLists`](docs/sdks/ats/README.md#listlists) - Get all Lists
- [`atsListLocations`](docs/sdks/ats/README.md#listlocations) - List locations
- [`atsListOffers`](docs/sdks/ats/README.md#listoffers) - List Offers
- [`atsListRejectedReasons`](docs/sdks/ats/README.md#listrejectedreasons) - List Rejected Reasons
- [`atsListUsers`](docs/sdks/ats/README.md#listusers) - List Users
- [`atsMoveApplication`](docs/sdks/ats/README.md#moveapplication) - Move Application
- [`atsOrderAssessmentsRequest`](docs/sdks/ats/README.md#orderassessmentsrequest) - Order Assessments Request
- [`atsOrderBackgroundCheckRequest`](docs/sdks/ats/README.md#orderbackgroundcheckrequest) - Order Background Check Request
- [`atsRejectApplication`](docs/sdks/ats/README.md#rejectapplication) - Reject Application
- [`atsUpdateApplication`](docs/sdks/ats/README.md#updateapplication) - Update an Application
- [`atsUpdateApplicationNote`](docs/sdks/ats/README.md#updateapplicationnote) - Update an Application Note
- [`atsUpdateAssessmentsResult`](docs/sdks/ats/README.md#updateassessmentsresult) - Update Assessments Result
- [`atsUpdateBackgroundCheckResult`](docs/sdks/ats/README.md#updatebackgroundcheckresult) - Update Background Check Result
- [`atsUpdateCandidate`](docs/sdks/ats/README.md#updatecandidate) - Update Candidate
- [`atsUpdateJob`](docs/sdks/ats/README.md#updatejob) - Update Job
- [`atsUploadApplicationDocument`](docs/sdks/ats/README.md#uploadapplicationdocument) - Upload Application Document
- [`connectorsGetConnectorMeta`](docs/sdks/connectors/README.md#getconnectormeta) - Get Connector Meta information for the given provider key
- [`connectorsListConnectorsMeta`](docs/sdks/connectors/README.md#listconnectorsmeta) - List Connectors Meta Information for all providers
- [`connectSessionsAuthenticateConnectSession`](docs/sdks/connectsessions/README.md#authenticateconnectsession) - Authenticate Connect Session
- [`connectSessionsCreateConnectSession`](docs/sdks/connectsessions/README.md#createconnectsession) - Create Connect Session
- [`crmCreateContact`](docs/sdks/crm/README.md#createcontact) - Creates a new Contact
- [`crmGetAccount`](docs/sdks/crm/README.md#getaccount) - Get Account
- [`crmGetContact`](docs/sdks/crm/README.md#getcontact) - Get Contact
- [`crmGetContactCustomFieldDefinition`](docs/sdks/crm/README.md#getcontactcustomfielddefinition) - Get Contact Custom Field Definition
- [`crmGetList`](docs/sdks/crm/README.md#getlist) - Get List
- [`crmListAccounts`](docs/sdks/crm/README.md#listaccounts) - List Accounts
- [`crmListContactCustomFieldDefinitions`](docs/sdks/crm/README.md#listcontactcustomfielddefinitions) - List Contact Custom Field Definitions
- [`crmListContacts`](docs/sdks/crm/README.md#listcontacts) - List Contacts
- [`crmListLists`](docs/sdks/crm/README.md#listlists) - Get all Lists
- [`crmUpdateContact`](docs/sdks/crm/README.md#updatecontact) - Update Contact (early access)
- [`hrisBatchUploadEmployeeDocument`](docs/sdks/hris/README.md#batchuploademployeedocument) - Batch Upload Employee Document
- [`hrisCreateEmployee`](docs/sdks/hris/README.md#createemployee) - Creates an employee
- [`hrisCreateEmployeeEmployment`](docs/sdks/hris/README.md#createemployeeemployment) - Create Employee Employment
- [`hrisCreateEmployeeSkill`](docs/sdks/hris/README.md#createemployeeskill) - Create Employee Skill
- [`hrisCreateEmployeeTimeOffRequest`](docs/sdks/hris/README.md#createemployeetimeoffrequest) - Create Employee Time Off Request
- [`hrisCreateEmployeeWorkEligibilityRequest`](docs/sdks/hris/README.md#createemployeeworkeligibilityrequest) - Create Employee Work Eligibility Request
- [`hrisCreateTimeOffRequest`](docs/sdks/hris/README.md#createtimeoffrequest) - Creates a time off request
- [`hrisDownloadEmployeeDocument`](docs/sdks/hris/README.md#downloademployeedocument) - Download Employee Document
- [`hrisGetBenefit`](docs/sdks/hris/README.md#getbenefit) - Get Benefit
- [`hrisGetCompany`](docs/sdks/hris/README.md#getcompany) - Get Company
- [`hrisGetCostCenterGroup`](docs/sdks/hris/README.md#getcostcentergroup) - Get Cost Center Group
- [`hrisGetDepartmentGroup`](docs/sdks/hris/README.md#getdepartmentgroup) - Get Department Group
- [`hrisGetEmployee`](docs/sdks/hris/README.md#getemployee) - Get Employee
- [`hrisGetEmployeeCustomFieldDefinition`](docs/sdks/hris/README.md#getemployeecustomfielddefinition) - Get employee Custom Field Definition
- [`hrisGetEmployeeDocument`](docs/sdks/hris/README.md#getemployeedocument) - Get Employee Document
- [`hrisGetEmployeeDocumentCategory`](docs/sdks/hris/README.md#getemployeedocumentcategory) - Get Employee Document Category
- [`hrisGetEmployeeEmployment`](docs/sdks/hris/README.md#getemployeeemployment) - Get Employee Employment
- [`hrisGetEmployeesTimeOffRequest`](docs/sdks/hris/README.md#getemployeestimeoffrequest) - Get Employees Time Off Request
- [`hrisGetEmployeesWorkEligibility`](docs/sdks/hris/README.md#getemployeesworkeligibility) - Get Employees Work Eligibility
- [`hrisGetEmployment`](docs/sdks/hris/README.md#getemployment) - Get Employment
- [`hrisGetGroup`](docs/sdks/hris/README.md#getgroup) - Get Group
- [`hrisGetJob`](docs/sdks/hris/README.md#getjob) - Get Job
- [`hrisGetLocation`](docs/sdks/hris/README.md#getlocation) - Get Location
- [`hrisGetTeamGroup`](docs/sdks/hris/README.md#getteamgroup) - Get Team Group
- [`hrisGetTimeEntries`](docs/sdks/hris/README.md#gettimeentries) - Get Time Entry
- [`hrisGetTimeOffRequest`](docs/sdks/hris/README.md#gettimeoffrequest) - Get time off request
- [`hrisGetTimeOffType`](docs/sdks/hris/README.md#gettimeofftype) - Get time off type
- [`hrisListBenefits`](docs/sdks/hris/README.md#listbenefits) - List benefits
- [`hrisListCompanies`](docs/sdks/hris/README.md#listcompanies) - List Companies
- [`hrisListCostCenterGroups`](docs/sdks/hris/README.md#listcostcentergroups) - List Cost Center Groups
- [`hrisListDepartmentGroups`](docs/sdks/hris/README.md#listdepartmentgroups) - List Department Groups
- [`hrisListEmployeeCategories`](docs/sdks/hris/README.md#listemployeecategories) - List Employee Document Categories
- [`hrisListEmployeeCustomFieldDefinitions`](docs/sdks/hris/README.md#listemployeecustomfielddefinitions) - List employee Custom Field Definitions
- [`hrisListEmployeeDocuments`](docs/sdks/hris/README.md#listemployeedocuments) - List Employee Documents
- [`hrisListEmployeeEmployments`](docs/sdks/hris/README.md#listemployeeemployments) - List Employee Employments
- [`hrisListEmployees`](docs/sdks/hris/README.md#listemployees) - List Employees
- [`hrisListEmployeeTimeOffRequests`](docs/sdks/hris/README.md#listemployeetimeoffrequests) - List Employee Time Off Requests
- [`hrisListEmployeeWorkEligibility`](docs/sdks/hris/README.md#listemployeeworkeligibility) - List Employee Work Eligibility
- [`hrisListEmployments`](docs/sdks/hris/README.md#listemployments) - List Employments
- [`hrisListGroups`](docs/sdks/hris/README.md#listgroups) - List Groups
- [`hrisListJobs`](docs/sdks/hris/README.md#listjobs) - List Jobs
- [`hrisListLocations`](docs/sdks/hris/README.md#listlocations) - List locations
- [`hrisListTeamGroups`](docs/sdks/hris/README.md#listteamgroups) - List Team Groups
- [`hrisListTimeEntries`](docs/sdks/hris/README.md#listtimeentries) - List Time Entries
- [`hrisListTimeOffRequests`](docs/sdks/hris/README.md#listtimeoffrequests) - List time off requests
- [`hrisListTimeOffTypes`](docs/sdks/hris/README.md#listtimeofftypes) - List time off types
- [`hrisUpdateEmployee`](docs/sdks/hris/README.md#updateemployee) - Updates an employee
- [`hrisUpdateEmployeeEmployment`](docs/sdks/hris/README.md#updateemployeeemployment) - Update Employee Employment
- [`hrisUpdateEmployeeWorkEligibilityRequest`](docs/sdks/hris/README.md#updateemployeeworkeligibilityrequest) - Update Employee Work Eligibility Request
- [`hrisUpdateTimeOffRequest`](docs/sdks/hris/README.md#updatetimeoffrequest) - Update time off request
- [`hrisUploadEmployeeDocument`](docs/sdks/hris/README.md#uploademployeedocument) - Upload Employee Document
- [`iamGetGroup`](docs/sdks/iam/README.md#getgroup) - Get Group
- [`iamGetPolicy`](docs/sdks/iam/README.md#getpolicy) - Get Policy
- [`iamGetRole`](docs/sdks/iam/README.md#getrole) - Get Role
- [`iamGetUser`](docs/sdks/iam/README.md#getuser) - Get User
- [`iamListGroups`](docs/sdks/iam/README.md#listgroups) - List Groups
- [`iamListPolicies`](docs/sdks/iam/README.md#listpolicies) - List Policies
- [`iamListRoles`](docs/sdks/iam/README.md#listroles) - List Roles
- [`iamListUsers`](docs/sdks/iam/README.md#listusers) - List Users
- [`lmsBatchUpsertContent`](docs/sdks/lms/README.md#batchupsertcontent) - Batch Upsert Content
- [`lmsBatchUpsertCourse`](docs/sdks/lms/README.md#batchupsertcourse) - Batch Upsert Course
- [`lmsCreateCollection`](docs/sdks/lms/README.md#createcollection) - Create Collection
- [`lmsCreateUserAssignment`](docs/sdks/lms/README.md#createuserassignment) - Create User Assignment
- [`lmsCreateUserCompletion`](docs/sdks/lms/README.md#createusercompletion) - Create User Completion
- [`lmsDeleteUserCompletion`](docs/sdks/lms/README.md#deleteusercompletion) - Delete User Completion
- [`lmsGetAssignment`](docs/sdks/lms/README.md#getassignment) - Get Assignment
- [`lmsGetCategory`](docs/sdks/lms/README.md#getcategory) - Get Category
- [`lmsGetCompletion`](docs/sdks/lms/README.md#getcompletion) - Get Completion
- [`lmsGetContent`](docs/sdks/lms/README.md#getcontent) - Get Content
- [`lmsGetCourse`](docs/sdks/lms/README.md#getcourse) - Get Course
- [`lmsGetSkill`](docs/sdks/lms/README.md#getskill) - Get Skill
- [`lmsGetUser`](docs/sdks/lms/README.md#getuser) - Get User
- [`lmsGetUserAssignment`](docs/sdks/lms/README.md#getuserassignment) - Get User Assignment
- [`lmsGetUserCompletion`](docs/sdks/lms/README.md#getusercompletion) - Get User Completion
- [`lmsListAssignments`](docs/sdks/lms/README.md#listassignments) - List Assignments
- [`lmsListCategories`](docs/sdks/lms/README.md#listcategories) - List Categories
- [`lmsListCompletions`](docs/sdks/lms/README.md#listcompletions) - List Completions
- [`lmsListContent`](docs/sdks/lms/README.md#listcontent) - List Content
- [`lmsListCourses`](docs/sdks/lms/README.md#listcourses) - List Courses
- [`lmsListSkills`](docs/sdks/lms/README.md#listskills) - List Skills
- [`lmsListUserAssignments`](docs/sdks/lms/README.md#listuserassignments) - List User Assignments
- [`lmsListUserCompletions`](docs/sdks/lms/README.md#listusercompletions) - List User Completions
- [`lmsListUsers`](docs/sdks/lms/README.md#listusers) - List Users
- [`lmsUpdateCollection`](docs/sdks/lms/README.md#updatecollection) - Update Collection
- [`lmsUpsertContent`](docs/sdks/lms/README.md#upsertcontent) - Upsert Content
- [`lmsUpsertCourse`](docs/sdks/lms/README.md#upsertcourse) - Upsert Course
- [`marketingCreateContentBlock`](docs/sdks/marketing/README.md#createcontentblock) - Create Content Block
- [`marketingCreateEmailTemplate`](docs/sdks/marketing/README.md#createemailtemplate) - Create Email Templates
- [`marketingCreateInAppTemplate`](docs/sdks/marketing/README.md#createinapptemplate) - Create In-App Template
- [`marketingCreatePushTemplate`](docs/sdks/marketing/README.md#createpushtemplate) - Create Push Template
- [`marketingCreateSmsTemplate`](docs/sdks/marketing/README.md#createsmstemplate) - Create SMS Template
- [`marketingGetCampaign`](docs/sdks/marketing/README.md#getcampaign) - Get campaign
- [`marketingGetContentBlock`](docs/sdks/marketing/README.md#getcontentblock) - Get Content Blocks
- [`marketingGetEmailTemplate`](docs/sdks/marketing/README.md#getemailtemplate) - Get Email Templates
- [`marketingGetInAppTemplate`](docs/sdks/marketing/README.md#getinapptemplate) - Get In-App Template
- [`marketingGetPushTemplate`](docs/sdks/marketing/README.md#getpushtemplate) - Get Push Template
- [`marketingGetSmsTemplate`](docs/sdks/marketing/README.md#getsmstemplate) - Get SMS Template
- [`marketingListCampaigns`](docs/sdks/marketing/README.md#listcampaigns) - List campaigns
- [`marketingListContentBlocks`](docs/sdks/marketing/README.md#listcontentblocks) - List Content Blocks
- [`marketingListEmailTemplates`](docs/sdks/marketing/README.md#listemailtemplates) - List Email Templates
- [`marketingListInAppTemplates`](docs/sdks/marketing/README.md#listinapptemplates) - List In-App Templates
- [`marketingListPushTemplates`](docs/sdks/marketing/README.md#listpushtemplates) - List Push Templates
- [`marketingListSmsTemplates`](docs/sdks/marketing/README.md#listsmstemplates) - List SMS Templates
- [`marketingUpdateContentBlock`](docs/sdks/marketing/README.md#updatecontentblock) - Update Content Block
- [`marketingUpdateEmailTemplate`](docs/sdks/marketing/README.md#updateemailtemplate) - Update Email Templates
- [`marketingUpdateInAppTemplate`](docs/sdks/marketing/README.md#updateinapptemplate) - Update In-App Template
- [`marketingUpdatePushTemplate`](docs/sdks/marketing/README.md#updatepushtemplate) - Update Push Template
- [`marketingUpdateSmsTemplate`](docs/sdks/marketing/README.md#updatesmstemplate) - Update SMS Template
- [`proxyProxyRequest`](docs/sdks/proxy/README.md#proxyrequest) - Proxy Request
- ~~[`marketingCreateOmniChannelTemplate`](docs/sdks/marketing/README.md#createomnichanneltemplate)~~ - Create Omni-Channel Template :warning: **Deprecated**
- ~~[`marketingGetOmniChannelTemplate`](docs/sdks/marketing/README.md#getomnichanneltemplate)~~ - Get Omni-Channel Template :warning: **Deprecated**
- ~~[`marketingListOmniChannelTemplates`](docs/sdks/marketing/README.md#listomnichanneltemplates)~~ - List Omni-Channel Templates :warning: **Deprecated**
- ~~[`marketingUpdateOmniChannelTemplate`](docs/sdks/marketing/README.md#updateomnichanneltemplate)~~ - Update Omni-Channel Template :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const sdk = new StackOne({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

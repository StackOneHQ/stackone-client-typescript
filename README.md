# @stackone/stackone-client-ts

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>    
</div>

<!-- Start Summary [summary] -->
## Summary

Documents: The documentation for the StackOne Unified API - DOCUMENTS
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
    expand: "company,employments,work_location,home_location,groups,skills",
    fields:
      "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,company,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,company_id,remote_company_id,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,benefits,employee_number,national_identity_number,national_identity_numbers,skills",
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
* [deleteBackgroundCheckPackage](docs/sdks/ats/README.md#deletebackgroundcheckpackage) - Delete Background Check Package
* [downloadApplicationDocument](docs/sdks/ats/README.md#downloadapplicationdocument) - Download Application Document
* [getApplication](docs/sdks/ats/README.md#getapplication) - Get Application
* [getApplicationCustomFieldDefinition](docs/sdks/ats/README.md#getapplicationcustomfielddefinition) - Get Application Custom Field Definition
* [getApplicationDocument](docs/sdks/ats/README.md#getapplicationdocument) - Get Application Document
* [getApplicationNote](docs/sdks/ats/README.md#getapplicationnote) - Get Application Note
* [getApplicationOffer](docs/sdks/ats/README.md#getapplicationoffer) - Get Application Offer
* [getApplicationScheduledInterview](docs/sdks/ats/README.md#getapplicationscheduledinterview) - Get Applications scheduled interview
* [getApplicationScorecard](docs/sdks/ats/README.md#getapplicationscorecard) - Get Application Scorecard
* [getAssessmentsPackage](docs/sdks/ats/README.md#getassessmentspackage) - Get Assessments Package
* [getAssessmentsResult](docs/sdks/ats/README.md#getassessmentsresult) - Get Assessments Results
* [getBackgroundCheckPackage](docs/sdks/ats/README.md#getbackgroundcheckpackage) - Get Background Check Package
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
* [listApplicationChanges](docs/sdks/ats/README.md#listapplicationchanges) - List Application Changes
* [listApplicationCustomFieldDefinitions](docs/sdks/ats/README.md#listapplicationcustomfielddefinitions) - List Application Custom Field Definitions
* [listApplicationDocuments](docs/sdks/ats/README.md#listapplicationdocuments) - List Application Documents
* [listApplicationNotes](docs/sdks/ats/README.md#listapplicationnotes) - List Application Notes
* [listApplicationScorecards](docs/sdks/ats/README.md#listapplicationscorecards) - List Application Scorecards
* [listApplications](docs/sdks/ats/README.md#listapplications) - List Applications
* [listApplicationsOffers](docs/sdks/ats/README.md#listapplicationsoffers) - List Application Offers
* [listApplicationsScheduledInterviews](docs/sdks/ats/README.md#listapplicationsscheduledinterviews) - List Applications scheduled interviews
* [listAssessmentsPackages](docs/sdks/ats/README.md#listassessmentspackages) - List Assessments Packages
* [listBackgroundCheckPackages](docs/sdks/ats/README.md#listbackgroundcheckpackages) - List Background Check Packages
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
* [updateBackgroundCheckPackage](docs/sdks/ats/README.md#updatebackgroundcheckpackage) - Update Background Check Package
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

### [documents](docs/sdks/documents/README.md)

* [downloadFile](docs/sdks/documents/README.md#downloadfile) - Download File
* [getDrive](docs/sdks/documents/README.md#getdrive) - Get Drive
* [getFile](docs/sdks/documents/README.md#getfile) - Get File
* [getFolder](docs/sdks/documents/README.md#getfolder) - Get Folder
* [listDrives](docs/sdks/documents/README.md#listdrives) - List Drives
* [listFiles](docs/sdks/documents/README.md#listfiles) - List Files
* [listFolders](docs/sdks/documents/README.md#listfolders) - List Folders
* [searchFiles](docs/sdks/documents/README.md#searchfiles) - Search Files
* [uploadFile](docs/sdks/documents/README.md#uploadfile) - Upload File

### [hris](docs/sdks/hris/README.md)

* [batchUploadEmployeeDocument](docs/sdks/hris/README.md#batchuploademployeedocument) - Batch Upload Employee Document
* [cancelEmployeeTimeOffRequest](docs/sdks/hris/README.md#cancelemployeetimeoffrequest) - Cancel Employee Time Off Request
* [createEmployee](docs/sdks/hris/README.md#createemployee) - Creates an employee
* [createEmployeeEmployment](docs/sdks/hris/README.md#createemployeeemployment) - Create Employee Employment
* [createEmployeeSkill](docs/sdks/hris/README.md#createemployeeskill) - Create Employee Skill
* [createEmployeeTimeOffRequest](docs/sdks/hris/README.md#createemployeetimeoffrequest) - Create Employee Time Off Request
* [createEmployeeWorkEligibilityRequest](docs/sdks/hris/README.md#createemployeeworkeligibilityrequest) - Create Employee Work Eligibility Request
* [downloadEmployeeDocument](docs/sdks/hris/README.md#downloademployeedocument) - Download Employee Document
* [getBenefit](docs/sdks/hris/README.md#getbenefit) - Get Benefit
* [getCompany](docs/sdks/hris/README.md#getcompany) - Get Company
* [getCompanyGroup](docs/sdks/hris/README.md#getcompanygroup) - Get Company Group
* [getCostCenterGroup](docs/sdks/hris/README.md#getcostcentergroup) - Get Cost Center Group
* [getDepartmentGroup](docs/sdks/hris/README.md#getdepartmentgroup) - Get Department Group
* [getDivisionGroup](docs/sdks/hris/README.md#getdivisiongroup) - Get Division Group
* [getEmployee](docs/sdks/hris/README.md#getemployee) - Get Employee
* [getEmployeeCustomFieldDefinition](docs/sdks/hris/README.md#getemployeecustomfielddefinition) - Get employee Custom Field Definition
* [getEmployeeDocument](docs/sdks/hris/README.md#getemployeedocument) - Get Employee Document
* [getEmployeeDocumentCategory](docs/sdks/hris/README.md#getemployeedocumentcategory) - Get Employee Document Category
* [getEmployeeEmployment](docs/sdks/hris/README.md#getemployeeemployment) - Get Employee Employment
* [getEmployeeSkill](docs/sdks/hris/README.md#getemployeeskill) - Get Employee Skill
* [getEmployeeTask](docs/sdks/hris/README.md#getemployeetask) - Get Employee Task
* [getEmployeeTimeOffBalance](docs/sdks/hris/README.md#getemployeetimeoffbalance) - Get Employee Time Off Balance
* [getEmployeesTimeOffRequest](docs/sdks/hris/README.md#getemployeestimeoffrequest) - Get Employees Time Off Request
* [getEmployeesWorkEligibility](docs/sdks/hris/README.md#getemployeesworkeligibility) - Get Employees Work Eligibility
* [getEmployment](docs/sdks/hris/README.md#getemployment) - Get Employment
* [getGroup](docs/sdks/hris/README.md#getgroup) - Get Group
* [getJob](docs/sdks/hris/README.md#getjob) - Get Job
* [getLocation](docs/sdks/hris/README.md#getlocation) - Get Work Location
* [getPosition](docs/sdks/hris/README.md#getposition) - Get Position
* [getTask](docs/sdks/hris/README.md#gettask) - Get Task
* [getTeamGroup](docs/sdks/hris/README.md#getteamgroup) - Get Team Group
* [getTimeEntries](docs/sdks/hris/README.md#gettimeentries) - Get Time Entry
* [getTimeOffPolicy](docs/sdks/hris/README.md#gettimeoffpolicy) - Get Time Off Policy
* [getTimeOffRequest](docs/sdks/hris/README.md#gettimeoffrequest) - Get time off request
* [~~getTimeOffType~~](docs/sdks/hris/README.md#gettimeofftype) - Get time off type :warning: **Deprecated**
* [inviteEmployee](docs/sdks/hris/README.md#inviteemployee) - Invite Employee
* [listBenefits](docs/sdks/hris/README.md#listbenefits) - List benefits
* [listCompanies](docs/sdks/hris/README.md#listcompanies) - List Companies
* [listCompaniesGroups](docs/sdks/hris/README.md#listcompaniesgroups) - List Companies Groups
* [listCostCenterGroups](docs/sdks/hris/README.md#listcostcentergroups) - List Cost Center Groups
* [listDepartmentGroups](docs/sdks/hris/README.md#listdepartmentgroups) - List Department Groups
* [listDivisionGroups](docs/sdks/hris/README.md#listdivisiongroups) - List Division Groups
* [listEmployeeCategories](docs/sdks/hris/README.md#listemployeecategories) - List Employee Document Categories
* [listEmployeeCustomFieldDefinitions](docs/sdks/hris/README.md#listemployeecustomfielddefinitions) - List employee Custom Field Definitions
* [listEmployeeDocuments](docs/sdks/hris/README.md#listemployeedocuments) - List Employee Documents
* [listEmployeeEmployments](docs/sdks/hris/README.md#listemployeeemployments) - List Employee Employments
* [listEmployeeSkills](docs/sdks/hris/README.md#listemployeeskills) - List Employee Skills
* [listEmployeeTasks](docs/sdks/hris/README.md#listemployeetasks) - List Employee Tasks
* [listEmployeeTimeOffBalances](docs/sdks/hris/README.md#listemployeetimeoffbalances) - List Employee Time Off Balances
* [listEmployeeTimeOffPolicies](docs/sdks/hris/README.md#listemployeetimeoffpolicies) - List Assigned Time Off Policies
* [listEmployeeTimeOffRequests](docs/sdks/hris/README.md#listemployeetimeoffrequests) - List Employee Time Off Requests
* [listEmployeeWorkEligibility](docs/sdks/hris/README.md#listemployeeworkeligibility) - List Employee Work Eligibility
* [listEmployees](docs/sdks/hris/README.md#listemployees) - List Employees
* [listEmployments](docs/sdks/hris/README.md#listemployments) - List Employments
* [listGroups](docs/sdks/hris/README.md#listgroups) - List Groups
* [listJobs](docs/sdks/hris/README.md#listjobs) - List Jobs
* [listLocations](docs/sdks/hris/README.md#listlocations) - List Work Locations
* [listPositions](docs/sdks/hris/README.md#listpositions) - List Positions
* [listTasks](docs/sdks/hris/README.md#listtasks) - List Tasks
* [listTeamGroups](docs/sdks/hris/README.md#listteamgroups) - List Team Groups
* [listTimeEntries](docs/sdks/hris/README.md#listtimeentries) - List Time Entries
* [listTimeOffPolicies](docs/sdks/hris/README.md#listtimeoffpolicies) - List Time Off Policies
* [listTimeOffRequests](docs/sdks/hris/README.md#listtimeoffrequests) - List time off requests
* [~~listTimeOffTypes~~](docs/sdks/hris/README.md#listtimeofftypes) - List time off types :warning: **Deprecated**
* [updateEmployee](docs/sdks/hris/README.md#updateemployee) - Updates an employee
* [updateEmployeeEmployment](docs/sdks/hris/README.md#updateemployeeemployment) - Update Employee Employment
* [updateEmployeeTimeOffRequest](docs/sdks/hris/README.md#updateemployeetimeoffrequest) - Update Employee Time Off Request
* [updateEmployeeWorkEligibilityRequest](docs/sdks/hris/README.md#updateemployeeworkeligibilityrequest) - Update Employee Work Eligibility Request
* [uploadEmployeeDocument](docs/sdks/hris/README.md#uploademployeedocument) - Upload Employee Document

### [iam](docs/sdks/iam/README.md)

* [deleteUser](docs/sdks/iam/README.md#deleteuser) - Delete User
* [getGroup](docs/sdks/iam/README.md#getgroup) - Get Group
* [getPolicy](docs/sdks/iam/README.md#getpolicy) - Get Policy
* [getRole](docs/sdks/iam/README.md#getrole) - Get Role
* [getUser](docs/sdks/iam/README.md#getuser) - Get User
* [listGroups](docs/sdks/iam/README.md#listgroups) - List Groups
* [listPolicies](docs/sdks/iam/README.md#listpolicies) - List Policies
* [listRoles](docs/sdks/iam/README.md#listroles) - List Roles
* [listUsers](docs/sdks/iam/README.md#listusers) - List Users
* [updateUser](docs/sdks/iam/README.md#updateuser) - Update User

### [lms](docs/sdks/lms/README.md)

* [batchUpsertContent](docs/sdks/lms/README.md#batchupsertcontent) - Batch Upsert Content
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
* [updateContent](docs/sdks/lms/README.md#updatecontent) - Update Content
* [upsertContent](docs/sdks/lms/README.md#upsertcontent) - Upsert Content

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

### [requestLogs](docs/sdks/requestlogs/README.md)

* [getLog](docs/sdks/requestlogs/README.md#getlog) - Get a Log
* [listLogs](docs/sdks/requestlogs/README.md#listlogs) - List Logs
* [listStepLogs](docs/sdks/requestlogs/README.md#liststeplogs) - List Step Logs


### [ticketing](docs/sdks/ticketing/README.md)

* [createTicket](docs/sdks/ticketing/README.md#createticket) - Create Ticket
* [downloadTicketingAttachment](docs/sdks/ticketing/README.md#downloadticketingattachment) - Download Attachment
* [getAttachment](docs/sdks/ticketing/README.md#getattachment) - Get Attachment
* [getCollection](docs/sdks/ticketing/README.md#getcollection) - Get Collection
* [getComment](docs/sdks/ticketing/README.md#getcomment) - Get Comment
* [getTicket](docs/sdks/ticketing/README.md#getticket) - Get Ticket
* [getTicketType](docs/sdks/ticketing/README.md#gettickettype) - Get Ticket Type
* [getUser](docs/sdks/ticketing/README.md#getuser) - Get User
* [listAttachments](docs/sdks/ticketing/README.md#listattachments) - List Attachments
* [listCollectionTicketTypes](docs/sdks/ticketing/README.md#listcollectiontickettypes) - List Collection Ticket Types
* [listCollections](docs/sdks/ticketing/README.md#listcollections) - List Collections
* [listComments](docs/sdks/ticketing/README.md#listcomments) - List Comments
* [listTicketStatuses](docs/sdks/ticketing/README.md#listticketstatuses) - List Ticket Statuses
* [listTicketTypes](docs/sdks/ticketing/README.md#listtickettypes) - List Ticket Types
* [listTickets](docs/sdks/ticketing/README.md#listtickets) - List Tickets
* [listUsers](docs/sdks/ticketing/README.md#listusers) - List Users
* [updateTicket](docs/sdks/ticketing/README.md#updateticket) - Update Ticket

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
  const result = await stackOne.ats.listApplicationChanges({
    fields:
      "event_id,remote_event_id,created_at,effective_at,change_type,actor,new_values",
    filter: {
      createdAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`StackOneError`](./src/sdk/models/errors/stackoneerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import * as errors from "@stackone/stackone-client-ts/sdk/models/errors";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  try {
    const result = await stackOne.accounts.deleteAccount({
      id: "<id>",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.StackOneError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.BadRequestResponse) {
        console.log(error.data$.data); // errors.Data
        console.log(error.data$.message); // string
        console.log(error.data$.providerErrors); // ProviderError[]
        console.log(error.data$.statusCode); // number
        console.log(error.data$.timestamp); // Date
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`StackOneError`](./src/sdk/models/errors/stackoneerror.ts): The base class for HTTP error responses.
  * [`BadRequestResponse`](./src/sdk/models/errors/badrequestresponse.ts): Invalid request. Status code `400`.
  * [`UnauthorizedResponse`](./src/sdk/models/errors/unauthorizedresponse.ts): Unauthorized access. Status code `401`.
  * [`ForbiddenResponse`](./src/sdk/models/errors/forbiddenresponse.ts): Forbidden. Status code `403`.
  * [`NotFoundResponse`](./src/sdk/models/errors/notfoundresponse.ts): Resource not found. Status code `404`.
  * [`RequestTimedOutResponse`](./src/sdk/models/errors/requesttimedoutresponse.ts): The request has timed out. Status code `408`.
  * [`ConflictResponse`](./src/sdk/models/errors/conflictresponse.ts): Conflict with current state. Status code `409`.
  * [`UnprocessableEntityResponse`](./src/sdk/models/errors/unprocessableentityresponse.ts): Validation error. Status code `422`.
  * [`TooManyRequestsResponse`](./src/sdk/models/errors/toomanyrequestsresponse.ts): Too many requests. Status code `429`.
  * [`InternalServerErrorResponse`](./src/sdk/models/errors/internalservererrorresponse.ts): Server error while executing the request. Status code `500`.
  * [`NotImplementedResponse`](./src/sdk/models/errors/notimplementedresponse.ts): This functionality is not implemented. Status code `501`.
  * [`BadGatewayResponse`](./src/sdk/models/errors/badgatewayresponse.ts): Bad gateway error. Status code `502`.
  * [`PreconditionFailedResponse`](./src/sdk/models/errors/preconditionfailedresponse.ts): Precondition failed: linked account belongs to a disabled integration. Status code `412`. *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`StackOneError`](./src/sdk/models/errors/stackoneerror.ts)**:
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
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
- [`atsDeleteBackgroundCheckPackage`](docs/sdks/ats/README.md#deletebackgroundcheckpackage) - Delete Background Check Package
- [`atsDownloadApplicationDocument`](docs/sdks/ats/README.md#downloadapplicationdocument) - Download Application Document
- [`atsGetApplication`](docs/sdks/ats/README.md#getapplication) - Get Application
- [`atsGetApplicationCustomFieldDefinition`](docs/sdks/ats/README.md#getapplicationcustomfielddefinition) - Get Application Custom Field Definition
- [`atsGetApplicationDocument`](docs/sdks/ats/README.md#getapplicationdocument) - Get Application Document
- [`atsGetApplicationNote`](docs/sdks/ats/README.md#getapplicationnote) - Get Application Note
- [`atsGetApplicationOffer`](docs/sdks/ats/README.md#getapplicationoffer) - Get Application Offer
- [`atsGetApplicationScheduledInterview`](docs/sdks/ats/README.md#getapplicationscheduledinterview) - Get Applications scheduled interview
- [`atsGetApplicationScorecard`](docs/sdks/ats/README.md#getapplicationscorecard) - Get Application Scorecard
- [`atsGetAssessmentsPackage`](docs/sdks/ats/README.md#getassessmentspackage) - Get Assessments Package
- [`atsGetAssessmentsResult`](docs/sdks/ats/README.md#getassessmentsresult) - Get Assessments Results
- [`atsGetBackgroundCheckPackage`](docs/sdks/ats/README.md#getbackgroundcheckpackage) - Get Background Check Package
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
- [`atsListApplicationChanges`](docs/sdks/ats/README.md#listapplicationchanges) - List Application Changes
- [`atsListApplicationCustomFieldDefinitions`](docs/sdks/ats/README.md#listapplicationcustomfielddefinitions) - List Application Custom Field Definitions
- [`atsListApplicationDocuments`](docs/sdks/ats/README.md#listapplicationdocuments) - List Application Documents
- [`atsListApplicationNotes`](docs/sdks/ats/README.md#listapplicationnotes) - List Application Notes
- [`atsListApplications`](docs/sdks/ats/README.md#listapplications) - List Applications
- [`atsListApplicationScorecards`](docs/sdks/ats/README.md#listapplicationscorecards) - List Application Scorecards
- [`atsListApplicationsOffers`](docs/sdks/ats/README.md#listapplicationsoffers) - List Application Offers
- [`atsListApplicationsScheduledInterviews`](docs/sdks/ats/README.md#listapplicationsscheduledinterviews) - List Applications scheduled interviews
- [`atsListAssessmentsPackages`](docs/sdks/ats/README.md#listassessmentspackages) - List Assessments Packages
- [`atsListBackgroundCheckPackages`](docs/sdks/ats/README.md#listbackgroundcheckpackages) - List Background Check Packages
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
- [`atsUpdateBackgroundCheckPackage`](docs/sdks/ats/README.md#updatebackgroundcheckpackage) - Update Background Check Package
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
- [`documentsDownloadFile`](docs/sdks/documents/README.md#downloadfile) - Download File
- [`documentsGetDrive`](docs/sdks/documents/README.md#getdrive) - Get Drive
- [`documentsGetFile`](docs/sdks/documents/README.md#getfile) - Get File
- [`documentsGetFolder`](docs/sdks/documents/README.md#getfolder) - Get Folder
- [`documentsListDrives`](docs/sdks/documents/README.md#listdrives) - List Drives
- [`documentsListFiles`](docs/sdks/documents/README.md#listfiles) - List Files
- [`documentsListFolders`](docs/sdks/documents/README.md#listfolders) - List Folders
- [`documentsSearchFiles`](docs/sdks/documents/README.md#searchfiles) - Search Files
- [`documentsUploadFile`](docs/sdks/documents/README.md#uploadfile) - Upload File
- [`hrisBatchUploadEmployeeDocument`](docs/sdks/hris/README.md#batchuploademployeedocument) - Batch Upload Employee Document
- [`hrisCancelEmployeeTimeOffRequest`](docs/sdks/hris/README.md#cancelemployeetimeoffrequest) - Cancel Employee Time Off Request
- [`hrisCreateEmployee`](docs/sdks/hris/README.md#createemployee) - Creates an employee
- [`hrisCreateEmployeeEmployment`](docs/sdks/hris/README.md#createemployeeemployment) - Create Employee Employment
- [`hrisCreateEmployeeSkill`](docs/sdks/hris/README.md#createemployeeskill) - Create Employee Skill
- [`hrisCreateEmployeeTimeOffRequest`](docs/sdks/hris/README.md#createemployeetimeoffrequest) - Create Employee Time Off Request
- [`hrisCreateEmployeeWorkEligibilityRequest`](docs/sdks/hris/README.md#createemployeeworkeligibilityrequest) - Create Employee Work Eligibility Request
- [`hrisDownloadEmployeeDocument`](docs/sdks/hris/README.md#downloademployeedocument) - Download Employee Document
- [`hrisGetBenefit`](docs/sdks/hris/README.md#getbenefit) - Get Benefit
- [`hrisGetCompany`](docs/sdks/hris/README.md#getcompany) - Get Company
- [`hrisGetCompanyGroup`](docs/sdks/hris/README.md#getcompanygroup) - Get Company Group
- [`hrisGetCostCenterGroup`](docs/sdks/hris/README.md#getcostcentergroup) - Get Cost Center Group
- [`hrisGetDepartmentGroup`](docs/sdks/hris/README.md#getdepartmentgroup) - Get Department Group
- [`hrisGetDivisionGroup`](docs/sdks/hris/README.md#getdivisiongroup) - Get Division Group
- [`hrisGetEmployee`](docs/sdks/hris/README.md#getemployee) - Get Employee
- [`hrisGetEmployeeCustomFieldDefinition`](docs/sdks/hris/README.md#getemployeecustomfielddefinition) - Get employee Custom Field Definition
- [`hrisGetEmployeeDocument`](docs/sdks/hris/README.md#getemployeedocument) - Get Employee Document
- [`hrisGetEmployeeDocumentCategory`](docs/sdks/hris/README.md#getemployeedocumentcategory) - Get Employee Document Category
- [`hrisGetEmployeeEmployment`](docs/sdks/hris/README.md#getemployeeemployment) - Get Employee Employment
- [`hrisGetEmployeeSkill`](docs/sdks/hris/README.md#getemployeeskill) - Get Employee Skill
- [`hrisGetEmployeesTimeOffRequest`](docs/sdks/hris/README.md#getemployeestimeoffrequest) - Get Employees Time Off Request
- [`hrisGetEmployeesWorkEligibility`](docs/sdks/hris/README.md#getemployeesworkeligibility) - Get Employees Work Eligibility
- [`hrisGetEmployeeTask`](docs/sdks/hris/README.md#getemployeetask) - Get Employee Task
- [`hrisGetEmployeeTimeOffBalance`](docs/sdks/hris/README.md#getemployeetimeoffbalance) - Get Employee Time Off Balance
- [`hrisGetEmployment`](docs/sdks/hris/README.md#getemployment) - Get Employment
- [`hrisGetGroup`](docs/sdks/hris/README.md#getgroup) - Get Group
- [`hrisGetJob`](docs/sdks/hris/README.md#getjob) - Get Job
- [`hrisGetLocation`](docs/sdks/hris/README.md#getlocation) - Get Work Location
- [`hrisGetPosition`](docs/sdks/hris/README.md#getposition) - Get Position
- [`hrisGetTask`](docs/sdks/hris/README.md#gettask) - Get Task
- [`hrisGetTeamGroup`](docs/sdks/hris/README.md#getteamgroup) - Get Team Group
- [`hrisGetTimeEntries`](docs/sdks/hris/README.md#gettimeentries) - Get Time Entry
- [`hrisGetTimeOffPolicy`](docs/sdks/hris/README.md#gettimeoffpolicy) - Get Time Off Policy
- [`hrisGetTimeOffRequest`](docs/sdks/hris/README.md#gettimeoffrequest) - Get time off request
- [`hrisInviteEmployee`](docs/sdks/hris/README.md#inviteemployee) - Invite Employee
- [`hrisListBenefits`](docs/sdks/hris/README.md#listbenefits) - List benefits
- [`hrisListCompanies`](docs/sdks/hris/README.md#listcompanies) - List Companies
- [`hrisListCompaniesGroups`](docs/sdks/hris/README.md#listcompaniesgroups) - List Companies Groups
- [`hrisListCostCenterGroups`](docs/sdks/hris/README.md#listcostcentergroups) - List Cost Center Groups
- [`hrisListDepartmentGroups`](docs/sdks/hris/README.md#listdepartmentgroups) - List Department Groups
- [`hrisListDivisionGroups`](docs/sdks/hris/README.md#listdivisiongroups) - List Division Groups
- [`hrisListEmployeeCategories`](docs/sdks/hris/README.md#listemployeecategories) - List Employee Document Categories
- [`hrisListEmployeeCustomFieldDefinitions`](docs/sdks/hris/README.md#listemployeecustomfielddefinitions) - List employee Custom Field Definitions
- [`hrisListEmployeeDocuments`](docs/sdks/hris/README.md#listemployeedocuments) - List Employee Documents
- [`hrisListEmployeeEmployments`](docs/sdks/hris/README.md#listemployeeemployments) - List Employee Employments
- [`hrisListEmployees`](docs/sdks/hris/README.md#listemployees) - List Employees
- [`hrisListEmployeeSkills`](docs/sdks/hris/README.md#listemployeeskills) - List Employee Skills
- [`hrisListEmployeeTasks`](docs/sdks/hris/README.md#listemployeetasks) - List Employee Tasks
- [`hrisListEmployeeTimeOffBalances`](docs/sdks/hris/README.md#listemployeetimeoffbalances) - List Employee Time Off Balances
- [`hrisListEmployeeTimeOffPolicies`](docs/sdks/hris/README.md#listemployeetimeoffpolicies) - List Assigned Time Off Policies
- [`hrisListEmployeeTimeOffRequests`](docs/sdks/hris/README.md#listemployeetimeoffrequests) - List Employee Time Off Requests
- [`hrisListEmployeeWorkEligibility`](docs/sdks/hris/README.md#listemployeeworkeligibility) - List Employee Work Eligibility
- [`hrisListEmployments`](docs/sdks/hris/README.md#listemployments) - List Employments
- [`hrisListGroups`](docs/sdks/hris/README.md#listgroups) - List Groups
- [`hrisListJobs`](docs/sdks/hris/README.md#listjobs) - List Jobs
- [`hrisListLocations`](docs/sdks/hris/README.md#listlocations) - List Work Locations
- [`hrisListPositions`](docs/sdks/hris/README.md#listpositions) - List Positions
- [`hrisListTasks`](docs/sdks/hris/README.md#listtasks) - List Tasks
- [`hrisListTeamGroups`](docs/sdks/hris/README.md#listteamgroups) - List Team Groups
- [`hrisListTimeEntries`](docs/sdks/hris/README.md#listtimeentries) - List Time Entries
- [`hrisListTimeOffPolicies`](docs/sdks/hris/README.md#listtimeoffpolicies) - List Time Off Policies
- [`hrisListTimeOffRequests`](docs/sdks/hris/README.md#listtimeoffrequests) - List time off requests
- [`hrisUpdateEmployee`](docs/sdks/hris/README.md#updateemployee) - Updates an employee
- [`hrisUpdateEmployeeEmployment`](docs/sdks/hris/README.md#updateemployeeemployment) - Update Employee Employment
- [`hrisUpdateEmployeeTimeOffRequest`](docs/sdks/hris/README.md#updateemployeetimeoffrequest) - Update Employee Time Off Request
- [`hrisUpdateEmployeeWorkEligibilityRequest`](docs/sdks/hris/README.md#updateemployeeworkeligibilityrequest) - Update Employee Work Eligibility Request
- [`hrisUploadEmployeeDocument`](docs/sdks/hris/README.md#uploademployeedocument) - Upload Employee Document
- [`iamDeleteUser`](docs/sdks/iam/README.md#deleteuser) - Delete User
- [`iamGetGroup`](docs/sdks/iam/README.md#getgroup) - Get Group
- [`iamGetPolicy`](docs/sdks/iam/README.md#getpolicy) - Get Policy
- [`iamGetRole`](docs/sdks/iam/README.md#getrole) - Get Role
- [`iamGetUser`](docs/sdks/iam/README.md#getuser) - Get User
- [`iamListGroups`](docs/sdks/iam/README.md#listgroups) - List Groups
- [`iamListPolicies`](docs/sdks/iam/README.md#listpolicies) - List Policies
- [`iamListRoles`](docs/sdks/iam/README.md#listroles) - List Roles
- [`iamListUsers`](docs/sdks/iam/README.md#listusers) - List Users
- [`iamUpdateUser`](docs/sdks/iam/README.md#updateuser) - Update User
- [`lmsBatchUpsertContent`](docs/sdks/lms/README.md#batchupsertcontent) - Batch Upsert Content
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
- [`lmsUpdateContent`](docs/sdks/lms/README.md#updatecontent) - Update Content
- [`lmsUpsertContent`](docs/sdks/lms/README.md#upsertcontent) - Upsert Content
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
- [`requestLogsGetLog`](docs/sdks/requestlogs/README.md#getlog) - Get a Log
- [`requestLogsListLogs`](docs/sdks/requestlogs/README.md#listlogs) - List Logs
- [`requestLogsListStepLogs`](docs/sdks/requestlogs/README.md#liststeplogs) - List Step Logs
- [`ticketingCreateTicket`](docs/sdks/ticketing/README.md#createticket) - Create Ticket
- [`ticketingDownloadTicketingAttachment`](docs/sdks/ticketing/README.md#downloadticketingattachment) - Download Attachment
- [`ticketingGetAttachment`](docs/sdks/ticketing/README.md#getattachment) - Get Attachment
- [`ticketingGetCollection`](docs/sdks/ticketing/README.md#getcollection) - Get Collection
- [`ticketingGetComment`](docs/sdks/ticketing/README.md#getcomment) - Get Comment
- [`ticketingGetTicket`](docs/sdks/ticketing/README.md#getticket) - Get Ticket
- [`ticketingGetTicketType`](docs/sdks/ticketing/README.md#gettickettype) - Get Ticket Type
- [`ticketingGetUser`](docs/sdks/ticketing/README.md#getuser) - Get User
- [`ticketingListAttachments`](docs/sdks/ticketing/README.md#listattachments) - List Attachments
- [`ticketingListCollections`](docs/sdks/ticketing/README.md#listcollections) - List Collections
- [`ticketingListCollectionTicketTypes`](docs/sdks/ticketing/README.md#listcollectiontickettypes) - List Collection Ticket Types
- [`ticketingListComments`](docs/sdks/ticketing/README.md#listcomments) - List Comments
- [`ticketingListTickets`](docs/sdks/ticketing/README.md#listtickets) - List Tickets
- [`ticketingListTicketStatuses`](docs/sdks/ticketing/README.md#listticketstatuses) - List Ticket Statuses
- [`ticketingListTicketTypes`](docs/sdks/ticketing/README.md#listtickettypes) - List Ticket Types
- [`ticketingListUsers`](docs/sdks/ticketing/README.md#listusers) - List Users
- [`ticketingUpdateTicket`](docs/sdks/ticketing/README.md#updateticket) - Update Ticket
- ~~[`hrisGetTimeOffType`](docs/sdks/hris/README.md#gettimeofftype)~~ - Get time off type :warning: **Deprecated**
- ~~[`hrisListTimeOffTypes`](docs/sdks/hris/README.md#listtimeofftypes)~~ - List time off types :warning: **Deprecated**
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

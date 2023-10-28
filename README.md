# @stackone/stackone-client-ts

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/StackOneHQ/stackone-client-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/bolt-php/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @stackone/stackone-client-ts
```

### Yarn

```bash
yarn add @stackone/stackone-client-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async () => {
    const sdk = new StackOne({
        security: {
            password: "",
            username: "",
        },
    });

    const res = await sdk.accounts.deleteAccount({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/sdks/accounts/README.md)

* [deleteAccount](docs/sdks/accounts/README.md#deleteaccount) - Delete Account
* [getAccount](docs/sdks/accounts/README.md#getaccount) - Get Account
* [getAccountMetaInfo](docs/sdks/accounts/README.md#getaccountmetainfo) - Get meta information of the account
* [listLinkedAccounts](docs/sdks/accounts/README.md#listlinkedaccounts) - List Accounts

### [connectSessions](docs/sdks/connectsessions/README.md)

* [authenticateConnectSession](docs/sdks/connectsessions/README.md#authenticateconnectsession) - Authenticate Connect Session
* [createConnectSession](docs/sdks/connectsessions/README.md#createconnectsession) - Create Connect Session

### [proxy](docs/sdks/proxy/README.md)

* [proxyRequest](docs/sdks/proxy/README.md#proxyrequest) - Proxy Request

### [ats](docs/sdks/ats/README.md)

* [createApplication](docs/sdks/ats/README.md#createapplication) - Create Application (early access)
* [createCandidate](docs/sdks/ats/README.md#createcandidate) - Create Candidate (early access)
* [createCandidateNote](docs/sdks/ats/README.md#createcandidatenote) - Create Candidate Note
* [createOffer](docs/sdks/ats/README.md#createoffer) - Creates an offer
* [getApplication](docs/sdks/ats/README.md#getapplication) - Get Application
* [getApplicationOffer](docs/sdks/ats/README.md#getapplicationoffer) - Get Application Offer
* [getCandidate](docs/sdks/ats/README.md#getcandidate) - Get Candidate
* [getCandidateNote](docs/sdks/ats/README.md#getcandidatenote) - Get Candidate Note
* [getDepartment](docs/sdks/ats/README.md#getdepartment) - Get Department
* [getInterview](docs/sdks/ats/README.md#getinterview) - Get Interview
* [getInterviewStage](docs/sdks/ats/README.md#getinterviewstage) - Get Interview Stage
* [getJob](docs/sdks/ats/README.md#getjob) - Get Job
* [getJobPosting](docs/sdks/ats/README.md#getjobposting) - Get Job Posting
* [getLocation](docs/sdks/ats/README.md#getlocation) - Get Location
* [getOffer](docs/sdks/ats/README.md#getoffer) - Get Offer
* [getRejectedReason](docs/sdks/ats/README.md#getrejectedreason) - Get Rejected Reason
* [getUser](docs/sdks/ats/README.md#getuser) - Get User
* [listApplications](docs/sdks/ats/README.md#listapplications) - List Applications
* [listApplicationsOffers](docs/sdks/ats/README.md#listapplicationsoffers) - List Application Offers
* [listCandidateNotes](docs/sdks/ats/README.md#listcandidatenotes) - List Candidate Notes
* [listCandidates](docs/sdks/ats/README.md#listcandidates) - List Candidates
* [listDepartments](docs/sdks/ats/README.md#listdepartments) - List Departments
* [listInterviewStages](docs/sdks/ats/README.md#listinterviewstages) - List Interview Stages
* [listInterviews](docs/sdks/ats/README.md#listinterviews) - List Interviews
* [listJobPostings](docs/sdks/ats/README.md#listjobpostings) - List Job Postings
* [listJobs](docs/sdks/ats/README.md#listjobs) - List Jobs
* [listLocations](docs/sdks/ats/README.md#listlocations) - List locations
* [listOffers](docs/sdks/ats/README.md#listoffers) - List Offers
* [listRejectedReasons](docs/sdks/ats/README.md#listrejectedreasons) - List Rejected Reasons
* [listUsers](docs/sdks/ats/README.md#listusers) - List Users
* [updateApplication](docs/sdks/ats/README.md#updateapplication) - Update Application (early access)
* [updateCandidate](docs/sdks/ats/README.md#updatecandidate) - Update Candidate (early access)

### [crm](docs/sdks/crm/README.md)

* [createContact](docs/sdks/crm/README.md#createcontact) - Creates a new Contact
* [getAccount](docs/sdks/crm/README.md#getaccount) - Get Account
* [getContact](docs/sdks/crm/README.md#getcontact) - Get Contact
* [getList](docs/sdks/crm/README.md#getlist) - Get List
* [listAccounts](docs/sdks/crm/README.md#listaccounts) - List Accounts
* [listContacts](docs/sdks/crm/README.md#listcontacts) - List Contacts
* [listLists](docs/sdks/crm/README.md#listlists) - Get all Lists
* [updateContact](docs/sdks/crm/README.md#updatecontact) - Update Contact (early access)

### [hris](docs/sdks/hris/README.md)

* [createEmployee](docs/sdks/hris/README.md#createemployee) - Creates an employee
* [createEmployeeTimeOffRequest](docs/sdks/hris/README.md#createemployeetimeoffrequest) - Create Employee Time Off Request
* [createTimeOffRequest](docs/sdks/hris/README.md#createtimeoffrequest) - Creates a time off request
* [getCompany](docs/sdks/hris/README.md#getcompany) - Get Company
* [getEmployee](docs/sdks/hris/README.md#getemployee) - Get Employee
* [getEmployeesTimeOffRequest](docs/sdks/hris/README.md#getemployeestimeoffrequest) - Get Employees Time Off Request
* [getEmployment](docs/sdks/hris/README.md#getemployment) - Get Employment
* [getLocation](docs/sdks/hris/README.md#getlocation) - Get Location
* [getTimeOffRequest](docs/sdks/hris/README.md#gettimeoffrequest) - Get time off request
* [listCompanies](docs/sdks/hris/README.md#listcompanies) - List Companies
* [listEmployeeTimeOffRequests](docs/sdks/hris/README.md#listemployeetimeoffrequests) - List Employee Time Off Requests
* [listEmployees](docs/sdks/hris/README.md#listemployees) - List Employees
* [listEmployments](docs/sdks/hris/README.md#listemployments) - List Employments
* [listLocations](docs/sdks/hris/README.md#listlocations) - List locations
* [listTimeOffRequests](docs/sdks/hris/README.md#listtimeoffrequests) - List time off requests
* [updateEmployee](docs/sdks/hris/README.md#updateemployee) - Updates an employee
* [updateTimeOffRequest](docs/sdks/hris/README.md#updatetimeoffrequest) - Update time off request

### [marketing](docs/sdks/marketing/README.md)

* [createEmailTemplate](docs/sdks/marketing/README.md#createemailtemplate) - Create email template
* [createOmniChannelTemplate](docs/sdks/marketing/README.md#createomnichanneltemplate) - Create omni-channel template
* [createPushTemplate](docs/sdks/marketing/README.md#createpushtemplate) - Create push template
* [getCampaign](docs/sdks/marketing/README.md#getcampaign) - Get campaign
* [getEmailTemplate](docs/sdks/marketing/README.md#getemailtemplate) - Get email template
* [getOmniChannelTemplate](docs/sdks/marketing/README.md#getomnichanneltemplate) - Get omni-channel template
* [getPushTemplate](docs/sdks/marketing/README.md#getpushtemplate) - Get push template
* [listCampaigns](docs/sdks/marketing/README.md#listcampaigns) - List campaigns
* [listEmailTemplates](docs/sdks/marketing/README.md#listemailtemplates) - List email templates
* [listOmniChannelTemplates](docs/sdks/marketing/README.md#listomnichanneltemplates) - List omni-channel templates
* [listPushTemplates](docs/sdks/marketing/README.md#listpushtemplates) - List push templates
* [updateEmailTemplate](docs/sdks/marketing/README.md#updateemailtemplate) - Update email template
* [updateOmniChannelTemplate](docs/sdks/marketing/README.md#updateomnichanneltemplate) - Update omni-channel template
* [updatePushTemplate](docs/sdks/marketing/README.md#updatepushtemplate) - Update push template
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.
<!-- End Error Handling -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @stackone/stackone-client-ts import StackOne;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new StackOne({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.stackone.com` | None |

For example:


```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async () => {
    const sdk = new StackOne({
        security: {
            password: "",
            username: "",
        },
        serverIdx: 0,
    });

    const res = await sdk.accounts.deleteAccount({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:


```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async () => {
    const sdk = new StackOne({
        security: {
            password: "",
            username: "",
        },
        serverURL: "https://api.stackone.com",
    });

    const res = await sdk.accounts.deleteAccount({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

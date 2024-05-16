# @stackone/stackone-client-ts

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @stackone/stackone-client-ts
```

### Yarn

```bash
yarn add @stackone/stackone-client-ts
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### List Employees

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
        filter: {
            updatedAfter: "2020-01-01T00:00:00.000Z",
        },
        include: "avatar_url,avatar,custom_fields,job_description,benefits",
        xAccountId: "<value>",
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [accounts](docs/sdks/accounts/README.md)

* [deleteAccount](docs/sdks/accounts/README.md#deleteaccount) - Delete Account
* [getAccount](docs/sdks/accounts/README.md#getaccount) - Get Account
* [getAccountMetaInfo](docs/sdks/accounts/README.md#getaccountmetainfo) - Get meta information of the account
* [listLinkedAccounts](docs/sdks/accounts/README.md#listlinkedaccounts) - List Accounts
* [updateAccount](docs/sdks/accounts/README.md#updateaccount) - Update Account

### [connectSessions](docs/sdks/connectsessions/README.md)

* [authenticateConnectSession](docs/sdks/connectsessions/README.md#authenticateconnectsession) - Authenticate Connect Session
* [createConnectSession](docs/sdks/connectsessions/README.md#createconnectsession) - Create Connect Session

### [connectors](docs/sdks/connectors/README.md)

* [getConnectorMeta](docs/sdks/connectors/README.md#getconnectormeta) - Get Connector Meta information for the given provider key
* [listConnectorsMeta](docs/sdks/connectors/README.md#listconnectorsmeta) - List Connectors Meta Information for all providers

### [ats](docs/sdks/ats/README.md)

* [createApplication](docs/sdks/ats/README.md#createapplication) - Create Application
* [createCandidate](docs/sdks/ats/README.md#createcandidate) - Create Candidate
* [createCandidateNote](docs/sdks/ats/README.md#createcandidatenote) - Create Candidate Note
* [createOffer](docs/sdks/ats/README.md#createoffer) - Creates an offer
* [downloadApplicationDocument](docs/sdks/ats/README.md#downloadapplicationdocument) - Download Application Document
* [getApplication](docs/sdks/ats/README.md#getapplication) - Get Application
* [getApplicationDocument](docs/sdks/ats/README.md#getapplicationdocument) - Get Application Document
* [getApplicationOffer](docs/sdks/ats/README.md#getapplicationoffer) - Get Application Offer
* [getApplicationScorecard](docs/sdks/ats/README.md#getapplicationscorecard) - Get Application Scorecard
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
* [listApplicationDocuments](docs/sdks/ats/README.md#listapplicationdocuments) - List Application Documents
* [listApplicationScorecards](docs/sdks/ats/README.md#listapplicationscorecards) - List Application Scorecards
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
* [updateApplication](docs/sdks/ats/README.md#updateapplication) - Update an Application
* [updateCandidate](docs/sdks/ats/README.md#updatecandidate) - Update Candidate
* [uploadApplicationDocument](docs/sdks/ats/README.md#uploadapplicationdocument) - Upload Application Document

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
* [createEmployeeWorkEligibilityRequest](docs/sdks/hris/README.md#createemployeeworkeligibilityrequest) - Create Employee Work Eligibility Request
* [createTimeOffRequest](docs/sdks/hris/README.md#createtimeoffrequest) - Creates a time off request
* [downloadEmployeeDocument](docs/sdks/hris/README.md#downloademployeedocument) - Download Employee Document
* [getBenefit](docs/sdks/hris/README.md#getbenefit) - Get Benefit
* [getCompany](docs/sdks/hris/README.md#getcompany) - Get Company
* [getEmployee](docs/sdks/hris/README.md#getemployee) - Get Employee
* [getEmployeeDocument](docs/sdks/hris/README.md#getemployeedocument) - Get Employee Document
* [getEmployeesTimeOffRequest](docs/sdks/hris/README.md#getemployeestimeoffrequest) - Get Employees Time Off Request
* [getEmployeesWorkEligibility](docs/sdks/hris/README.md#getemployeesworkeligibility) - Get Employees Work Eligibility
* [getEmployment](docs/sdks/hris/README.md#getemployment) - Get Employment
* [getGroup](docs/sdks/hris/README.md#getgroup) - Get Group
* [getLocation](docs/sdks/hris/README.md#getlocation) - Get Location
* [getTimeOffRequest](docs/sdks/hris/README.md#gettimeoffrequest) - Get time off request
* [listBenefits](docs/sdks/hris/README.md#listbenefits) - List benefits
* [listCompanies](docs/sdks/hris/README.md#listcompanies) - List Companies
* [listEmployeeDocuments](docs/sdks/hris/README.md#listemployeedocuments) - List Employee Documents
* [listEmployeeTimeOffRequests](docs/sdks/hris/README.md#listemployeetimeoffrequests) - List Employee Time Off Requests
* [listEmployeeWorkEligibility](docs/sdks/hris/README.md#listemployeeworkeligibility) - List Employee Work Eligibility
* [listEmployees](docs/sdks/hris/README.md#listemployees) - List Employees
* [listEmployments](docs/sdks/hris/README.md#listemployments) - List Employments
* [listGroups](docs/sdks/hris/README.md#listgroups) - List Groups
* [listLocations](docs/sdks/hris/README.md#listlocations) - List locations
* [listTimeOffRequests](docs/sdks/hris/README.md#listtimeoffrequests) - List time off requests
* [updateEmployee](docs/sdks/hris/README.md#updateemployee) - Updates an employee
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

### [proxy](docs/sdks/proxy/README.md)

* [proxyRequest](docs/sdks/proxy/README.md#proxyrequest) - Proxy Request
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
        password: "<YOUR_PASSWORD_HERE>",
    },
});

async function run() {
    const result = await stackOne.hris.listEmployees({
        expand: "company,employments,work_location,home_location,custom_fields,groups",
        fields: "id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_title,job_description,department,cost_centers,benefits,manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,employee_number",
        filter: {
            updatedAfter: "2020-01-01T00:00:00.000Z",
        },
        include: "avatar_url,avatar,custom_fields,job_description,benefits",
        xAccountId: "<value>",
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import * as errors from "@stackone/stackone-client-ts/sdk/models/errors";

const stackOne = new StackOne({
    security: {
        password: "<YOUR_PASSWORD_HERE>",
    },
});

async function run() {
    let result;
    try {
        result = await stackOne.accounts.deleteAccount({
            id: "<id>",
        });
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
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

This SDK supports the following security schemes globally:

| Name       | Type       | Scheme     |
| ---------- | ---------- | ---------- |
| `password` | http       | HTTP Basic |
| `username` | http       | HTTP Basic |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
    security: {
        password: "<YOUR_PASSWORD_HERE>",
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

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

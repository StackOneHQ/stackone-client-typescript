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

    const res = await sdk.accounts.accountsDelete({
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

* [accountsDelete](docs/sdks/accounts/README.md#accountsdelete) - Delete Account
* [accountsGet](docs/sdks/accounts/README.md#accountsget) - Get Account
* [accountsList](docs/sdks/accounts/README.md#accountslist) - List Accounts
* [accountsMetaGet](docs/sdks/accounts/README.md#accountsmetaget) - Get meta information of the account
* [crmAccountsGet](docs/sdks/accounts/README.md#crmaccountsget) - Get Account
* [crmAccountsList](docs/sdks/accounts/README.md#crmaccountslist) - List Accounts

### [applications](docs/sdks/applications/README.md)

* [applicationPatch](docs/sdks/applications/README.md#applicationpatch) - Update Application (early access)
* [applicationPost](docs/sdks/applications/README.md#applicationpost) - Create Application (early access)
* [applicationsGet](docs/sdks/applications/README.md#applicationsget) - Get Application
* [applicationsList](docs/sdks/applications/README.md#applicationslist) - List Applications
* [applicationsOffersGet](docs/sdks/applications/README.md#applicationsoffersget) - Get Application Offer
* [applicationsOffersList](docs/sdks/applications/README.md#applicationsofferslist) - List Application Offers

### [campaigns](docs/sdks/campaigns/README.md)

* [marketingCampaignsGet](docs/sdks/campaigns/README.md#marketingcampaignsget) - Get campaign
* [marketingCampaignsList](docs/sdks/campaigns/README.md#marketingcampaignslist) - List campaigns

### [candidates](docs/sdks/candidates/README.md)

* [atsCandidatePatch](docs/sdks/candidates/README.md#atscandidatepatch) - Patch Candidate (early access)
* [atsCandidatePost](docs/sdks/candidates/README.md#atscandidatepost) - Post Candidate (early access)
* [atsCandidatesGet](docs/sdks/candidates/README.md#atscandidatesget) - Get Candidate
* [atsCandidatesList](docs/sdks/candidates/README.md#atscandidateslist) - List Candidates
* [candidateNoteCreate](docs/sdks/candidates/README.md#candidatenotecreate) - Create Candidate Note
* [notesGet](docs/sdks/candidates/README.md#notesget) - Get Candidate Note
* [notesList](docs/sdks/candidates/README.md#noteslist) - List Candidate Notes

### [companies](docs/sdks/companies/README.md)

* [hrisCompaniesGet](docs/sdks/companies/README.md#hriscompaniesget) - Get Company
* [hrisCompaniesList](docs/sdks/companies/README.md#hriscompanieslist) - List Companies

### [connectSessions](docs/sdks/connectsessions/README.md)

* [connectSessionsAuthenticate](docs/sdks/connectsessions/README.md#connectsessionsauthenticate) - Authenticate Session
* [connectSessionsCreate](docs/sdks/connectsessions/README.md#connectsessionscreate) - Create Session

### [contacts](docs/sdks/contacts/README.md)

* [contactsList](docs/sdks/contacts/README.md#contactslist) - List Contacts
* [crmContactPatch](docs/sdks/contacts/README.md#crmcontactpatch) - Patch Contact (early access)
* [crmContactPost](docs/sdks/contacts/README.md#crmcontactpost) - Creates a new Contact
* [crmContactsGet](docs/sdks/contacts/README.md#crmcontactsget) - Get Contact

### [departments](docs/sdks/departments/README.md)

* [atsDepartmentsGet](docs/sdks/departments/README.md#atsdepartmentsget) - Get Department
* [atsDepartmentsList](docs/sdks/departments/README.md#atsdepartmentslist) - List Departments

### [employees](docs/sdks/employees/README.md)

* [employeeCreate](docs/sdks/employees/README.md#employeecreate) - Creates an employee
* [employeeTimeOffCreate](docs/sdks/employees/README.md#employeetimeoffcreate) - Create Employee Time Off Request
* [employeeTimeOffList](docs/sdks/employees/README.md#employeetimeofflist) - List Employee Time Off Requests
* [employeeUpdate](docs/sdks/employees/README.md#employeeupdate) - Updates an employee
* [employeesTimeOffGet](docs/sdks/employees/README.md#employeestimeoffget) - Get Employees Time Off Request
* [hrisEmployeesGet](docs/sdks/employees/README.md#hrisemployeesget) - Get Employee
* [hrisEmployeesList](docs/sdks/employees/README.md#hrisemployeeslist) - List Employees

### [employments](docs/sdks/employments/README.md)

* [hrisEmploymentsGet](docs/sdks/employments/README.md#hrisemploymentsget) - Get Employment
* [hrisEmploymentsList](docs/sdks/employments/README.md#hrisemploymentslist) - List Employments

### [interviewStages](docs/sdks/interviewstages/README.md)

* [atsInterviewStagesGet](docs/sdks/interviewstages/README.md#atsinterviewstagesget) - Get Interview Stage
* [atsInterviewStagesList](docs/sdks/interviewstages/README.md#atsinterviewstageslist) - List Interview Stages

### [interviews](docs/sdks/interviews/README.md)

* [atsInterviewsGet](docs/sdks/interviews/README.md#atsinterviewsget) - Get Interview
* [atsInterviewsList](docs/sdks/interviews/README.md#atsinterviewslist) - List Interviews

### [jobPostings](docs/sdks/jobpostings/README.md)

* [atsJobPostingsGet](docs/sdks/jobpostings/README.md#atsjobpostingsget) - Get Job Posting
* [atsJobPostingsList](docs/sdks/jobpostings/README.md#atsjobpostingslist) - List Job Postings

### [jobs](docs/sdks/jobs/README.md)

* [atsJobsGet](docs/sdks/jobs/README.md#atsjobsget) - Get Job
* [atsJobsList](docs/sdks/jobs/README.md#atsjobslist) - List Jobs

### [lists](docs/sdks/lists/README.md)

* [crmListsGet](docs/sdks/lists/README.md#crmlistsget) - Get Lists
* [listsList](docs/sdks/lists/README.md#listslist) - List Lists

### [locations](docs/sdks/locations/README.md)

* [atsLocationsGet](docs/sdks/locations/README.md#atslocationsget) - Get Location
* [atsLocationsList](docs/sdks/locations/README.md#atslocationslist) - List locations
* [hrisLocationsGet](docs/sdks/locations/README.md#hrislocationsget) - Get location
* [hrisLocationsList](docs/sdks/locations/README.md#hrislocationslist) - List locations

### [offers](docs/sdks/offers/README.md)

* [atsOffersList](docs/sdks/offers/README.md#atsofferslist) - List Offers
* [offerCreate](docs/sdks/offers/README.md#offercreate) - Creates an offer
* [offersGet](docs/sdks/offers/README.md#offersget) - Get Offer

### [proxy](docs/sdks/proxy/README.md)

* [proxyRequestPost](docs/sdks/proxy/README.md#proxyrequestpost) - Proxy Request

### [rejectedReasons](docs/sdks/rejectedreasons/README.md)

* [atsRejectedReasonsGet](docs/sdks/rejectedreasons/README.md#atsrejectedreasonsget) - Get Rejected Reason
* [atsRejectedReasonsList](docs/sdks/rejectedreasons/README.md#atsrejectedreasonslist) - List Rejected Reasons

### [templates](docs/sdks/templates/README.md)

* [marketingEmailTemplateCreate](docs/sdks/templates/README.md#marketingemailtemplatecreate) - Create email template
* [marketingEmailTemplateUpdate](docs/sdks/templates/README.md#marketingemailtemplateupdate) - Update email template
* [marketingEmailTemplatesGet](docs/sdks/templates/README.md#marketingemailtemplatesget) - Get email template
* [marketingEmailTemplatesList](docs/sdks/templates/README.md#marketingemailtemplateslist) - List email templates
* [marketingOmniChannelTemplateCreate](docs/sdks/templates/README.md#marketingomnichanneltemplatecreate) - Create omni-channel template
* [marketingOmniChannelTemplateUpdate](docs/sdks/templates/README.md#marketingomnichanneltemplateupdate) - Update omni-channel template
* [marketingOmniChannelTemplatesGet](docs/sdks/templates/README.md#marketingomnichanneltemplatesget) - Get omni-channel template
* [marketingOmniChannelTemplatesList](docs/sdks/templates/README.md#marketingomnichanneltemplateslist) - List omni-channel templates
* [marketingPushTemplateCreate](docs/sdks/templates/README.md#marketingpushtemplatecreate) - Create push template
* [marketingPushTemplateUpdate](docs/sdks/templates/README.md#marketingpushtemplateupdate) - Update push template
* [marketingPushTemplatesGet](docs/sdks/templates/README.md#marketingpushtemplatesget) - Get push template
* [marketingPushTemplatesList](docs/sdks/templates/README.md#marketingpushtemplateslist) - List push templates

### [timeOff](docs/sdks/timeoff/README.md)

* [hrisTimeOffGet](docs/sdks/timeoff/README.md#hristimeoffget) - Get time off request
* [hrisTimeOffList](docs/sdks/timeoff/README.md#hristimeofflist) - List time off requests
* [timeOffCreate](docs/sdks/timeoff/README.md#timeoffcreate) - Creates a time off request
* [timeOffUpdate](docs/sdks/timeoff/README.md#timeoffupdate) - Update time off request

### [users](docs/sdks/users/README.md)

* [atsUsersGet](docs/sdks/users/README.md#atsusersget) - Get User
* [atsUsersList](docs/sdks/users/README.md#atsuserslist) - List Users
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

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

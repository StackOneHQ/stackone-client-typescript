# JobPosting


## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `compensation`                                                                              | [Compensation](../../models/shared/compensation.md)[]                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         | [object Object],[object Object]                                                             |
| `content`                                                                                   | [JobPostingContent](../../models/shared/jobpostingcontent.md)                               | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `createdAt`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 2023-01-01T12:00:00Z                                                                        |
| `employmentContractType`                                                                    | [JobPostingEmploymentContractType](../../models/shared/jobpostingemploymentcontracttype.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         | full_time                                                                                   |
| `employmentType`                                                                            | [JobPostingEmploymentType](../../models/shared/jobpostingemploymenttype.md)                 | :heavy_minus_sign:                                                                          | N/A                                                                                         | permanent                                                                                   |
| `externalApplyUrl`                                                                          | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | https://www.example.com/job-posting/abcd1234/apply                                          |
| `externalUrl`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | https://www.example.com/job-posting/abcd1234                                                |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | abcd1234                                                                                    |
| `internal`                                                                                  | [JobPostingInternal](../../models/shared/jobpostinginternal.md)                             | :heavy_minus_sign:                                                                          | N/A                                                                                         | true                                                                                        |
| `jobId`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | job001                                                                                      |
| `locations`                                                                                 | [Location](../../models/shared/location.md)[]                                               | :heavy_minus_sign:                                                                          | N/A                                                                                         | [object Object],[object Object]                                                             |
| `questions`                                                                                 | [Questions](../../models/shared/questions.md)[]                                             | :heavy_minus_sign:                                                                          | N/A                                                                                         | [object Object],[object Object]                                                             |
| `status`                                                                                    | [JobPostingStatus](../../models/shared/jobpostingstatus.md)                                 | :heavy_minus_sign:                                                                          | N/A                                                                                         | live                                                                                        |
| `title`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | Software Engineer                                                                           |
| `updatedAt`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 2023-08-24T12:00:00Z                                                                        |
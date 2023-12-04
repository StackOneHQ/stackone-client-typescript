# CrmCreateContactRequestDto


## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `accountIds`                    | *string*[]                      | :heavy_minus_sign:              | List of associated account IDs  | ["account-123","account-456"]   |
| `companyName`                   | *string*                        | :heavy_minus_sign:              | The contact company name        | Apple Inc.                      |
| `dealIds`                       | *string*[]                      | :heavy_minus_sign:              | List of associated deal IDs     | ["deal-001","deal-002"]         |
| `emails`                        | *string*[]                      | :heavy_minus_sign:              | List of contact email addresses | ["steve@apple.com"]             |
| `firstName`                     | *string*                        | :heavy_minus_sign:              | The contact first name          | Steve                           |
| `lastName`                      | *string*                        | :heavy_minus_sign:              | The contact last name           | Wozniak                         |
| `phoneNumbers`                  | *string*[]                      | :heavy_minus_sign:              | List of contact phone numbers   | ["123-456-7890"]                |
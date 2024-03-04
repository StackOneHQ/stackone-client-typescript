# CrmCreateContactRequestDto


## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `accountIds`                     | *string*[]                       | :heavy_minus_sign:               | List of associated account IDs   | [<br/>"account-123",<br/>"account-456"<br/>] |
| `companyName`                    | *string*                         | :heavy_minus_sign:               | The contact company name         | Apple Inc.                       |
| `dealIds`                        | *string*[]                       | :heavy_minus_sign:               | List of associated deal IDs      | [<br/>"deal-001",<br/>"deal-002"<br/>] |
| `emails`                         | *string*[]                       | :heavy_minus_sign:               | List of contact email addresses  | [<br/>"steve@apple.com"<br/>]    |
| `firstName`                      | *string*                         | :heavy_minus_sign:               | The contact first name           | Steve                            |
| `lastName`                       | *string*                         | :heavy_minus_sign:               | The contact last name            | Wozniak                          |
| `phoneNumbers`                   | *string*[]                       | :heavy_minus_sign:               | List of contact phone numbers    | [<br/>"123-456-7890"<br/>]       |
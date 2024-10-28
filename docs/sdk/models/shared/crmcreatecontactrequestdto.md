# CrmCreateContactRequestDto

## Example Usage

```typescript
import { CrmCreateContactRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CrmCreateContactRequestDto = {
  accountIds: [
    "account-123",
    "account-456",
  ],
  companyName: "Apple Inc.",
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
  dealIds: [
    "deal-001",
    "deal-002",
  ],
  emails: [
    "steve@apple.com",
  ],
  firstName: "Steve",
  lastName: "Wozniak",
  passthrough: {
    "other_known_names": "John Doe",
  },
  phoneNumbers: [
    "123-456-7890",
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `accountIds`                                                                        | *string*[]                                                                          | :heavy_minus_sign:                                                                  | List of associated account IDs                                                      | [<br/>"account-123",<br/>"account-456"<br/>]                                        |
| `companyName`                                                                       | *string*                                                                            | :heavy_minus_sign:                                                                  | The contact company name                                                            | Apple Inc.                                                                          |
| `customFields`                                                                      | [shared.ContactsCustomFields](../../../sdk/models/shared/contactscustomfields.md)[] | :heavy_minus_sign:                                                                  | Contact custom fields                                                               |                                                                                     |
| `dealIds`                                                                           | *string*[]                                                                          | :heavy_minus_sign:                                                                  | List of associated deal IDs                                                         | [<br/>"deal-001",<br/>"deal-002"<br/>]                                              |
| `emails`                                                                            | *string*[]                                                                          | :heavy_minus_sign:                                                                  | List of contact email addresses                                                     | [<br/>"steve@apple.com"<br/>]                                                       |
| `firstName`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | The contact first name                                                              | Steve                                                                               |
| `lastName`                                                                          | *string*                                                                            | :heavy_minus_sign:                                                                  | The contact last name                                                               | Wozniak                                                                             |
| `passthrough`                                                                       | Record<string, *any*>                                                               | :heavy_minus_sign:                                                                  | Value to pass through to the provider                                               | {<br/>"other_known_names": "John Doe"<br/>}                                         |
| `phoneNumbers`                                                                      | *string*[]                                                                          | :heavy_minus_sign:                                                                  | List of contact phone numbers                                                       | [<br/>"123-456-7890"<br/>]                                                          |
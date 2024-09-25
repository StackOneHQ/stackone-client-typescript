# Contact

## Example Usage

```typescript
import { Contact } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Contact = {
  accountIds: [
    "account-123",
    "account-456",
  ],
  companyName: "Apple Inc.",
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
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
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  lastName: "Wozniak",
  phoneNumbers: [
    "123-456-7890",
  ],
  remoteAccountIds: [
    "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
  ],
  remoteDealIds: [
    "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
  ],
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountIds`                                                                                  | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of associated account IDs                                                                | [<br/>"account-123",<br/>"account-456"<br/>]                                                  |
| `companyName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The contact company name                                                                      | Apple Inc.                                                                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when the contact was created                                                        | 2021-01-01T01:01:01.000Z                                                                      |
| `customFields`                                                                                | [shared.ContactsCustomFields](../../../sdk/models/shared/contactscustomfields.md)[]           | :heavy_minus_sign:                                                                            | Contact custom fields                                                                         |                                                                                               |
| `dealIds`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of associated deal IDs                                                                   | [<br/>"deal-001",<br/>"deal-002"<br/>]                                                        |
| `emails`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of contact email addresses                                                               | [<br/>"steve@apple.com"<br/>]                                                                 |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The contact first name                                                                        | Steve                                                                                         |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The contact last name                                                                         | Wozniak                                                                                       |
| `phoneNumbers`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of contact phone numbers                                                                 | [<br/>"123-456-7890"<br/>]                                                                    |
| `remoteAccountIds`                                                                            | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Provider's list of associated account IDs                                                     | [<br/>"e3cb75bf-aa84-466e-a6c1-b8322b257a48",<br/>"e3cb75bf-aa84-466e-a6c1-b8322b257a49"<br/>] |
| `remoteDealIds`                                                                               | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Provider's list of associated deal IDs                                                        | [<br/>"e3cb75bf-aa84-466e-a6c1-b8322b257a48",<br/>"e3cb75bf-aa84-466e-a6c1-b8322b257a49"<br/>] |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `unifiedCustomFields`                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom Unified Fields configured in your StackOne project                                     | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when the contact was last updated                                                   | 2021-01-01T01:01:01.000Z                                                                      |
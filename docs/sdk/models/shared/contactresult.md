# ContactResult

## Example Usage

```typescript
import { ContactResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContactResult = {
  data: {
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
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Contact](../../../sdk/models/shared/contact.md)           | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
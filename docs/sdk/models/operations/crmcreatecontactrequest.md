# CrmCreateContactRequest

## Example Usage

```typescript
import { CrmCreateContactRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: CrmCreateContactRequest = {
  crmCreateContactRequestDto: {
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
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `crmCreateContactRequestDto`                                                                  | [shared.CrmCreateContactRequestDto](../../../sdk/models/shared/crmcreatecontactrequestdto.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `xAccountId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The account identifier                                                                        |
# CrmUpdateContactRequest

## Example Usage

```typescript
import { CrmUpdateContactRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: CrmUpdateContactRequest = {
  crmCreateContactRequestDto: {
    accountIds: [
      "account-123",
      "account-456",
    ],
    companyName: "Apple Inc.",
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
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `crmCreateContactRequestDto`                                                                  | [shared.CrmCreateContactRequestDto](../../../sdk/models/shared/crmcreatecontactrequestdto.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `xAccountId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The account identifier                                                                        |
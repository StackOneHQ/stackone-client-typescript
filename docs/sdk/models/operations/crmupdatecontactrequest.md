# CrmUpdateContactRequest

## Example Usage

```typescript
import { CrmUpdateContactRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: CrmUpdateContactRequest = {
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
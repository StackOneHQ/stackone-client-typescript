# LinkedAccount

## Example Usage

```typescript
import { LinkedAccount, LinkedAccountStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LinkedAccount = {
  createdAt: new Date("2024-11-14T05:17:46.077Z"),
  id: "<id>",
  originOwnerId: "<id>",
  originOwnerName: "<value>",
  provider: "<value>",
  status: LinkedAccountStatus.Active,
  updatedAt: new Date("2024-09-17T18:23:38.222Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `credentials`                                                                                 | [shared.Credentials](../../../sdk/models/shared/credentials.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `label`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `originOwnerId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `originOwnerName`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `originUsername`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `setupInformation`                                                                            | [shared.SetupInformation](../../../sdk/models/shared/setupinformation.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.LinkedAccountStatus](../../../sdk/models/shared/linkedaccountstatus.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `statusReasons`                                                                               | [shared.StatusReason](../../../sdk/models/shared/statusreason.md)[]                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
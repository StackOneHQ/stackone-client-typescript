# ConnectSessionTokenAuthLinkLatestConnectionAttempt

The most recent connection attempt initiated against this session, if any. Use this to poll for OAuth completion: when status is "authenticated", the resulting account is at account_secure_id.

## Example Usage

```typescript
import {
  ConnectSessionTokenAuthLinkLatestConnectionAttempt,
  ConnectSessionTokenAuthLinkStatus,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConnectSessionTokenAuthLinkLatestConnectionAttempt = {
  createdAt: new Date("2024-07-30T04:35:07.940Z"),
  id: "<id>",
  status: ConnectSessionTokenAuthLinkStatus.Pending,
  updatedAt: new Date("2024-02-17T12:11:33.506Z"),
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `accountSecureId`                                                                                               | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The secure id of the account created/updated by this attempt. Populated only after a successful authentication. |                                                                                                                 |
| `createdAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `oauthErrorCode`                                                                                                | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `oauthErrorDescription`                                                                                         | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `status`                                                                                                        | [shared.ConnectSessionTokenAuthLinkStatus](../../../sdk/models/shared/connectsessiontokenauthlinkstatus.md)     | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | pending                                                                                                         |
| `updatedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
# Details

## Example Usage

```typescript
import { Details, Status } from "@stackone/stackone-client-ts/sdk/models/errors";

let value: Details = {
  status: Status.Suspended,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the test account expired. Present when status is expired                                 |                                                                                               |
| `status`                                                                                      | [errors.Status](../../../sdk/models/errors/status.md)                                         | :heavy_check_mark:                                                                            | The account status that blocked the request                                                   | suspended                                                                                     |
| `statusReasons`                                                                               | [shared.StatusReason](../../../sdk/models/shared/statusreason.md)[]                           | :heavy_minus_sign:                                                                            | Why the account is in an error state. Present when status is error                            |                                                                                               |
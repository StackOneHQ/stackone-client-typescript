# StackoneMcpDeleteRequest

## Example Usage

```typescript
import { StackoneMcpDeleteRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneMcpDeleteRequest = {
  mcpSessionId: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `mcpSessionId`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Session id                                                                                               |
| `xAccountId`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Account secure id for the target provider account (optional if x-account-id query parameter is provided) |
| `xAccountIdQueryParameter`                                                                               | *any*                                                                                                    | :heavy_minus_sign:                                                                                       | Account secure id (alternative to x-account-id header)                                                   |
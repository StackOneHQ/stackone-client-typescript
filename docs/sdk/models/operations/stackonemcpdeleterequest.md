# StackoneMcpDeleteRequest

## Example Usage

```typescript
import { StackoneMcpDeleteRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneMcpDeleteRequest = {
  mcpSessionId: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `mcpSessionId`                                    | *string*                                          | :heavy_check_mark:                                | Session id                                        |
| `xAccountId`                                      | *string*                                          | :heavy_check_mark:                                | Account secure id for the target provider account |
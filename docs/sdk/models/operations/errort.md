# ErrorT

Present on protocol-level failure. Tool-level failures use result with isError: true instead.

## Example Usage

```typescript
import { ErrorT } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: ErrorT = {
  code: -32600,
  message: "Invalid request",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `code`                   | *number*                 | :heavy_minus_sign:       | N/A                      | -32600                   |
| `data`                   | *any*                    | :heavy_minus_sign:       | Additional error context |                          |
| `message`                | *string*                 | :heavy_minus_sign:       | N/A                      | Invalid request          |
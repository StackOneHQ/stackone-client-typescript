# Method

The method of the request

## Example Usage

```typescript
import { Method } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Method = Method.Put;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Get`                  | get                    |
| `Post`                 | post                   |
| `Put`                  | put                    |
| `Delete`               | delete                 |
| `Patch`                | patch                  |
| -                      | `Unrecognized<string>` |
# Method

The method of the request

## Example Usage

```typescript
import { Method } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Method = Method.Post;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Get`                  | get                    |
| `Post`                 | post                   |
| `Put`                  | put                    |
| `Delete`               | delete                 |
| `Patch`                | patch                  |
| -                      | `Unrecognized<string>` |
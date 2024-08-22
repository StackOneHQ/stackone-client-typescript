# CompletionValue

## Example Usage

```typescript
import { CompletionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CompletionValue = CompletionValue.Pass;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pass`                 | Pass                   |
| `Fail`                 | Fail                   |
| -                      | `Unrecognized<string>` |
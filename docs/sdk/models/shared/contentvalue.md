# ContentValue

## Example Usage

```typescript
import { ContentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentValue = ContentValue.Document;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Video`                | video                  |
| `Quiz`                 | quiz                   |
| `Document`             | document               |
| -                      | `Unrecognized<string>` |
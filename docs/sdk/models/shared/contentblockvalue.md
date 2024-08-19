# ContentBlockValue

The Status of the content blocks.

## Example Usage

```typescript
import { ContentBlockValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentBlockValue = ContentBlockValue.Live;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Draft`                | draft                  |
| `Live`                 | live                   |
| `Archived`             | archived               |
| -                      | `Unrecognized<string>` |
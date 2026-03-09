# ContentBlockValue

The Status of the content blocks.

## Example Usage

```typescript
import { ContentBlockValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentBlockValue = ContentBlockValue.Live;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Draft`                | draft                  |
| `Live`                 | live                   |
| `Archived`             | archived               |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
# ContentValue

The StackOne unified content type.

## Example Usage

```typescript
import { ContentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentValue = ContentValue.Article;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Video`                | video                  |
| `Quiz`                 | quiz                   |
| `Document`             | document               |
| `Audio`                | audio                  |
| `Article`              | article                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
# ContentBlockSchemasValue

The type of the content blocks.

## Example Usage

```typescript
import { ContentBlockSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentBlockSchemasValue = ContentBlockSchemasValue.Html;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Text`                 | text                   |
| `Html`                 | html                   |
| `Image`                | image                  |
| `CodeSnippet`          | code-snippet           |
| -                      | `Unrecognized<string>` |
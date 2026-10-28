# LmsUpsertContentRequestDtoValue

The content type for write operations. Provide one of the listed enum values. If omitted or set to "unmapped_value", the source_value will be sent to the provider instead.

## Example Usage

```typescript
import { LmsUpsertContentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsUpsertContentRequestDtoValue =
  LmsUpsertContentRequestDtoValue.Article;

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
| `Book`                 | book                   |
| `Event`                | event                  |
| `Course`               | course                 |
| `Collection`           | collection             |
| `Interactive`          | interactive            |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
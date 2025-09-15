# LmsUpsertContentRequestDtoValue

## Example Usage

```typescript
import { LmsUpsertContentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsUpsertContentRequestDtoValue =
  LmsUpsertContentRequestDtoValue.Article;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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
# DocumentsFilesSearchRequestDtoOperator

The Operator of the query

## Example Usage

```typescript
import { DocumentsFilesSearchRequestDtoOperator } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DocumentsFilesSearchRequestDtoOperator =
  DocumentsFilesSearchRequestDtoOperator.Equal;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Equal`                | equal                  |
| `NotEqual`             | not_equal              |
| `Contain`              | contain                |
| `LessThan`             | less_than              |
| `GreaterThan`          | greater_than           |
| `LessThanOrEqual`      | less_than_or_equal     |
| `GreaterThanOrEqual`   | greater_than_or_equal  |
| `And`                  | and                    |
| `Or`                   | or                     |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
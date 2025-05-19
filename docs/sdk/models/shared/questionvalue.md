# QuestionValue

The type of the questions.

## Example Usage

```typescript
import { QuestionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: QuestionValue = QuestionValue.ShortText;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `ShortText`            | short_text             |
| `LongText`             | long_text              |
| `Attachment`           | attachment             |
| `MultiSelect`          | multi_select           |
| `SingleSelect`         | single_select          |
| `Boolean`              | boolean                |
| `Number`               | number                 |
| `Date`                 | date                   |
| `Video`                | video                  |
| `ReferenceCheck`       | reference_check        |
| `Url`                  | url                    |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
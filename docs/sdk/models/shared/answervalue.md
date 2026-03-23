# AnswerValue

The type of the answer.

## Example Usage

```typescript
import { AnswerValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AnswerValue = AnswerValue.ShortText;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

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
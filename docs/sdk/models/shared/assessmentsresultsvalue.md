# AssessmentsResultsValue

The result of the assessment.

## Example Usage

```typescript
import { AssessmentsResultsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsResultsValue = AssessmentsResultsValue.Passed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Cancelled`            | cancelled              |
| `Expired`              | expired                |
| `Failed`               | failed                 |
| `Passed`               | passed                 |
| -                      | `Unrecognized<string>` |
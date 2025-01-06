# AssessmentResultValue

The result of the test.

## Example Usage

```typescript
import { AssessmentResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentResultValue = AssessmentResultValue.Passed;
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
# AtsUpdateCandidatesAssessmentsResultsRequestDtoValue

The result of the test.

## Example Usage

```typescript
import { AtsUpdateCandidatesAssessmentsResultsRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateCandidatesAssessmentsResultsRequestDtoValue =
  AtsUpdateCandidatesAssessmentsResultsRequestDtoValue.Passed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Initiated`            | initiated              |
| `InProgress`           | in_progress            |
| `Cancelled`            | cancelled              |
| `Completed`            | completed              |
| `Expired`              | expired                |
| `Failed`               | failed                 |
| `Passed`               | passed                 |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
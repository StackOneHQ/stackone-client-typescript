# AtsUpdateCandidatesAssessmentsResultsRequestDtoValue

The result of the test.

## Example Usage

```typescript
import { AtsUpdateCandidatesAssessmentsResultsRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateCandidatesAssessmentsResultsRequestDtoValue =
  AtsUpdateCandidatesAssessmentsResultsRequestDtoValue.Passed;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

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
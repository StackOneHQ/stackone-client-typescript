# AssessmentOrderValue

The status of the application.

## Example Usage

```typescript
import { AssessmentOrderValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentOrderValue = AssessmentOrderValue.Hired;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Active`               | active                 |
| `Assessment`           | assessment             |
| `BackgroundCheck`      | background_check       |
| `Converted`            | converted              |
| `DeclinedByCandidate`  | declined_by_candidate  |
| `Hired`                | hired                  |
| `Interview`            | interview              |
| `Lead`                 | lead                   |
| `Offer`                | offer                  |
| `ReferenceCheck`       | reference_check        |
| `Rejected`             | rejected               |
| `Review`               | review                 |
| `Screen`               | screen                 |
| `New`                  | new                    |
| `Onboarding`           | onboarding             |
| `Created`              | created                |
| `Accepted`             | accepted               |
| `ShortList`            | short_list             |
| `Approved`             | approved               |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
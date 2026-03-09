# RejectedReasonValue

The type of the rejected reason.

## Example Usage

```typescript
import { RejectedReasonValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: RejectedReasonValue = RejectedReasonValue.RejectedByOrganization;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `RejectedByCandidate`    | rejected_by_candidate    |
| `RejectedByOrganization` | rejected_by_organization |
| `Other`                  | other                    |
| `Unknown`                | unknown                  |
| `UnmappedValue`          | unmapped_value           |
| -                        | `Unrecognized<string>`   |
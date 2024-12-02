# OverallRecommendation

The overall recommendation

## Example Usage

```typescript
import { OverallRecommendation } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: OverallRecommendation = OverallRecommendation.No;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StrongYes`            | strong_yes             |
| `Yes`                  | yes                    |
| `No`                   | no                     |
| `StrongNo`             | strong_no              |
| `NoDecision`           | no_decision            |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
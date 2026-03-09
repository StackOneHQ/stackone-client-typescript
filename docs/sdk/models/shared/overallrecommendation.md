# OverallRecommendation

The overall recommendation

## Example Usage

```typescript
import { OverallRecommendation } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: OverallRecommendation = OverallRecommendation.Yes;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StrongYes`            | strong_yes             |
| `Yes`                  | yes                    |
| `No`                   | no                     |
| `StrongNo`             | strong_no              |
| `NoDecision`           | no_decision            |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
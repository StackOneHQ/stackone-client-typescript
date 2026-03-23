# InterviewPartValue

The type of the interview.

## Example Usage

```typescript
import { InterviewPartValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: InterviewPartValue = InterviewPartValue.OnSite;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Screening`            | screening              |
| `Lunch`                | lunch                  |
| `OnSite`               | on_site                |
| `Presentation`         | presentation           |
| `Sell`                 | sell                   |
| `Culture`              | culture                |
| `Informal`             | informal               |
| `Test`                 | test                   |
| `Phone`                | phone                  |
| `Video`                | video                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
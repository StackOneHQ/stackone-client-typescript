# InterviewPartValue

The type of the interview.

## Example Usage

```typescript
import { InterviewPartValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: InterviewPartValue = InterviewPartValue.OnSite;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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
# Event

The event type

## Example Usage

```typescript
import { Event } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Event = Event.ScreeningResultsCreated;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `ScreeningResultsCreated`   | screening.results.created   |
| `ScreeningResultsUpdated`   | screening.results.updated   |
| `ScreeningResultsCompleted` | screening.results.completed |
| `ScreeningResultsFailed`    | screening.results.failed    |
| `ScreeningResultsCancelled` | screening.results.cancelled |
| -                           | `Unrecognized<string>`      |
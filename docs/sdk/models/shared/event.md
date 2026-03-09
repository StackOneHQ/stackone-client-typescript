# Event

The event type

## Example Usage

```typescript
import { Event } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Event = Event.ScreeningResultsCreated;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `ScreeningResultsCreated`   | screening.results.created   |
| `ScreeningResultsUpdated`   | screening.results.updated   |
| `ScreeningResultsCompleted` | screening.results.completed |
| `ScreeningResultsFailed`    | screening.results.failed    |
| `ScreeningResultsCancelled` | screening.results.cancelled |
| -                           | `Unrecognized<string>`      |
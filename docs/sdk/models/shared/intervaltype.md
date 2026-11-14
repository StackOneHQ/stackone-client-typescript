# IntervalType

The time interval to bucket results by

## Example Usage

```typescript
import { IntervalType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IntervalType = IntervalType.Day;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Minute`               | minute                 |
| `Hour`                 | hour                   |
| `Day`                  | day                    |
| `Week`                 | week                   |
| `Month`                | month                  |
| `None`                 | none                   |
| -                      | `Unrecognized<string>` |
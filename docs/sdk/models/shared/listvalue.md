# ListValue

The type of the list.

## Example Usage

```typescript
import { ListValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ListValue = ListValue.Contacts;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Candidates`           | candidates             |
| `Contacts`             | contacts               |
| `Companies`            | companies              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
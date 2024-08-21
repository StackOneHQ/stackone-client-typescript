# ListValue

The type of the list.

## Example Usage

```typescript
import { ListValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ListValue = ListValue.Contacts;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Candidates`           | candidates             |
| `Contacts`             | contacts               |
| `Companies`            | companies              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
# HrisCreateTimeOffRequestDtoValue

## Example Usage

```typescript
import { HrisCreateTimeOffRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateTimeOffRequestDtoValue =
  HrisCreateTimeOffRequestDtoValue.Cancelled;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Approved`             | approved               |
| `Cancelled`            | cancelled              |
| `Rejected`             | rejected               |
| `Pending`              | pending                |
| `Deleted`              | deleted                |
| `Draft`                | draft                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
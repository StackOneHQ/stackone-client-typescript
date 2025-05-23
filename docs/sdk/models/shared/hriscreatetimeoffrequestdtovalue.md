# HrisCreateTimeOffRequestDtoValue

## Example Usage

```typescript
import { HrisCreateTimeOffRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateTimeOffRequestDtoValue =
  HrisCreateTimeOffRequestDtoValue.Cancelled;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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
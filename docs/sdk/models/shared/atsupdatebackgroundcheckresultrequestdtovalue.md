# AtsUpdateBackgroundCheckResultRequestDtoValue

The result of the test.

## Example Usage

```typescript
import { AtsUpdateBackgroundCheckResultRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateBackgroundCheckResultRequestDtoValue =
  AtsUpdateBackgroundCheckResultRequestDtoValue.Passed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Initiated`            | initiated              |
| `InProgress`           | in_progress            |
| `Cancelled`            | cancelled              |
| `Completed`            | completed              |
| `Expired`              | expired                |
| `Failed`               | failed                 |
| `Passed`               | passed                 |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
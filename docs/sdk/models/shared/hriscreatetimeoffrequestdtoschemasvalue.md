# HrisCreateTimeOffRequestDtoSchemasValue

## Example Usage

```typescript
import { HrisCreateTimeOffRequestDtoSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateTimeOffRequestDtoSchemasValue =
  HrisCreateTimeOffRequestDtoSchemasValue.LongTermDisability;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Sick`                 | sick                   |
| `UnmappedValue`        | unmapped_value         |
| `Vacation`             | vacation               |
| `LongTermDisability`   | long_term_disability   |
| `ShortTermDisability`  | short_term_disability  |
| `Absent`               | absent                 |
| `CompTime`             | comp_time              |
| `Training`             | training               |
| `AnnualLeave`          | annual_leave           |
| `LeaveOfAbsence`       | leave_of_absence       |
| `Break`                | break                  |
| `ChildCareLeave`       | child_care_leave       |
| -                      | `Unrecognized<string>` |
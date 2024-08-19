# JobPostingSchemasStatusValue

The status of the job postings.

## Example Usage

```typescript
import { JobPostingSchemasStatusValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingSchemasStatusValue = JobPostingSchemasStatusValue.Live;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Live`                 | live                   |
| `Draft`                | draft                  |
| `Pending`              | pending                |
| `Internal`             | internal               |
| `Rejected`             | rejected               |
| `Closed`               | closed                 |
| `Archived`             | archived               |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
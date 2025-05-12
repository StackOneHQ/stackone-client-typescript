# JobPostingContentSectionValue

The type of the description.

## Example Usage

```typescript
import { JobPostingContentSectionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingContentSectionValue =
  JobPostingContentSectionValue.Responsibilities;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Responsibilities`     | responsibilities       |
| `Skills`               | skills                 |
| `Benefits`             | benefits               |
| `CompanyOverview`      | company_overview       |
| `Description`          | description            |
| `Other`                | other                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
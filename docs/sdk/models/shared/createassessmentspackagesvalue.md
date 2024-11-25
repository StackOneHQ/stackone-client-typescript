# CreateAssessmentsPackagesValue

The type of the description.

## Example Usage

```typescript
import { CreateAssessmentsPackagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateAssessmentsPackagesValue =
  CreateAssessmentsPackagesValue.Responsibilities;
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
| -                      | `Unrecognized<string>` |
# WorkEligibilitySchemasValue

## Example Usage

```typescript
import { WorkEligibilitySchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: WorkEligibilitySchemasValue =
  WorkEligibilitySchemasValue.BirthCertificate;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Visa`                 | visa                   |
| `Passport`             | passport               |
| `DriverLicense`        | driver_license         |
| `BirthCertificate`     | birth_certificate      |
| `Other`                | other                  |
| -                      | `Unrecognized<string>` |
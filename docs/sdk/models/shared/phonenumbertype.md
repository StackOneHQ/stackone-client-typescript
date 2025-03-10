# PhoneNumberType

Type of phone number

## Example Usage

```typescript
import { PhoneNumberType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PhoneNumberType = PhoneNumberType.Unknown;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Personal`             | personal               |
| `Work`                 | work                   |
| `Mobile`               | mobile                 |
| `Home`                 | home                   |
| `Unknown`              | unknown                |
| `Other`                | other                  |
| -                      | `Unrecognized<string>` |
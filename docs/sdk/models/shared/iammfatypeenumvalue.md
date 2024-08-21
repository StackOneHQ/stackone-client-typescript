# IamMfaTypeEnumValue

The unified value for the type of multi-factor authentication. If the provider does not send back a type but does specify that MFA is set-up for this user, the value will be set to 'unknown'.'

## Example Usage

```typescript
import { IamMfaTypeEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamMfaTypeEnumValue = IamMfaTypeEnumValue.Totp;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Sms`                  | sms                    |
| `Email`                | email                  |
| `Push`                 | push                   |
| `Totp`                 | totp                   |
| `Unknown`              | unknown                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
# IamMfaTypeEnumValue

The unified value for the type of multi-factor authentication. If the provider does not send back a type but does specify that MFA is set-up for this user, the value will be set to 'unknown'.'


## Values

| Name            | Value           |
| --------------- | --------------- |
| `Sms`           | sms             |
| `Email`         | email           |
| `Push`          | push            |
| `Totp`          | totp            |
| `Unknown`       | unknown         |
| `UnmappedValue` | unmapped_value  |
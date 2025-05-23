# IamUpdateUserRequestDtoValue

The status of the user, e.g. whether the user is enabled, has been disabled (eg. by an admin), or is pending (ie: awaiting approval by the user or an admin).

## Example Usage

```typescript
import { IamUpdateUserRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamUpdateUserRequestDtoValue = IamUpdateUserRequestDtoValue.Enabled;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Enabled`              | enabled                |
| `Disabled`             | disabled               |
| `Pending`              | pending                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
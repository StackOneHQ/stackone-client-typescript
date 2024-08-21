# AccountAddressValue

The type of the location.

## Example Usage

```typescript
import { AccountAddressValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountAddressValue = AccountAddressValue.Home;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Home`                 | home                   |
| `Work`                 | work                   |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
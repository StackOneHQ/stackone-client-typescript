# IamCredentialsValue

How the connection authenticates.

## Example Usage

```typescript
import { IamCredentialsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamCredentialsValue = IamCredentialsValue.Oauth;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Oauth`                | oauth                  |
| `ApiKey`               | api_key                |
| `ServiceUser`          | service_user           |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
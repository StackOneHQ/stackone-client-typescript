# AuthType

How the connection authenticates: oauth, api_key, or service_user.

## Example Usage

```typescript
import { AuthType, IamCredentialsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AuthType = {
  value: IamCredentialsValue.Oauth,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `sourceValue`                                                                   | *shared.IamCredentialsSourceValue*                                              | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `value`                                                                         | [shared.IamCredentialsValue](../../../sdk/models/shared/iamcredentialsvalue.md) | :heavy_minus_sign:                                                              | How the connection authenticates.                                               | oauth                                                                           |
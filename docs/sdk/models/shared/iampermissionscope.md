# IamPermissionScope

## Example Usage

```typescript
import { IamPermissionScope } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamPermissionScope = {
  resourceId: "C0123456789",
  resourceType: "channel",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `resourceId`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | The id of the specific resource the permission applies to. Omitted = all of type. | C0123456789                                                                       |
| `resourceType`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | The kind of resource the permission applies to (e.g. file, channel, user).        | channel                                                                           |
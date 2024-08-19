# IamResourceType

## Example Usage

```typescript
import { IamResourceType, IamResourceValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamResourceType = {
    value: IamResourceValue.File,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `sourceValue`                                                             | *shared.IamResourceSourceValue*                                           | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `value`                                                                   | [shared.IamResourceValue](../../../sdk/models/shared/iamresourcevalue.md) | :heavy_minus_sign:                                                        | The type of the resource, e.g. user, group, permission, etc.              | file                                                                      |
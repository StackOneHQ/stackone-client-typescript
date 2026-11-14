# IamResourceTypeEnumSchemas

## Example Usage

```typescript
import { IamResourceTypeEnumSchemas, Value } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamResourceTypeEnumSchemas = {
  value: Value.File,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceValue`                                                | *shared.SourceValue*                                         | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `value`                                                      | [shared.Value](../../../sdk/models/shared/value.md)          | :heavy_minus_sign:                                           | The type of the resource, e.g. user, group, permission, etc. | file                                                         |
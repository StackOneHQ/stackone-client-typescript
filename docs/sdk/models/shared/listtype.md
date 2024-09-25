# ListType

The list type

## Example Usage

```typescript
import { ListType, ListValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ListType = {
  sourceValue: "Contacts",
  value: ListValue.Contacts,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `sourceValue`                                               | *shared.ListSourceValue*                                    | :heavy_minus_sign:                                          | The source value of the list type.                          | Contacts                                                    |
| `value`                                                     | [shared.ListValue](../../../sdk/models/shared/listvalue.md) | :heavy_minus_sign:                                          | The type of the list.                                       | contacts                                                    |
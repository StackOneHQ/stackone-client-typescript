# Visibility

Visibility of the note

## Example Usage

```typescript
import { AtsCreateNotesRequestDtoValue, Visibility } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Visibility = {
  sourceValue: "Public",
  value: AtsCreateNotesRequestDtoValue.Public,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                       | *shared.AtsCreateNotesRequestDtoSourceValue*                                                        | :heavy_minus_sign:                                                                                  | The source value of the notes visibility.                                                           | Public                                                                                              |
| `value`                                                                                             | [shared.AtsCreateNotesRequestDtoValue](../../../sdk/models/shared/atscreatenotesrequestdtovalue.md) | :heavy_minus_sign:                                                                                  | The visibility of the notes.                                                                        | public                                                                                              |
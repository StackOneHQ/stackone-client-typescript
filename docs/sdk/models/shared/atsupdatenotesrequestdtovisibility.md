# AtsUpdateNotesRequestDtoVisibility

Visibility of the note

## Example Usage

```typescript
import { AtsUpdateNotesRequestDtoValue, AtsUpdateNotesRequestDtoVisibility } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateNotesRequestDtoVisibility = {
  sourceValue: "Public",
  value: AtsUpdateNotesRequestDtoValue.Public,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                       | *shared.AtsUpdateNotesRequestDtoSourceValue*                                                        | :heavy_minus_sign:                                                                                  | The source value of the notes visibility.                                                           | Public                                                                                              |
| `value`                                                                                             | [shared.AtsUpdateNotesRequestDtoValue](../../../sdk/models/shared/atsupdatenotesrequestdtovalue.md) | :heavy_minus_sign:                                                                                  | The visibility of the notes.                                                                        | public                                                                                              |
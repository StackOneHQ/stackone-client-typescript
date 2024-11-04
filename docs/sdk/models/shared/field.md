# Field

## Example Usage

```typescript
import { Field, FieldType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Field = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  label: "Problem Solving",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  required: true,
  type: FieldType.LongText,
  values: [
    "Excellent",
    "Good",
    "Average",
    "Poor",
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_minus_sign:                                          | Unique identifier                                           | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                        |
| `label`                                                     | *string*                                                    | :heavy_minus_sign:                                          | The label of the field                                      | Problem Solving                                             |
| `remoteId`                                                  | *string*                                                    | :heavy_minus_sign:                                          | Provider's unique identifier                                | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                        |
| `required`                                                  | *shared.RequiredT*                                          | :heavy_minus_sign:                                          | Indicates if the field is required                          | true                                                        |
| `type`                                                      | [shared.FieldType](../../../sdk/models/shared/fieldtype.md) | :heavy_minus_sign:                                          | The type of the field                                       | text                                                        |
| `values`                                                    | *string*[]                                                  | :heavy_minus_sign:                                          | The possible values for the field                           | [<br/>"Excellent",<br/>"Good",<br/>"Average",<br/>"Poor"<br/>] |
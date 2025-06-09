# ScorecardSection

## Example Usage

```typescript
import { FieldType, ScorecardSection } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScorecardSection = {
  fields: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      label: "Problem Solving",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      required: true,
      type: FieldType.UnmappedValue,
      values: [
        "Excellent",
        "Good",
        "Average",
        "Poor",
      ],
    },
  ],
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  label: "Technical Skills",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `fields`                                              | [shared.Field](../../../sdk/models/shared/field.md)[] | :heavy_minus_sign:                                    | The fields within the section                         |                                                       |
| `id`                                                  | *string*                                              | :heavy_minus_sign:                                    | Unique identifier                                     | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                  |
| `label`                                               | *string*                                              | :heavy_minus_sign:                                    | The label of the section                              | Technical Skills                                      |
| `remoteId`                                            | *string*                                              | :heavy_minus_sign:                                    | Provider's unique identifier                          | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                  |
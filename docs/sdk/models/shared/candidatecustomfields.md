# CandidateCustomFields

## Example Usage

```typescript
import { CandidateCustomFields } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CandidateCustomFields = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Training Completion Status",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  value: "Completed",
  valueId: "value_456",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *string*                                                        | :heavy_minus_sign:                                              | Unique identifier                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                            |
| `name`                                                          | *string*                                                        | :heavy_minus_sign:                                              | The name of the custom field.                                   | Training Completion Status                                      |
| `remoteId`                                                      | *string*                                                        | :heavy_minus_sign:                                              | Provider's unique identifier                                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                            |
| `remoteValueId`                                                 | *string*                                                        | :heavy_minus_sign:                                              | Provider's unique identifier for the value of the custom field. | e3cb75bf-aa84-466e-a6c1-b8322b257a48                            |
| `value`                                                         | *shared.CandidateCustomFieldsValue*                             | :heavy_minus_sign:                                              | The value associated with the custom field.                     | Completed                                                       |
| `valueId`                                                       | *string*                                                        | :heavy_minus_sign:                                              | The unique identifier for the value of the custom field.        | value_456                                                       |
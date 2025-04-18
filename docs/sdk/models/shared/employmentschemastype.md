# EmploymentSchemasType

The type of employment

## Example Usage

```typescript
import { EmploymentSchemasType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentSchemasType = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  label: "Permanent",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {},
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | Unique identifier                                                                           | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                        |
| `label`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | The label of the employment type                                                            | Permanent                                                                                   |
| `remoteId`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | Provider's unique identifier                                                                | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                        |
| `type`                                                                                      | [shared.EmploymentSchemasTypeType](../../../sdk/models/shared/employmentschemastypetype.md) | :heavy_minus_sign:                                                                          | The type of employment (e.g., contractor, permanent)                                        | permanent                                                                                   |
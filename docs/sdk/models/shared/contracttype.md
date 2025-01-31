# ContractType

The employment work schedule type

## Example Usage

```typescript
import { ContractType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContractType = {
  contractType: {},
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  label: "Full-Time",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contractType`                                                                                      | [shared.EmploymentSchemasContractType](../../../sdk/models/shared/employmentschemascontracttype.md) | :heavy_minus_sign:                                                                                  | The employment work schedule type (e.g., full-time, part-time)                                      | full_time                                                                                           |
| `id`                                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Unique identifier                                                                                   | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                |
| `label`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The label of the employment type                                                                    | Full-Time                                                                                           |
| `remoteId`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Provider's unique identifier                                                                        | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                |
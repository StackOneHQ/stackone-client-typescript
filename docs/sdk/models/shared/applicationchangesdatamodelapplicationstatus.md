# ApplicationChangesDataModelApplicationStatus

## Example Usage

```typescript
import { ApplicationChangesDataModelApplicationStatus, ApplicationChangesDataModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationChangesDataModelApplicationStatus = {
  sourceValue: "Hired",
  value: ApplicationChangesDataModelValue.Hired,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                             | *shared.ApplicationChangesDataModelSourceValue*                                                           | :heavy_minus_sign:                                                                                        | The source value of the application status.                                                               | Hired                                                                                                     |
| `value`                                                                                                   | [shared.ApplicationChangesDataModelValue](../../../sdk/models/shared/applicationchangesdatamodelvalue.md) | :heavy_minus_sign:                                                                                        | The status of the application.                                                                            | hired                                                                                                     |
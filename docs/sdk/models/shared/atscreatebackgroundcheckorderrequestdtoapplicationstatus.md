# AtsCreateBackgroundCheckOrderRequestDtoApplicationStatus

## Example Usage

```typescript
import {
  AtsCreateBackgroundCheckOrderRequestDtoApplicationStatus,
  AtsCreateBackgroundCheckOrderRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateBackgroundCheckOrderRequestDtoApplicationStatus = {
  sourceValue: "Hired",
  value: AtsCreateBackgroundCheckOrderRequestDtoValue.Hired,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                     | *shared.AtsCreateBackgroundCheckOrderRequestDtoSourceValue*                                                                       | :heavy_minus_sign:                                                                                                                | The source value of the application status.                                                                                       | Hired                                                                                                                             |
| `value`                                                                                                                           | [shared.AtsCreateBackgroundCheckOrderRequestDtoValue](../../../sdk/models/shared/atscreatebackgroundcheckorderrequestdtovalue.md) | :heavy_minus_sign:                                                                                                                | The status of the application.                                                                                                    | hired                                                                                                                             |
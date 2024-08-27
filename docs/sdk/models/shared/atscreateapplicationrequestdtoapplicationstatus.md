# AtsCreateApplicationRequestDtoApplicationStatus

## Example Usage

```typescript
import {
  AtsCreateApplicationRequestDtoApplicationStatus,
  AtsCreateApplicationRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateApplicationRequestDtoApplicationStatus = {
    sourceValue: {},
    value: AtsCreateApplicationRequestDtoValue.Hired,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                   | *shared.AtsCreateApplicationRequestDtoSourceValue*                                                              | :heavy_minus_sign:                                                                                              | The source value of the application status.                                                                     | Hired                                                                                                           |
| `value`                                                                                                         | [shared.AtsCreateApplicationRequestDtoValue](../../../sdk/models/shared/atscreateapplicationrequestdtovalue.md) | :heavy_minus_sign:                                                                                              | The status of the application.                                                                                  | hired                                                                                                           |
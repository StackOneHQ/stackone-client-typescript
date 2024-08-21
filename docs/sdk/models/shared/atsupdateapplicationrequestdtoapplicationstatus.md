# AtsUpdateApplicationRequestDtoApplicationStatus

## Example Usage

```typescript
import {
  AtsUpdateApplicationRequestDtoApplicationStatus,
  AtsUpdateApplicationRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateApplicationRequestDtoApplicationStatus = {
    sourceValue: {},
    value: AtsUpdateApplicationRequestDtoValue.Hired,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                   | *shared.AtsUpdateApplicationRequestDtoSourceValue*                                                              | :heavy_minus_sign:                                                                                              | The source value of the application status.                                                                     | Hired                                                                                                           |
| `value`                                                                                                         | [shared.AtsUpdateApplicationRequestDtoValue](../../../sdk/models/shared/atsupdateapplicationrequestdtovalue.md) | :heavy_minus_sign:                                                                                              | The status of the application.                                                                                  | hired                                                                                                           |
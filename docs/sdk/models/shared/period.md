# Period

The period of the work time

## Example Usage

```typescript
import { CreateEmploymentApiModelSchemasWorkTimeValue, Period } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Period = {
  value: CreateEmploymentApiModelSchemasWorkTimeValue.Month,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                     | *shared.CreateEmploymentApiModelSchemasWorkTimeSourceValue*                                                                       | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |                                                                                                                                   |
| `value`                                                                                                                           | [shared.CreateEmploymentApiModelSchemasWorkTimeValue](../../../sdk/models/shared/createemploymentapimodelschemasworktimevalue.md) | :heavy_minus_sign:                                                                                                                | The unified value for the period.                                                                                                 | month                                                                                                                             |
# EmploymentDurationUnit

The duration unit of the work time

## Example Usage

```typescript
import { EmploymentDurationUnit, EmploymentSchemasWorkTimeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentDurationUnit = {
  value: EmploymentSchemasWorkTimeValue.Month,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                         | *shared.EmploymentSchemasWorkTimeSourceValue*                                                         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `value`                                                                                               | [shared.EmploymentSchemasWorkTimeValue](../../../sdk/models/shared/employmentschemasworktimevalue.md) | :heavy_minus_sign:                                                                                    | The unified value for the period.                                                                     | month                                                                                                 |
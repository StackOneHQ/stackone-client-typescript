# AssessmentsPackagesType

## Example Usage

```typescript
import { AssessmentsPackagesType, AssessmentsPackagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsPackagesType = {
  sourceValue: "key_responsibilities",
  value: AssessmentsPackagesValue.Responsibilities,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceValue`                                                                             | *shared.AssessmentsPackagesSourceValue*                                                   | :heavy_minus_sign:                                                                        | The source value of the description type.                                                 | key_responsibilities                                                                      |
| `value`                                                                                   | [shared.AssessmentsPackagesValue](../../../sdk/models/shared/assessmentspackagesvalue.md) | :heavy_minus_sign:                                                                        | The type of the description.                                                              | responsibilities                                                                          |
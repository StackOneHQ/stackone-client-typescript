# AssessmentsPackagesTestApiModelType

Package type

## Example Usage

```typescript
import { AssessmentsPackagesTestApiModelType, AssessmentsPackagesTestApiModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsPackagesTestApiModelType = {
  sourceValue: "key_responsibilities",
  value: AssessmentsPackagesTestApiModelValue.Responsibilities,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                     | *shared.AssessmentsPackagesTestApiModelSourceValue*                                                               | :heavy_minus_sign:                                                                                                | The source value of the description type.                                                                         | key_responsibilities                                                                                              |
| `value`                                                                                                           | [shared.AssessmentsPackagesTestApiModelValue](../../../sdk/models/shared/assessmentspackagestestapimodelvalue.md) | :heavy_minus_sign:                                                                                                | The type of the description.                                                                                      | responsibilities                                                                                                  |
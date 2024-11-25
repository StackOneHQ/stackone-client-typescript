# CreateAssessmentsPackagesType

Package type

## Example Usage

```typescript
import { CreateAssessmentsPackagesType, CreateAssessmentsPackagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateAssessmentsPackagesType = {
  sourceValue: "key_responsibilities",
  value: CreateAssessmentsPackagesValue.Responsibilities,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                         | *shared.CreateAssessmentsPackagesSourceValue*                                                         | :heavy_minus_sign:                                                                                    | The source value of the description type.                                                             | key_responsibilities                                                                                  |
| `value`                                                                                               | [shared.CreateAssessmentsPackagesValue](../../../sdk/models/shared/createassessmentspackagesvalue.md) | :heavy_minus_sign:                                                                                    | The type of the description.                                                                          | responsibilities                                                                                      |
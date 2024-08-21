# AssessmentsPackagesType

## Example Usage

```typescript
import { AssessmentsPackagesType, AssessmentsPackagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsPackagesType = {
  sourceValue: Skill Test,
  value: AssessmentsPackagesValue.SkillTest,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceValue`                                                                             | *shared.AssessmentsPackagesSourceValue*                                                   | :heavy_minus_sign:                                                                        | The source value of the assessment type.                                                  | Skill Test                                                                                |
| `value`                                                                                   | [shared.AssessmentsPackagesValue](../../../sdk/models/shared/assessmentspackagesvalue.md) | :heavy_minus_sign:                                                                        | The type of the assessment.                                                               | skill_test                                                                                |
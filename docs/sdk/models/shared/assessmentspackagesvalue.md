# AssessmentsPackagesValue

The type of the assessment.

## Example Usage

```typescript
import { AssessmentsPackagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsPackagesValue = AssessmentsPackagesValue.SkillTest;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `VideoInterview`       | video_interview        |
| `BehavioralAssessment` | behavioral_assessment  |
| `BackgroundCheck`      | background_check       |
| `ReferenceCheck`       | reference_check        |
| `SkillTest`            | skill_test             |
| -                      | `Unrecognized<string>` |
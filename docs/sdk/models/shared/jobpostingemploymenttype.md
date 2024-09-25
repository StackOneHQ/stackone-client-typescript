# JobPostingEmploymentType

## Example Usage

```typescript
import { JobPostingEmploymentType, JobPostingSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingEmploymentType = {
  sourceValue: "Permanent",
  value: JobPostingSchemasValue.Permanent,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `sourceValue`                                                                         | *shared.JobPostingSchemasSourceValue*                                                 | :heavy_minus_sign:                                                                    | The source value of the employment type.                                              | Permanent                                                                             |
| `value`                                                                               | [shared.JobPostingSchemasValue](../../../sdk/models/shared/jobpostingschemasvalue.md) | :heavy_minus_sign:                                                                    | The type of the employment.                                                           | permanent                                                                             |
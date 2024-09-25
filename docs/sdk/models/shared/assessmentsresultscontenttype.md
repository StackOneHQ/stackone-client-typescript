# AssessmentsResultsContentType

## Example Usage

```typescript
import { AssessmentsResultsContentType, AssessmentsResultsSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsResultsContentType = {
  sourceValue: "Text",
  value: AssessmentsResultsSchemasValue.Text,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                         | *shared.AssessmentsResultsSchemasSourceValue*                                                         | :heavy_minus_sign:                                                                                    | The source value of the content type.                                                                 | Text                                                                                                  |
| `value`                                                                                               | [shared.AssessmentsResultsSchemasValue](../../../sdk/models/shared/assessmentsresultsschemasvalue.md) | :heavy_minus_sign:                                                                                    | The content type of the attachment.                                                                   | text                                                                                                  |
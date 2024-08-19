# AssessmentsResultsContentType

## Example Usage

```typescript
import { AssessmentsResultsContentType, AssessmentsResultsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsResultsContentType = {
    sourceValue: "Text",
    value: AssessmentsResultsValue.Text,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `sourceValue`                                                                           | *shared.AssessmentsResultsSourceValue*                                                  | :heavy_minus_sign:                                                                      | The source value of the content type.                                                   | Text                                                                                    |
| `value`                                                                                 | [shared.AssessmentsResultsValue](../../../sdk/models/shared/assessmentsresultsvalue.md) | :heavy_minus_sign:                                                                      | The content type of the attachment.                                                     | text                                                                                    |
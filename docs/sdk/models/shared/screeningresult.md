# ScreeningResult

## Example Usage

```typescript
import { ScreeningResult, ScreeningResultStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScreeningResult = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  orderId: "12345",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  resultUrl: "https://example.com/results/12345",
  score: {
    label: "Overall Risk",
    max: "100",
    min: "0",
    value: "75",
  },
  startDate: new Date("2023-01-01T00:00:00Z"),
  status: ScreeningResultStatus.Completed,
  submissionDate: new Date("2023-01-02T00:00:00Z"),
  summary: "Background check completed successfully",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `orderId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Order ID associated with this result                                                          | 12345                                                                                         |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `resultUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | URL to view the detailed result                                                               | https://example.com/results/12345                                                             |
| `score`                                                                                       | [shared.ScreeningResultScore](../../../sdk/models/shared/screeningresultscore.md)             | :heavy_minus_sign:                                                                            | Score information                                                                             |                                                                                               |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start date of the screening                                                                   | 2023-01-01T00:00:00Z                                                                          |
| `status`                                                                                      | [shared.ScreeningResultStatus](../../../sdk/models/shared/screeningresultstatus.md)           | :heavy_minus_sign:                                                                            | Result status                                                                                 | completed                                                                                     |
| `submissionDate`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Submission date of the screening                                                              | 2023-01-02T00:00:00Z                                                                          |
| `summary`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Summary of the screening result                                                               | Background check completed successfully                                                       |
| `unifiedCustomFields`                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom Unified Fields configured in your StackOne project                                     | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
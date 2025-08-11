# ScreeningResultWebhook

## Example Usage

```typescript
import { Event, ScreeningResultStatus, ScreeningResultWebhook } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScreeningResultWebhook = {
  data: {
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
  },
  event: Event.ScreeningResultsCreated,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [shared.ScreeningResult](../../../sdk/models/shared/screeningresult.md) | :heavy_check_mark:                                                      | The result data                                                         |                                                                         |
| `event`                                                                 | [shared.Event](../../../sdk/models/shared/event.md)                     | :heavy_check_mark:                                                      | The event type                                                          | screening.result.completed                                              |
| `raw`                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]       | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
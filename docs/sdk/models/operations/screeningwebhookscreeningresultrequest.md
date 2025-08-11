# ScreeningWebhookScreeningResultRequest

## Example Usage

```typescript
import { ScreeningWebhookScreeningResultRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { Event, ScreeningResultStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScreeningWebhookScreeningResultRequest = {
  screeningResultWebhook: {
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
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `screeningResultWebhook`                                                              | [shared.ScreeningResultWebhook](../../../sdk/models/shared/screeningresultwebhook.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `xAccountId`                                                                          | *string*                                                                              | :heavy_check_mark:                                                                    | The account identifier                                                                |
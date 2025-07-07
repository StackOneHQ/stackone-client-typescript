# ApplicationChangesPaginated

## Example Usage

```typescript
import {
  ApplicationChangesDataModelValue,
  ApplicationChangesPaginated,
  ApplicationChangesValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationChangesPaginated = {
  data: [
    {
      actor: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      changeType: {
        sourceValue: "StatusChange",
        value: ApplicationChangesValue.ApplicationStatus,
      },
      createdAt: new Date("2024-01-15T10:30:00Z"),
      effectiveAt: new Date("2024-01-15T10:30:00Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      newValues: {
        applicationStatus: {
          sourceValue: "Hired",
          value: ApplicationChangesDataModelValue.Hired,
        },
        interviewStageId: "18bcbb1b-3cbc-4198-a999-460861d19480",
        rejectedReasonIds: [
          "f223d7f6-908b-48f0-9237-b201c307f609",
        ],
      },
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [shared.ApplicationChanges](../../../sdk/models/shared/applicationchanges.md)[] | :heavy_minus_sign:                                                              | N/A                                                                             |
| `next`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `raw`                                                                           | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]               | :heavy_minus_sign:                                                              | N/A                                                                             |
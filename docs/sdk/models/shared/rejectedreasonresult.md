# RejectedReasonResult

## Example Usage

```typescript
import { RejectedReasonResult, RejectedReasonValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: RejectedReasonResult = {
  data: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    label: "Failed Phone Screen",
    rejectedReasonType: {
      sourceValue: "RejectedByOrg",
      value: RejectedReasonValue.RejectedByOrganization,
    },
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.RejectedReason](../../../sdk/models/shared/rejectedreason.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `raw`                                                                 | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]     | :heavy_minus_sign:                                                    | N/A                                                                   |
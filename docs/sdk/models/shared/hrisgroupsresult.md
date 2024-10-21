# HRISGroupsResult

## Example Usage

```typescript
import { HRISGroupsResult, HRISGroupValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISGroupsResult = {
  data: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Engineering",
    ownerIds: [
      "cxIQNjUyEDM0",
      "cxIQNjQzNzA0MQ",
    ],
    parentIds: [
      "cxIQNjUyNDM0",
      "cxIQNjQzNzI0MQ",
    ],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteOwnerIds: [
      "475364",
      "4327652",
    ],
    remoteParentIds: [
      "652434",
      "6437241",
    ],
    type: {
      value: HRISGroupValue.Team,
    },
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.HRISGroup](../../../sdk/models/shared/hrisgroup.md)       | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
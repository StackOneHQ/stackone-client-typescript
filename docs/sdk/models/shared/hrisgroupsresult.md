# HRISGroupsResult

## Example Usage

```typescript
import { HRISGroupsResult, HRISGroupValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISGroupsResult = {
    data: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        type: {
            value: HRISGroupValue.Team,
        },
    },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.HRISGroup](../../../sdk/models/shared/hrisgroup.md)       | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
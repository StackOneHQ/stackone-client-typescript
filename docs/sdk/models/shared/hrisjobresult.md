# HrisJobResult

## Example Usage

```typescript
import { HrisJobResult, HrisJobValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisJobResult = {
  data: {
    code: "184919",
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    description: "Responsible for identifying business requirements",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    status: {
      value: HrisJobValue.Open,
    },
    title: "Software Engineer",
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.HrisJob](../../../sdk/models/shared/hrisjob.md)           | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
# PushTemplateResult

## Example Usage

```typescript
import { PushTemplateResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PushTemplateResult = {
  data: {
    createdAt: new Date("2021-01-01T00:00:00.000Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    messages: null,
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    updatedAt: new Date("2021-01-01T00:00:00.000Z"),
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.PushTemplate](../../../sdk/models/shared/pushtemplate.md) | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
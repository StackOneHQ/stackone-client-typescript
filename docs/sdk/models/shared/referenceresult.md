# ReferenceResult

## Example Usage

```typescript
import { Reference2, ReferenceResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ReferenceResult = {
    data: {
        active: Reference2.True,
        id: "1687-3",
        name: "1687-4",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Reference](../../../sdk/models/shared/reference.md)       | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
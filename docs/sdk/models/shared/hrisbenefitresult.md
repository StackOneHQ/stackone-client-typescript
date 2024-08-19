# HRISBenefitResult

## Example Usage

```typescript
import { HRISBenefitResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISBenefitResult = {
    data: {
        createdAt: new Date("2021-01-01T00:00:00Z"),
        description: "Health insurance for employees",
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Health Insurance",
        provider: "Aetna",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        updatedAt: new Date("2021-01-01T00:00:00Z"),
    },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.HRISBenefit](../../../sdk/models/shared/hrisbenefit.md)   | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
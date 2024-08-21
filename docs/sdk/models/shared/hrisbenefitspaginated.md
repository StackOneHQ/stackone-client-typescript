# HRISBenefitsPaginated

## Example Usage

```typescript
import { HRISBenefitsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISBenefitsPaginated = {
    data: [
        {
            createdAt: new Date("2021-01-01T00:00:00Z"),
            description: "Health insurance for employees",
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            name: "Health Insurance",
            provider: "Aetna",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            updatedAt: new Date("2021-01-01T00:00:00Z"),
        },
    ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.HRISBenefit](../../../sdk/models/shared/hrisbenefit.md)[]                                                       | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
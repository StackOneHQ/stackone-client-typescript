# TimeOffBalancesPaginated

## Example Usage

```typescript
import { TimeOffBalancesPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffBalancesPaginated = {
  data: [
    {
      balanceExpiryDate: new Date("2021-01-01T01:01:01.000Z"),
      balanceStartDate: new Date("2021-01-01T01:01:01.000Z"),
      balanceUnit: {},
      currentBalance: 8,
      employeeId: "cx280928937",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      initialBalance: 8,
      policy: {
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        description: "Usable for regional and national holidays of employees.",
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Holidays",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        type: {},
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
      },
      policyId: "cx280928937",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.TimeOffBalances](../../../sdk/models/shared/timeoffbalances.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |
| `next`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `raw`                                                                     | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]         | :heavy_minus_sign:                                                        | N/A                                                                       |
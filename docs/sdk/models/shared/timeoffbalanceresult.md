# TimeOffBalanceResult

## Example Usage

```typescript
import {
  TimeOffBalanceResult,
  TimeOffBalancesSchemasPolicyValue,
  TimeOffBalancesSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffBalanceResult = {
  data: {
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
      durationUnit: {
        value: TimeOffBalancesSchemasValue.Hours,
      },
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Holidays",
      reasons: [
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
      ],
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      type: {
        value: TimeOffBalancesSchemasPolicyValue.Holiday,
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
    policyId: "cx280928937",
    remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remotePolicyId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [shared.TimeOffBalances](../../../sdk/models/shared/timeoffbalances.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `raw`                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]       | :heavy_minus_sign:                                                      | N/A                                                                     |
# TimeOffBalances

## Example Usage

```typescript
import { TimeOffBalances } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffBalances = {
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
    durationUnit: {},
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Holidays",
    reasons: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
    ],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    type: {},
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
  policyId: "cx280928937",
  remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remotePolicyId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `balanceExpiryDate`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date of when the current balance expires                                                             | 2021-01-01T01:01:01.000Z                                                                                 |
| `balanceStartDate`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date of when the initial balance quantity was set                                                    | 2021-01-01T01:01:01.000Z                                                                                 |
| `balanceUnit`                                                                                            | [shared.BalanceUnit](../../../sdk/models/shared/balanceunit.md)                                          | :heavy_minus_sign:                                                                                       | The duration unit of the current balance                                                                 | hours                                                                                                    |
| `currentBalance`                                                                                         | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The current numeric balance for the associated employee and time off policy                              | 8                                                                                                        |
| `employeeId`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The employee id associated with this balance                                                             | cx280928937                                                                                              |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Unique identifier                                                                                        | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                     |
| `initialBalance`                                                                                         | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The initial numeric balance for the associated employee and time off policy as of the balance start date | 8                                                                                                        |
| `policy`                                                                                                 | [shared.Policy](../../../sdk/models/shared/policy.md)                                                    | :heavy_minus_sign:                                                                                       | The time off policy associated with this balance                                                         |                                                                                                          |
| `policyId`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The time off policy id associated with this balance                                                      | cx280928937                                                                                              |
| `remoteEmployeeId`                                                                                       | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Provider's unique identifier of the employee associated with this balance                                | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                     |
| `remoteId`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Provider's unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                     |
| `remotePolicyId`                                                                                         | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Provider's unique identifier of the time off policy id associated with this balance                      | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                                     |
| `updatedAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The updated_at date of this time off balance                                                             | 2021-01-01T01:01:01.000Z                                                                                 |
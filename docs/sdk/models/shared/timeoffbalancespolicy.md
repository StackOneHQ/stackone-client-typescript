# TimeOffBalancesPolicy

The time off policy associated with this balance

## Example Usage

```typescript
import {
  TimeOffBalancesPolicy,
  TimeOffBalancesSchemasPolicyValue,
  TimeOffBalancesSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffBalancesPolicy = {
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
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | The created_at date of this policy                                                              | 2021-01-01T01:01:01.000Z                                                                        |
| `description`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | The description of this policy                                                                  | Usable for regional and national holidays of employees.                                         |
| `durationUnit`                                                                                  | [shared.TimeOffBalancesDurationUnit](../../../sdk/models/shared/timeoffbalancesdurationunit.md) | :heavy_minus_sign:                                                                              | The duration unit of the current policy                                                         |                                                                                                 |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unique identifier                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The name of this policy                                                                         | Holidays                                                                                        |
| `reasons`                                                                                       | [shared.Reason](../../../sdk/models/shared/reason.md)[]                                         | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `remoteId`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Provider's unique identifier                                                                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `type`                                                                                          | [shared.TimeOffBalancesType](../../../sdk/models/shared/timeoffbalancestype.md)                 | :heavy_minus_sign:                                                                              | The type of this policy                                                                         |                                                                                                 |
| `updatedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | The updated_at date of this policy                                                              | 2021-01-01T01:01:01.000Z                                                                        |
# TimeOffPoliciesPaginated

## Example Usage

```typescript
import { TimeOffPoliciesPaginated, TimeOffPoliciesSchemasValue, TimeOffPoliciesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffPoliciesPaginated = {
  data: [
    {
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      description: "Usable for regional and national holidays of employees.",
      durationUnit: {
        value: TimeOffPoliciesValue.Hours,
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
        value: TimeOffPoliciesSchemasValue.Holiday,
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.TimeOffPolicies](../../../sdk/models/shared/timeoffpolicies.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |
| `next`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `raw`                                                                     | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]         | :heavy_minus_sign:                                                        | N/A                                                                       |
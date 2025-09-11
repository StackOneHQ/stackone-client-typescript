# TimeOffResult

## Example Usage

```typescript
import { TimeOffResult, TimeOffSchemasPolicyTypeValue, TimeOffSchemasPolicyValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffResult = {
  data: {
    approverId: "1687-4",
    comment: "Taking a day off for personal reasons",
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    duration: "P3Y6M4DT12H30M5S",
    employeeId: "1687-3",
    endDate: "2021-01-01T01:01:01.000",
    endHalfDay: true,
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    policy: {
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      description: "Usable for regional and national holidays of employees.",
      durationUnit: {
        value: TimeOffSchemasPolicyValue.Hours,
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
        value: TimeOffSchemasPolicyTypeValue.Holiday,
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
    reason: {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    remoteApproverId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteEmployeeId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteTimeOffPolicyId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    startDate: "2021-01-01T01:01:01.000",
    startHalfDay: true,
    timeOffPolicyId: "cx280928933",
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.TimeOff](../../../sdk/models/shared/timeoff.md)           | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
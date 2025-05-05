# TicketingUserResult

## Example Usage

```typescript
import { TicketingUserResult, TicketingUserResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingUserResult = {
  data: {
    additionalProperties: {
      accountId: "123",
      firstName: "John",
      lastName: "Doe",
    },
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "John Doe",
    primaryEmail: "john.doe@example.com",
    primaryPhone: "555-5555-5555",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    type: {
      sourceValue: "Live",
      value: TicketingUserResultValue.Agent,
    },
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [shared.TicketingUserResultData](../../../sdk/models/shared/ticketinguserresultdata.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `raw`                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                       | :heavy_minus_sign:                                                                      | N/A                                                                                     |
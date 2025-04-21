# TicketingUser

## Example Usage

```typescript
import { TicketingUser, TicketingUserValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingUser = {
  additionalProperties: {
    disabled: false,
    username: "johndoe",
  },
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "John Doe",
  primaryEmail: "john.doe@example.com",
  primaryPhone: "555-5555-5555",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {
    sourceValue: "Live",
    value: TicketingUserValue.Agent,
  },
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `additionalProperties`                                                                        | *shared.AdditionalProperties*                                                                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the record was created                                                     | 2021-01-01T01:01:01.000Z                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | John Doe                                                                                      | John Doe                                                                                      |
| `primaryEmail`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user's primary email address                                                              | john.doe@example.com                                                                          |
| `primaryPhone`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user's primary phone number                                                               | 555-5555-5555                                                                                 |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `type`                                                                                        | [shared.TicketingUserType](../../../sdk/models/shared/ticketingusertype.md)                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the record was last updated                                                | 2021-01-01T01:01:01.000Z                                                                      |
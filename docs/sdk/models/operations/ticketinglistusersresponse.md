# TicketingListUsersResponse

## Example Usage

```typescript
import { TicketingListUsersResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { TicketingUserValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingListUsersResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 508,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  ticketingUsersPaginated: {
    data: [
      {
        active: true,
        createdAt: new Date("2021-01-01T01:01:01.000Z"),
        customerAccountReference: "JohnDoe123",
        firstName: "John",
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        lastName: "Doe",
        name: "John Doe",
        primaryEmail: "john.doe@example.com",
        primaryPhone: "555-5555-5555",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        type: {
          sourceValue: "Live",
          value: TicketingUserValue.Agent,
        },
        updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        username: "johndoe",
      },
    ],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `ticketingUsersPaginated`                                                               | [shared.TicketingUsersPaginated](../../../sdk/models/shared/ticketinguserspaginated.md) | :heavy_minus_sign:                                                                      | The list of users was retrieved.                                                        |
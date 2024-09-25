# CrmGetContactResponse

## Example Usage

```typescript
import { CrmGetContactResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: CrmGetContactResponse = {
  contactResult: {
    data: {
      accountIds: [
        "account-123",
        "account-456",
      ],
      companyName: "Apple Inc.",
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      customFields: [
        {
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Training Completion Status",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          value: "Completed",
          valueId: "value_456",
        },
      ],
      dealIds: [
        "deal-001",
        "deal-002",
      ],
      emails: [
        "steve@apple.com",
      ],
      firstName: "Steve",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      lastName: "Wozniak",
      phoneNumbers: [
        "123-456-7890",
      ],
      remoteAccountIds: [
        "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
      ],
      remoteDealIds: [
        "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
      ],
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  },
  contentType: "<value>",
  statusCode: 103,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contactResult`                                                       | [shared.ContactResult](../../../sdk/models/shared/contactresult.md)   | :heavy_minus_sign:                                                    | The contact with the given identifier was retrieved.                  |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
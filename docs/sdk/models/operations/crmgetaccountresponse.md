# CrmGetAccountResponse

## Example Usage

```typescript
import { CrmGetAccountResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AccountAddressSchemasValue, AccountAddressValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CrmGetAccountResponse = {
  accountResult: {
    data: {
      addresses: [
        {
          country: {
            sourceValue: true,
            value: AccountAddressSchemasValue.Gb,
          },
          locationType: {
            sourceValue: true,
            value: AccountAddressValue.Home,
          },
        },
      ],
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      industries: [
        "Information Technology",
        "Airlines & Airports",
        "Personal Care & Household Products",
      ],
      phoneNumbers: [
        "+1123425334",
      ],
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteOwnerId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  },
  contentType: "<value>",
  statusCode: 916723,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `accountResult`                                                       | [shared.AccountResult](../../../sdk/models/shared/accountresult.md)   | :heavy_minus_sign:                                                    | The account with the given identifier was retrieved.                  |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
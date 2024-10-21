# ConnectSessionToken

## Example Usage

```typescript
import { ConnectSessionToken, ConnectSessionTokenCategories } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConnectSessionToken = {
  categories: [
    ConnectSessionTokenCategories.Ats,
    ConnectSessionTokenCategories.Hris,
    ConnectSessionTokenCategories.Iam,
    ConnectSessionTokenCategories.Crm,
    ConnectSessionTokenCategories.Iam,
    ConnectSessionTokenCategories.Marketing,
    ConnectSessionTokenCategories.Lms,
    ConnectSessionTokenCategories.Lms,
  ],
  createdAt: new Date("2024-09-23T02:13:30.609Z"),
  id: 8155.24,
  organizationId: 1594.14,
  originOwnerId: "<id>",
  originOwnerName: "<value>",
  projectId: "<id>",
  token: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `categories`                                                                                          | [shared.ConnectSessionTokenCategories](../../../sdk/models/shared/connectsessiontokencategories.md)[] | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | [<br/>"ats",<br/>"hris",<br/>"hrisLegacy",<br/>"crm",<br/>"iam",<br/>"marketing",<br/>"lms",<br/>"stackOne"<br/>] |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `id`                                                                                                  | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `label`                                                                                               | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `organizationId`                                                                                      | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `originOwnerId`                                                                                       | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `originOwnerName`                                                                                     | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `originUsername`                                                                                      | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `projectId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `provider`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `token`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
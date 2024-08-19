# ConnectSession

## Example Usage

```typescript
import { Categories, ConnectSession } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConnectSession = {
    categories: [
        Categories.Ats,
        Categories.Hris,
        Categories.Marketing,
        Categories.Crm,
        Categories.Iam,
        Categories.Marketing,
        Categories.Lms,
        Categories.Lms,
    ],
    createdAt: new Date("2022-05-25T10:48:39.464Z"),
    id: 6471.74,
    organizationId: 7163.27,
    originOwnerId: "<value>",
    originOwnerName: "<value>",
    projectId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `categories`                                                                                  | [shared.Categories](../../../sdk/models/shared/categories.md)[]                               | :heavy_minus_sign:                                                                            | N/A                                                                                           | [<br/>"ats",<br/>"hris",<br/>"hrisLegacy",<br/>"crm",<br/>"iam",<br/>"marketing",<br/>"lms",<br/>"stackOne"<br/>] |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `label`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `organizationId`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `originOwnerId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `originOwnerName`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `originUsername`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `provider`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
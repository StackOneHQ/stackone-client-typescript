# IamListUsersQueryParamFilter

Filter parameters that allow greater customisation of the list response. Filter support varies per connector — unsupported keys are ignored.

## Example Usage

```typescript
import { IamListUsersQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: IamListUsersQueryParamFilter = {
  email: "user@example.com",
  groupId: "group_123",
  organizationId: "org_456",
  roleId: "role_admin",
  updatedAfter: new Date("2020-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter users by primary email address.                                                        | user@example.com                                                                              |
| `groupId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter users by group membership.                                                             | group_123                                                                                     |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter users by owning organization / tenant.                                                 | org_456                                                                                       |
| `roleId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter users by role assignment.                                                              | role_admin                                                                                    |
| `updatedAfter`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Use a string with a date to only select results updated after that given date                 | 2020-01-01T00:00:00.000Z                                                                      |
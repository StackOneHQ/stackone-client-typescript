# LmsUser

## Example Usage

```typescript
import { LmsUser } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsUser = {
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    email: "john@dew.com",
    externalReference: "al60043",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "John Dew",
    phoneNumber: "+1234567890",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    unifiedCustomFields: {
        my_project_custom_field_1: "REF-1236",
        my_project_custom_field_2: "some other value",
    },
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created_at date                                                                           | 2021-01-01T01:01:01.000Z                                                                      |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user email                                                                                | john@dew.com                                                                                  |
| `externalReference`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The external ID associated with this user                                                     | al60043                                                                                       |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user name                                                                                 | John Dew                                                                                      |
| `phoneNumber`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user phone number                                                                         | +1234567890                                                                                   |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `unifiedCustomFields`                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom Unified Fields configured in your StackOne project                                     | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The updated_at date                                                                           | 2021-01-01T01:01:01.000Z                                                                      |
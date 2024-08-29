# UserResult

## Example Usage

```typescript
import { UserResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UserResult = {
    data: {
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
    },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.LmsUser](../../../sdk/models/shared/lmsuser.md)           | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
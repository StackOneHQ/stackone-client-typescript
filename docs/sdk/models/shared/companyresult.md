# CompanyResult

## Example Usage

```typescript
import { CompanyResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CompanyResult = {
    data: {
        createdAt: new Date("2023-02-23T00:00:00.000Z"),
        displayName: "StackOne",
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "StackOne Technologies PLC",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        unifiedCustomFields: {
            my_project_custom_field_1: "REF-1236",
            my_project_custom_field_2: "some other value",
        },
        updatedAt: new Date("2024-02-23T00:00:00.000Z"),
    },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Company](../../../sdk/models/shared/company.md)           | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
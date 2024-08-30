# DepartmentResult

## Example Usage

```typescript
import { DepartmentResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DepartmentResult = {
    data: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        unifiedCustomFields: {
            my_project_custom_field_1: "REF-1236",
            my_project_custom_field_2: "some other value",
        },
    },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Department](../../../sdk/models/shared/department.md)     | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
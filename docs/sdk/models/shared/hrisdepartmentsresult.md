# HRISDepartmentsResult

## Example Usage

```typescript
import { HRISDepartmentsResult, HRISDepartmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISDepartmentsResult = {
    data: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        type: {
            value: HRISDepartmentValue.Department,
        },
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.HRISDepartment](../../../sdk/models/shared/hrisdepartment.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `raw`                                                                 | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]     | :heavy_minus_sign:                                                    | N/A                                                                   |
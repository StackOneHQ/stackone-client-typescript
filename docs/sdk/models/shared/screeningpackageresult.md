# ScreeningPackageResult

## Example Usage

```typescript
import { ScreeningPackageResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScreeningPackageResult = {
  data: {
    description:
      "Basic background check including identity verification and criminal records",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Basic Background Check",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [shared.ScreeningPackage](../../../sdk/models/shared/screeningpackage.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `raw`                                                                     | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]         | :heavy_minus_sign:                                                        | N/A                                                                       |
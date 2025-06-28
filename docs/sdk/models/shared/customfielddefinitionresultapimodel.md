# CustomFieldDefinitionResultApiModel

## Example Usage

```typescript
import { CustomFieldDefinitionResultApiModel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CustomFieldDefinitionResultApiModel = {
  data: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    options: [
      [
        {
          "id": "option_1",
          "value": "Not Started",
        },
      ],
      [
        {
          "id": "option_2",
          "value": "In Progress",
        },
      ],
      [
        {
          "id": "option_3",
          "value": "Completed",
        },
      ],
    ],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    type: {},
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [shared.CustomFieldDefinition](../../../sdk/models/shared/customfielddefinition.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `raw`                                                                               | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                   | :heavy_minus_sign:                                                                  | N/A                                                                                 |
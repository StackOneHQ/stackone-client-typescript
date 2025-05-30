# AtsUpdateApplicationRequest

## Example Usage

```typescript
import { AtsUpdateApplicationRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsUpdateApplicationRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateApplicationRequest = {
  atsUpdateApplicationRequestDto: {
    applicationStatus: {
      sourceValue: "Hired",
      value: AtsUpdateApplicationRequestDtoValue.Hired,
    },
    customFields: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Training Completion Status",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        value: "Completed",
        valueId: "value_456",
      },
    ],
    passthrough: {
      "other_known_names": "John Doe",
    },
    source: {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "LinkedIn",
    },
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `atsUpdateApplicationRequestDto`                                                                      | [shared.AtsUpdateApplicationRequestDto](../../../sdk/models/shared/atsupdateapplicationrequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |
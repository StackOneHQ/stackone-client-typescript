# RejectedReasonsPaginated

## Example Usage

```typescript
import { RejectedReasonsPaginated, RejectedReasonValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: RejectedReasonsPaginated = {
  data: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      label: "Failed Phone Screen",
      rejectedReasonType: {
        sourceValue: "RejectedByOrg",
        value: RejectedReasonValue.RejectedByOrganization,
      },
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.RejectedReason](../../../sdk/models/shared/rejectedreason.md)[]                                                 | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
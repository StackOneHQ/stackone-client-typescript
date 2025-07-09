# AtsRejectApplicationRequest

## Example Usage

```typescript
import { AtsRejectApplicationRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsRejectApplicationRequest = {
  atsRejectApplicationRequestDto: {
    passthrough: {
      "other_known_names": "John Doe",
    },
    rejectedReasonId: "f223d7f6-908b-48f0-9237-b201c307f609",
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `atsRejectApplicationRequestDto`                                                                      | [shared.AtsRejectApplicationRequestDto](../../../sdk/models/shared/atsrejectapplicationrequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |
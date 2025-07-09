# AtsMoveApplicationRequest

## Example Usage

```typescript
import { AtsMoveApplicationRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsMoveApplicationRequest = {
  atsMoveApplicationRequestDto: {
    interviewStageId: "f223d7f6-908b-48f0-9237-b201c307f609",
    passthrough: {
      "other_known_names": "John Doe",
    },
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `atsMoveApplicationRequestDto`                                                                    | [shared.AtsMoveApplicationRequestDto](../../../sdk/models/shared/atsmoveapplicationrequestdto.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `xAccountId`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The account identifier                                                                            |
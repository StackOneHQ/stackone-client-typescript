# CreateRequest

## Example Usage

```typescript
import { CreateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: CreateRequest = {
  requestBody: [
    {
      event: "hris_employees.created",
      recordId: "<id>",
    },
  ],
  id: 6996.22,
  xAccountId: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `requestBody`                                                     | [shared.CreateEvent](../../../sdk/models/shared/createevent.md)[] | :heavy_check_mark:                                                | N/A                                                               |
| `id`                                                              | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `xAccountId`                                                      | *string*                                                          | :heavy_check_mark:                                                | The account identifier                                            |
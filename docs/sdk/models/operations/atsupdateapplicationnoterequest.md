# AtsUpdateApplicationNoteRequest

## Example Usage

```typescript
import { AtsUpdateApplicationNoteRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsUpdateApplicationNoteRequest = {
  id: "<id>",
  subResourceId: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `atsUpdateNotesRequestDto`                                                                | [shared.AtsUpdateNotesRequestDto](../../../sdk/models/shared/atsupdatenotesrequestdto.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `subResourceId`                                                                           | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `xAccountId`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | The account identifier                                                                    |
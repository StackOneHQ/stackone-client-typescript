# HrisCreateEmployeeSkillRequest

## Example Usage

```typescript
import { HrisCreateEmployeeSkillRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisCreateEmployeeSkillRequest = {
  hrisSkillsCreateRequestDto: {
    id: "16873-IT345",
    name: "Information-Technology",
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `hrisSkillsCreateRequestDto`                                                                  | [shared.HrisSkillsCreateRequestDto](../../../sdk/models/shared/hrisskillscreaterequestdto.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `xAccountId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The account identifier                                                                        |
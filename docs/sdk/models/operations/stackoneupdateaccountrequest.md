# StackoneUpdateAccountRequest

## Example Usage

```typescript
import { StackoneUpdateAccountRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { PatchAccountExternalDtoType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StackoneUpdateAccountRequest = {
  patchAccountExternalDto: {
    type: PatchAccountExternalDtoType.Production,
  },
  id: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `patchAccountExternalDto`                                                               | [shared.PatchAccountExternalDto](../../../sdk/models/shared/patchaccountexternaldto.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
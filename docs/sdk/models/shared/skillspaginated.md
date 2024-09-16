# SkillsPaginated

## Example Usage

```typescript
import { SkillsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: SkillsPaginated = {
  data: [
    {
      active: true,
      id: "16873-IT345",
      name: "Information-Technology",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Skills](../../../sdk/models/shared/skills.md)[]           | :heavy_check_mark:                                                | N/A                                                               |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
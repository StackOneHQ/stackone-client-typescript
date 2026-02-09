# GuideSectionMeta

## Example Usage

```typescript
import { GuideSectionMeta } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: GuideSectionMeta = {
  content: "<value>",
  title: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `content`                                                             | *string*                                                              | :heavy_check_mark:                                                    | The content of the section, includes markdown formatting              |
| `list`                                                                | *string*[]                                                            | :heavy_minus_sign:                                                    | List items for the section                                            |
| `steps`                                                               | [shared.GuideStepMeta](../../../sdk/models/shared/guidestepmeta.md)[] | :heavy_minus_sign:                                                    | Nested steps within the section                                       |
| `title`                                                               | *string*                                                              | :heavy_check_mark:                                                    | The title of the section                                              |
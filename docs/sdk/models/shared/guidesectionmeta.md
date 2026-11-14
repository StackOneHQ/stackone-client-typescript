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
| `applicableScopes`                                                    | *string*[]                                                            | :heavy_minus_sign:                                                    | The scopes for which this section is applicable                       |
| `content`                                                             | *string*                                                              | :heavy_check_mark:                                                    | The content of the section, includes markdown formatting              |
| `image`                                                               | [shared.Image](../../../sdk/models/shared/image.md)                   | :heavy_minus_sign:                                                    | An image for the section                                              |
| `list`                                                                | *string*[]                                                            | :heavy_minus_sign:                                                    | List items for the section                                            |
| `steps`                                                               | [shared.GuideStepMeta](../../../sdk/models/shared/guidestepmeta.md)[] | :heavy_minus_sign:                                                    | Nested steps within the section                                       |
| `title`                                                               | *string*                                                              | :heavy_check_mark:                                                    | The title of the section                                              |
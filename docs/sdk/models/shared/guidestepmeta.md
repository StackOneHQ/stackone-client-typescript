# GuideStepMeta

## Example Usage

```typescript
import { GuideStepMeta } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: GuideStepMeta = {
  content: "<value>",
  title: "<value>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `applicableScopes`                                                            | *string*[]                                                                    | :heavy_minus_sign:                                                            | The scopes for which this step is applicable                                  |
| `content`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | The content of the step, includes markdown formatting                         |
| `displayScopes`                                                               | *boolean*                                                                     | :heavy_minus_sign:                                                            | When true, the step should display scopes                                     |
| `image`                                                                       | [shared.GuideStepMetaImage](../../../sdk/models/shared/guidestepmetaimage.md) | :heavy_minus_sign:                                                            | An image for the step                                                         |
| `list`                                                                        | *string*[]                                                                    | :heavy_minus_sign:                                                            | List items for the step                                                       |
| `title`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | The title of the step                                                         |
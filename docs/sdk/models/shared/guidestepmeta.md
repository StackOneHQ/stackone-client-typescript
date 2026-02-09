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

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `content`                                             | *string*                                              | :heavy_check_mark:                                    | The content of the step, includes markdown formatting |
| `list`                                                | *string*[]                                            | :heavy_minus_sign:                                    | List items for the step                               |
| `title`                                               | *string*                                              | :heavy_check_mark:                                    | The title of the step                                 |
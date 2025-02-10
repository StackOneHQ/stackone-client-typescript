# CreateContentApiModel

## Example Usage

```typescript
import { CreateContentApiModel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateContentApiModel = {
  contentUrl: "https://www.youtube.com/watch?v=16873",
  description: "This video acts as learning content for software engineers.",
  externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
  order: 1,
  title: "Software Engineer Lv 1",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentUrl`                                                                                                          | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The external URL of the content                                                                                       | https://www.youtube.com/watch?v=16873                                                                                 |
| `description`                                                                                                         | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The description of the content                                                                                        | This video acts as learning content for software engineers.                                                           |
| `externalReference`                                                                                                   | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The external ID associated with this content                                                                          | SOFTWARE-ENG-LV1-TRAINING-VIDEO-1                                                                                     |
| `order`                                                                                                               | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | The order of the individual content within a content grouping. This is not applicable for pushing individual content. | 1                                                                                                                     |
| `title`                                                                                                               | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The title of the content                                                                                              | Software Engineer Lv 1                                                                                                |
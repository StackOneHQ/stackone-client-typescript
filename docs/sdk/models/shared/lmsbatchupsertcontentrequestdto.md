# LmsBatchUpsertContentRequestDto

## Example Usage

```typescript
import { ContentLanguageEnumValue, LmsBatchUpsertContentRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsBatchUpsertContentRequestDto = {
  items: [
    {
      active: true,
      categories: [
        {
          active: true,
          name: "Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      contentLaunchMethod: {},
      contentUrl: "https://www.youtube.com/watch?v=16873",
      courseIds: [
        "16873-SOFTWARE-ENG-COURSE",
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description:
        "This video acts as learning content for software engineers.",
      duration: "P3Y6M4DT12H30M5S",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      languages: [
        {
          value: ContentLanguageEnumValue.EnGB,
        },
      ],
      order: 1,
      title: "Software Engineer Lv 1",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `items`                                                                                         | [shared.LmsUpsertContentRequestDto](../../../sdk/models/shared/lmsupsertcontentrequestdto.md)[] | :heavy_check_mark:                                                                              | The batch of items to upsert                                                                    |
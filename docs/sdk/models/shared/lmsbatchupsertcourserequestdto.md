# LmsBatchUpsertCourseRequestDto

## Example Usage

```typescript
import {
  CreateCategoriesApiModelSchemasValue,
  CreateSkillsApiModelSchemasValue,
  LanguageEnumValue,
  LmsBatchUpsertCourseRequestDto,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsBatchUpsertCourseRequestDto = {
  items: [
    {
      active: true,
      categories: [
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      content: [
        {
          contentUrl: "https://www.youtube.com/watch?v=16873",
          description:
            "This video acts as learning content for software engineers.",
          externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
          mobileLaunchContentUrl:
            "https://www.mobile.youtube.com/watch?v=16873",
          order: 1,
          title: "Software Engineer Lv 1",
        },
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description:
        "This course acts as learning content for software engineers.",
      duration: "P3Y6M4DT12H30M5S",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      languages: [
        {
          value: LanguageEnumValue.EnGB,
        },
      ],
      localizations: [
        {
          description:
            "This course acts as learning resource for software engineers.",
          title: "Software Engineer Lv 1",
        },
        {
          description:
            "This course acts as learning resource for software engineers.",
          title: "Software Engineer: A comprehensive guide",
        },
      ],
      skills: [
        {
          id: "16873-IT345",
          language: {
            value: CreateSkillsApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
        },
      ],
      title: "Software Engineer Lv 1",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      url: "https://www.linkedinlearning.com/?v=16873",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `items`                                                                                       | [shared.LmsUpsertCourseRequestDto](../../../sdk/models/shared/lmsupsertcourserequestdto.md)[] | :heavy_check_mark:                                                                            | The batch of items to upsert                                                                  |
# LmsUpsertCourseRequestDto

## Example Usage

```typescript
import { LanguageEnumValue, LmsUpsertCourseRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsUpsertCourseRequestDto = {
  active: true,
  categories: [
    {
      id: "16873-IT345",
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
      order: 1,
      title: "Software Engineer Lv 1",
    },
  ],
  contentIds: [
    "16873-SOFTWARE-ENG-Content",
  ],
  coverUrl: "https://www.googledrive.com/?v=16873",
  description: "This course acts as learning content for software engineers.",
  duration: "P3Y6M4DT12H30M5S",
  externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
  languages: [
    {
      value: LanguageEnumValue.EnGB,
    },
  ],
  skills: [
    {
      id: "16873-IT345",
      name: "Information-Technology",
    },
  ],
  title: "Software Engineer Lv 1",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
  url: "https://www.linkedinlearning.com/?v=16873",
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                          | *boolean*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                | Whether the course is active and available for users.                                                                                                             | true                                                                                                                                                              |
| `categories`                                                                                                                                                      | [shared.CreateCategoriesApiModel](../../../sdk/models/shared/createcategoriesapimodel.md)[]                                                                       | :heavy_minus_sign:                                                                                                                                                | The categories associated with this content                                                                                                                       |                                                                                                                                                                   |
| `content`                                                                                                                                                         | [shared.CreateContentApiModel](../../../sdk/models/shared/createcontentapimodel.md)[]                                                                             | :heavy_minus_sign:                                                                                                                                                | The content associated with this course                                                                                                                           |                                                                                                                                                                   |
| `contentIds`                                                                                                                                                      | *string*[]                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                | The child IDs associated with this course                                                                                                                         | [<br/>"16873-SOFTWARE-ENG-Content"<br/>]                                                                                                                          |
| `coverUrl`                                                                                                                                                        | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The URL of the thumbnail image associated with the course.                                                                                                        | https://www.googledrive.com/?v=16873                                                                                                                              |
| `description`                                                                                                                                                     | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The description of the course                                                                                                                                     | This course acts as learning content for software engineers.                                                                                                      |
| `duration`                                                                                                                                                        | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The duration of the course following the ISO8601 standard. If duration_unit is applicable we will derive this from the smallest unit given in the duration string | P3Y6M4DT12H30M5S                                                                                                                                                  |
| `externalReference`                                                                                                                                               | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The external ID associated with this course                                                                                                                       | SOFTWARE-ENG-LV1-TRAINING-VIDEO-1                                                                                                                                 |
| `languages`                                                                                                                                                       | [shared.LanguageEnum](../../../sdk/models/shared/languageenum.md)[]                                                                                               | :heavy_minus_sign:                                                                                                                                                | The languages associated with this course                                                                                                                         |                                                                                                                                                                   |
| `skills`                                                                                                                                                          | [shared.CreateSkillsApiModel](../../../sdk/models/shared/createskillsapimodel.md)[]                                                                               | :heavy_minus_sign:                                                                                                                                                | The skills associated with this content                                                                                                                           |                                                                                                                                                                   |
| `title`                                                                                                                                                           | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The title of the course                                                                                                                                           | Software Engineer Lv 1                                                                                                                                            |
| `unifiedCustomFields`                                                                                                                                             | Record<string, *any*>                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                | Custom Unified Fields configured in your StackOne project                                                                                                         | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>}                                                          |
| `url`                                                                                                                                                             | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The redirect URL of the course.                                                                                                                                   | https://www.linkedinlearning.com/?v=16873                                                                                                                         |
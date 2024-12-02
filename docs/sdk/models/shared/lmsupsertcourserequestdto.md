# LmsUpsertCourseRequestDto

## Example Usage

```typescript
import { LanguageEnumValue, LmsUpsertCourseRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsUpsertCourseRequestDto = {
  active: true,
  categories: [
    {
      name: "Technology",
    },
  ],
  content: [
    {
      contentUrl: "https://www.google.com",
      description: "This is a software engineering course",
      title: "Software Engineering",
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
      id: "cx2367ndc8dgsbjhka9ry4",
      name: "Software Engineering",
      remoteId: "SE-001",
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
| `categories`                                                                                                                                                      | [shared.CreateCategoriesApiModel](../../../sdk/models/shared/createcategoriesapimodel.md)[]                                                                       | :heavy_minus_sign:                                                                                                                                                | The categories associated with this course                                                                                                                        | [<br/>{<br/>"name": "Technology"<br/>}<br/>]                                                                                                                      |
| `content`                                                                                                                                                         | [shared.CreateContentApiModel](../../../sdk/models/shared/createcontentapimodel.md)[]                                                                             | :heavy_minus_sign:                                                                                                                                                | The content associated with this course                                                                                                                           | [<br/>{<br/>"title": "Software Engineering",<br/>"description": "This is a software engineering course",<br/>"content_url": "https://www.google.com"<br/>}<br/>]  |
| `contentIds`                                                                                                                                                      | *string*[]                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                | The child IDs associated with this course                                                                                                                         | [<br/>"16873-SOFTWARE-ENG-Content"<br/>]                                                                                                                          |
| `coverUrl`                                                                                                                                                        | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The URL of the thumbnail image associated with the course.                                                                                                        | https://www.googledrive.com/?v=16873                                                                                                                              |
| `description`                                                                                                                                                     | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The description of the course                                                                                                                                     | This course acts as learning content for software engineers.                                                                                                      |
| `duration`                                                                                                                                                        | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The duration of the course following the ISO8601 standard. If duration_unit is applicable we will derive this from the smallest unit given in the duration string | P3Y6M4DT12H30M5S                                                                                                                                                  |
| `externalReference`                                                                                                                                               | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The external ID associated with this course                                                                                                                       | SOFTWARE-ENG-LV1-TRAINING-VIDEO-1                                                                                                                                 |
| `languages`                                                                                                                                                       | [shared.LanguageEnum](../../../sdk/models/shared/languageenum.md)[]                                                                                               | :heavy_minus_sign:                                                                                                                                                | The languages associated with this course                                                                                                                         |                                                                                                                                                                   |
| `skills`                                                                                                                                                          | [shared.CreateSkillsApiModel](../../../sdk/models/shared/createskillsapimodel.md)[]                                                                               | :heavy_minus_sign:                                                                                                                                                | The skills associated with this course                                                                                                                            | [<br/>{<br/>"name": "Software Engineering",<br/>"id": "cx2367ndc8dgsbjhka9ry4",<br/>"remote_id": "SE-001"<br/>}<br/>]                                             |
| `title`                                                                                                                                                           | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The title of the course                                                                                                                                           | Software Engineer Lv 1                                                                                                                                            |
| `unifiedCustomFields`                                                                                                                                             | Record<string, *any*>                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                | Custom Unified Fields configured in your StackOne project                                                                                                         | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>}                                                          |
| `url`                                                                                                                                                             | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The redirect URL of the course.                                                                                                                                   | https://www.linkedinlearning.com/?v=16873                                                                                                                         |
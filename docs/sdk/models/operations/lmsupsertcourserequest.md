# LmsUpsertCourseRequest

## Example Usage

```typescript
import { LmsUpsertCourseRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  CreateCategoriesApiModelSchemasValue,
  CreateSkillsApiModelSchemasValue,
  LanguageEnumValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsUpsertCourseRequest = {
  lmsUpsertCourseRequestDto: {
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
        mobileLaunchContentUrl: "https://www.mobile.youtube.com/watch?v=16873",
        order: 1,
        title: "Software Engineer Lv 1",
      },
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
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `lmsUpsertCourseRequestDto`                                                                 | [shared.LmsUpsertCourseRequestDto](../../../sdk/models/shared/lmsupsertcourserequestdto.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `xAccountId`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | The account identifier                                                                      |
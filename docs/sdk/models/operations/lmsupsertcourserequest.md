# LmsUpsertCourseRequest

## Example Usage

```typescript
import { LmsUpsertCourseRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsUpsertCourseRequest = {
  lmsUpsertCourseRequestDto: {
    active: true,
    categories: [
      {
        name: "Technology",
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
    createdAt: "2021-07-21T14:00:00.000Z",
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
    updatedAt: "2021-07-21T14:00:00.000Z",
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
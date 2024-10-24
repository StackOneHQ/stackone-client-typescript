# CourseResult

## Example Usage

```typescript
import { ContentLanguageEnumValue, CourseResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CourseResult = {
  data: {
    categories: [
      {
        active: true,
        id: "12345",
        name: "Technology",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
      },
    ],
    contentIds: [
      "16873-SOFTWARE-ENG-COURSE",
      "16874-SOFTWARE-ENG-COURSE",
    ],
    coverUrl: "https://www.googledrive.com/?v=16873",
    createdAt: "2021-07-21T14:00:00.000Z",
    description: "This course acts as learning content for software engineers.",
    duration: "P3Y6M4DT12H30M5S",
    externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
    id: "16873-ENG-VIDEO-1",
    languages: [
      {
        value: ContentLanguageEnumValue.EnGB,
      },
    ],
    remoteContentIds: [
      "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
    ],
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    skills: [
      {
        active: true,
        id: "12345",
        name: "Sales Techniques",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
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
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Course](../../../sdk/models/shared/course.md)             | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
# LmsBatchUpsertCourseRequest

## Example Usage

```typescript
import { LmsBatchUpsertCourseRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsBatchUpsertCourseRequest = {
  lmsBatchUpsertCourseRequestDto: {
    items: [
      {
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
        description:
          "This course acts as learning content for software engineers.",
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
      },
    ],
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `lmsBatchUpsertCourseRequestDto`                                                                      | [shared.LmsBatchUpsertCourseRequestDto](../../../sdk/models/shared/lmsbatchupsertcourserequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |
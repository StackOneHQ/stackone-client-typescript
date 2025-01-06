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
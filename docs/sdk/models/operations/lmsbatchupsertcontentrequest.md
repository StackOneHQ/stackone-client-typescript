# LmsBatchUpsertContentRequest

## Example Usage

```typescript
import { LmsBatchUpsertContentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsBatchUpsertContentRequest = {
  lmsBatchUpsertContentRequestDto: {
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
            value: LanguageEnumValue.EnGB,
          },
        ],
        order: 1,
        shortDescription:
          "This course is a valuable resource and acts as learning content for...",
        skills: [
          {
            id: "12345",
            name: "Sales Techniques",
          },
        ],
        title: "Software Engineer Lv 1",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
      },
    ],
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `lmsBatchUpsertContentRequestDto`                                                                       | [shared.LmsBatchUpsertContentRequestDto](../../../sdk/models/shared/lmsbatchupsertcontentrequestdto.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `xAccountId`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | The account identifier                                                                                  |
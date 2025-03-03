# LmsBatchUpsertContentRequest

## Example Usage

```typescript
import { LmsBatchUpsertContentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { CreateCategoriesApiModelSchemasValue, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsBatchUpsertContentRequest = {
  lmsBatchUpsertContentRequestDto: {
    items: [
      {
        active: true,
        additionalData: [
          {
            id: "learning_outcomes",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            value: "This is additional data",
          },
        ],
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
        contentUrl: "https://www.youtube.com/watch?v=16873",
        coverUrl: "https://www.googledrive.com/?v=16873",
        createdAt: new Date("2021-07-21T14:00:00.000Z"),
        description:
          "This video acts as learning content for software engineers.",
        duration: "P3Y6M4DT12H30M5S",
        externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
        languages: [
          {
            value: LanguageEnumValue.EnGB,
          },
        ],
        localisations: [
          {
            description:
              "This video acts as learning content for software engineers.",
            title: "Software Engineer Lv 1",
          },
        ],
        mobileLaunchContentUrl: "https://www.mobile.youtube.com/watch?v=16873",
        order: 1,
        skills: [
          {
            id: "12345",
            name: "Sales Techniques",
          },
        ],
        tags: [
          "Sales Techniques",
          "Customer Service",
        ],
        title: "Software Engineer Lv 1",
        unifiedCustomFields: {
          "my_project_custom_field_1": "REF-1236",
          "my_project_custom_field_2": "some other value",
        },
        updatedAt: new Date("2021-07-21T14:00:00.000Z"),
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
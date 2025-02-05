# LmsUpsertContentRequest

## Example Usage

```typescript
import { LmsUpsertContentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { CreateCategoriesApiModelSchemasValue, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsUpsertContentRequest = {
  lmsUpsertContentRequestDto: {
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
    description: "This video acts as learning content for software engineers.",
    duration: "P3Y6M4DT12H30M5S",
    externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
    languages: [
      {
        value: LanguageEnumValue.EnGB,
      },
    ],
    order: 1,
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
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `lmsUpsertContentRequestDto`                                                                  | [shared.LmsUpsertContentRequestDto](../../../sdk/models/shared/lmsupsertcontentrequestdto.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `xAccountId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The account identifier                                                                        |
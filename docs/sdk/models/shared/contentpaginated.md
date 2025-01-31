# ContentPaginated

## Example Usage

```typescript
import { ContentPaginated, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentPaginated = {
  data: [
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
          id: "12345",
          name: "Technology",
        },
      ],
      contentUrl: "https://www.youtube.com/watch?v=16873",
      courseIds: [
        "16873-SOFTWARE-ENG-COURSE",
        "16874-SOFTWARE-ENG-COURSE",
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description:
        "This video acts as learning content for software engineers.",
      duration: "P3Y6M4DT12H30M5S",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      languages: [
        {
          value: LanguageEnumValue.EnGB,
        },
      ],
      order: 1,
      provider: "Content Provider",
      remoteCourseIds: [
        "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
      ],
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
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
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.Content](../../../sdk/models/shared/content.md)[]                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
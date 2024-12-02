# LmsCreateCollectionRequestDto

## Example Usage

```typescript
import { LmsCreateCollectionRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateCollectionRequestDto = {
  categories: [
    {
      name: "Technology",
    },
  ],
  coverUrl: "https://www.googledrive.com/?v=16873",
  description:
    "This collection acts as learning pathway for software engineers.",
  externalReference: "SOFTWARE-ENG-LV1-TRAINING-collection-1",
  learningObjectIds: [
    "16873-SOFTWARE-ENG-COURSE",
    "16874-SOFTWARE-ENG-COURSE",
  ],
  remoteLearningObjectIds: [
    "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
  ],
  skills: [
    {
      name: "Technology",
    },
  ],
  title: "Software Engineer Lv 1 Collection",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `categories`                                                                                 | [shared.CreateCategoriesApiModel](../../../sdk/models/shared/createcategoriesapimodel.md)[]  | :heavy_minus_sign:                                                                           | The categories associated with this content                                                  | [<br/>{<br/>"name": "Technology"<br/>}<br/>]                                                 |
| `coverUrl`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | The URL of the thumbnail image associated with the collection.                               | https://www.googledrive.com/?v=16873                                                         |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The description of the collection                                                            | This collection acts as learning pathway for software engineers.                             |
| `externalReference`                                                                          | *string*                                                                                     | :heavy_minus_sign:                                                                           | The external ID associated with this collection                                              | SOFTWARE-ENG-LV1-TRAINING-collection-1                                                       |
| `languages`                                                                                  | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | The languages associated with this collection                                                |                                                                                              |
| `learningObjectIds`                                                                          | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | The child ID/IDs associated with this collection                                             | [<br/>"16873-SOFTWARE-ENG-COURSE",<br/>"16874-SOFTWARE-ENG-COURSE"<br/>]                     |
| `remoteLearningObjectIds`                                                                    | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | Provider's unique identifiers of the child ID/IDs associated with this collection            | [<br/>"e3cb75bf-aa84-466e-a6c1-b8322b257a48",<br/>"e3cb75bf-aa84-466e-a6c1-b8322b257a49"<br/>] |
| `skills`                                                                                     | [shared.CreateSkillsApiModel](../../../sdk/models/shared/createskillsapimodel.md)[]          | :heavy_minus_sign:                                                                           | The skills associated with this content                                                      | [<br/>{<br/>"name": "Technology"<br/>}<br/>]                                                 |
| `title`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | The title of the collection                                                                  | Software Engineer Lv 1 Collection                                                            |
| `unifiedCustomFields`                                                                        | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | Custom Unified Fields configured in your StackOne project                                    | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
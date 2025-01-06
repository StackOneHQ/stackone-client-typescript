# LmsCreateCollectionRequest

## Example Usage

```typescript
import { LmsCreateCollectionRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsCreateCollectionRequest = {
  lmsCreateCollectionRequestDto: {
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
        id: "16873-IT345",
        name: "Information-Technology",
      },
    ],
    title: "Software Engineer Lv 1 Collection",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `lmsCreateCollectionRequestDto`                                                                     | [shared.LmsCreateCollectionRequestDto](../../../sdk/models/shared/lmscreatecollectionrequestdto.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `xAccountId`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | The account identifier                                                                              |
# LmsUpdateContentRequest

## Example Usage

```typescript
import { LmsUpdateContentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsUpdateContentRequest = {
  lmsCreateContentRequestDto: {
    active: true,
    additionalData: [
      {
        id: "learning_outcomes",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        value: "This is additional data",
      },
    ],
    authors: [
      {
        id: "123",
        name: "John Doe",
      },
    ],
    categories: [
      {
        name: "Technology",
      },
    ],
    contentUrl: "https://www.youtube.com/watch?v=16873",
    coverUrl: "https://www.googledrive.com/?v=16873",
    createdAt: new Date("2021-07-21T14:00:00.000Z"),
    description: "This video acts as learning content for software engineers.",
    duration: "P3Y6M4DT12H30M5S",
    externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
    languages: null,
    localizations: [
      {
        description:
          "This course acts as learning resource for software engineers.",
        title: "Software Engineer Lv 1",
      },
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
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `lmsCreateContentRequestDto`                                                                  | [shared.LmsCreateContentRequestDto](../../../sdk/models/shared/lmscreatecontentrequestdto.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `xAccountId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The account identifier                                                                        |
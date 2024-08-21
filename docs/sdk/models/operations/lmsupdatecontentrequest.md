# LmsUpdateContentRequest

## Example Usage

```typescript
import { LmsUpdateContentRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { ContentLanguageEnumValue, LmsCreateContentRequestDto2 } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsUpdateContentRequest = {
    lmsCreateContentRequestDto: {
        active: LmsCreateContentRequestDto2.True,
        categories: [
            {
                active: true,
                name: "Technology",
            },
        ],
        contentUrl: "https://www.youtube.com/watch?v=16873",
        courseIds: ["16873-SOFTWARE-ENG-COURSE"],
        coverUrl: "https://www.googledrive.com/?v=16873",
        description: "This video acts as learning content for software engineers.",
        duration: "P3Y6M4DT12H30M5S",
        externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
        languages: [
            {
                value: ContentLanguageEnumValue.EnGB,
            },
        ],
        order: 1,
        title: "Software Engineer Lv 1",
    },
    id: "<id>",
    xAccountId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `lmsCreateContentRequestDto`                                                                  | [shared.LmsCreateContentRequestDto](../../../sdk/models/shared/lmscreatecontentrequestdto.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `xAccountId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The account identifier                                                                        |
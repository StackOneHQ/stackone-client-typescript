# LmsListContentResponse

## Example Usage

```typescript
import { LmsListContentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsListContentResponse = {
  contentPaginated: {
    data: [
      {
        active: true,
        categories: [
          {
            active: true,
            id: "12345",
            name: "Technology",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            unifiedCustomFields: {
              "my_project_custom_field_1": "REF-1236",
              "my_project_custom_field_2": "some other value",
            },
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
        remoteCourseIds: [
          "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
        ],
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        skills: [
          {
            active: true,
            id: "12345",
            name: "Sales Techniques",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
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
  contentType: "<value>",
  statusCode: 306,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentPaginated`                                                        | [shared.ContentPaginated](../../../sdk/models/shared/contentpaginated.md) | :heavy_minus_sign:                                                        | The list of content was retrieved.                                        |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |
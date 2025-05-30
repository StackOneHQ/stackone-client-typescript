# DocumentsSearchFilesResponse

## Example Usage

```typescript
import { DocumentsSearchFilesResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { FilesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DocumentsSearchFilesResponse = {
  contentType: "<value>",
  filesSearchResponse: {
    data: [
      {
        createdAt: new Date("2023-02-23T00:00:00.000Z"),
        description: "This is the description associated to the file.",
        driveId: "c28xyrc55866bvuv",
        exportFormats: [
          "application/pdf",
        ],
        fileFormat: {
          sourceValue: "application/pdf",
          value: FilesValue.Pdf,
        },
        folderId: "c28xyrc55866bvuv",
        hasChildren: true,
        hasContent: true,
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Information-Technology",
        ownerId: "c28xyrc55866bvuv",
        path: "/path/to/file",
        remoteDriveId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        remoteFolderId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteOwnerId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        size: 1024,
        updatedAt: new Date("2024-02-23T00:00:00.000Z"),
        url: "https://drive.google.com/file/d/nd8932h9d/view",
      },
    ],
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 504,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `filesSearchResponse`                                                           | [shared.FilesSearchResponse](../../../sdk/models/shared/filessearchresponse.md) | :heavy_minus_sign:                                                              | The list of files matching the search query was retrieved.                      |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |
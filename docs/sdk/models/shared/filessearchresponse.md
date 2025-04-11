# FilesSearchResponse

## Example Usage

```typescript
import { FilesSearchResponse, FilesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: FilesSearchResponse = {
  data: [
    {
      createdAt: new Date("2023-02-23T00:00:00.000Z"),
      description: "This is the description associated to the file.",
      driveId: "c28xyrc55866bvuv",
      exportFormats: [
        "application/pdf",
      ],
      fileFormat: {
        sourceValue: "abc",
        value: FilesValue.Pdf,
      },
      folderId: "c28xyrc55866bvuv",
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
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Files](../../../sdk/models/shared/files.md)[]             | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
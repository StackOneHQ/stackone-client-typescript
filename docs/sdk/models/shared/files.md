# Files

## Example Usage

```typescript
import { Files, FilesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Files = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the file                                                                  | 2023-02-23T00:00:00.000Z                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the file                                                                   | This is the description associated to the file.                                               |
| `driveId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The parent drive ID associated with this file                                                 | c28xyrc55866bvuv                                                                              |
| `exportFormats`                                                                               | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of supported export formats                                                              | [<br/>"application/pdf"<br/>]                                                                 |
| `fileFormat`                                                                                  | [shared.FilesFileFormat](../../../sdk/models/shared/filesfileformat.md)                       | :heavy_minus_sign:                                                                            | The file format of the file                                                                   |                                                                                               |
| `folderId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The parent folder ID associated with this file                                                | c28xyrc55866bvuv                                                                              |
| `hasChildren`                                                                                 | *shared.HasChildren*                                                                          | :heavy_minus_sign:                                                                            | Whether the file has children                                                                 | true                                                                                          |
| `hasContent`                                                                                  | *shared.HasContent*                                                                           | :heavy_minus_sign:                                                                            | Whether the file has content                                                                  | true                                                                                          |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name associated with this file                                                            | Information-Technology                                                                        |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user ID of owner of this file                                                             | c28xyrc55866bvuv                                                                              |
| `path`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The path where the file is stored                                                             | /path/to/file                                                                                 |
| `remoteDriveId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the parent drive associated with this file                    | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `remoteFolderId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the parent folder associated with this file                   | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `remoteOwnerId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier of the owner of this file                                        | e3cb75bf-aa84-466e-a6c1-b8322b257a48                                                          |
| `size`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | The size of this file                                                                         | 1024                                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The last updated date of the file                                                             | 2024-02-23T00:00:00.000Z                                                                      |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The url of the file                                                                           | https://drive.google.com/file/d/nd8932h9d/view                                                |
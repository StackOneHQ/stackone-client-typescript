# FolderResult

## Example Usage

```typescript
import { FolderResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: FolderResult = {
  data: {
    createdAt: new Date("2023-02-23T00:00:00.000Z"),
    description: "This is the description associated to the folder.",
    driveId: "c28xyrc55866bvuv",
    hasChildren: true,
    hasContent: true,
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    isRoot: true,
    name: "Information-Technology",
    ownerId: "c28xyrc55866bvuv",
    parentFolderId: "c28xyrc55866bvuv",
    path: "/path/to/folder",
    remoteDriveId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteOwnerId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    remoteParentFolderId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    size: 1024,
    updatedAt: new Date("2024-02-23T00:00:00.000Z"),
    url: "https://drive.google.com/folder/d/nd8932h9d/view",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Folders](../../../sdk/models/shared/folders.md)           | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
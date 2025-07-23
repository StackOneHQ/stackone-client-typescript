# DocumentsListFilesQueryParamFilter

Documents Files Filter

## Example Usage

```typescript
import { DocumentsListFilesQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: DocumentsListFilesQueryParamFilter = {
  content: "FAQ of the project",
  createdAfter: "2020-01-01T00:00:00.000Z",
  driveId: "1234567890",
  folderId: "1234567890",
  name: "john_doe_resume.pdf",
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `content`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Search if the contents of the file contains the string (contents can include file metadata)  | FAQ of the project                                                                           |
| `createdAfter`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | Use a string with a date to only select results created after that given date                | 2020-01-01T00:00:00.000Z                                                                     |
| `driveId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Use to only include Files within the specified Drive                                         | 1234567890                                                                                   |
| `folderId`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | Use to only include Files within the specified Folder. Required when requesting nested items | 1234567890                                                                                   |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | Search if the name of the file contains the string                                           | john_doe_resume.pdf                                                                          |
| `updatedAfter`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | Use a string with a date to only select results updated after that given date                | 2020-01-01T00:00:00.000Z                                                                     |
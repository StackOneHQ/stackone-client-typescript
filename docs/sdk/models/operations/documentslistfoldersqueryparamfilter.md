# DocumentsListFoldersQueryParamFilter

Documents Folders Filter

## Example Usage

```typescript
import { DocumentsListFoldersQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: DocumentsListFoldersQueryParamFilter = {
  driveId: "1234567890",
  folderId: "1234567890",
  name: "Engineering",
  updatedAfter: new Date("2020-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `driveId`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | Use to only include Folders within the specified Drive                                         | 1234567890                                                                                     |
| `folderId`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | Use to only include Folders within the specified Folder. Required when requesting nested items | 1234567890                                                                                     |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | Search if the name of the folder contains the string                                           | Engineering                                                                                    |
| `updatedAfter`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | Use a string with a date to only select results updated after that given date                  | 2020-01-01T00:00:00.000Z                                                                       |
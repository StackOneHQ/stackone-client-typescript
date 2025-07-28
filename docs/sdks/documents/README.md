# Documents
(*documents*)

## Overview

### Available Operations

* [downloadFile](#downloadfile) - Download File
* [getDrive](#getdrive) - Get Drive
* [getFile](#getfile) - Get File
* [getFolder](#getfolder) - Get Folder
* [listDrives](#listdrives) - List Drives
* [listFiles](#listfiles) - List Files
* [listFolders](#listfolders) - List Folders
* [uploadFile](#uploadfile) - Upload File

## downloadFile

Download File

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.documents.downloadFile({
    exportFormat: "text/plain",
    format: "base64",
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { documentsDownloadFile } from "@stackone/stackone-client-ts/funcs/documentsDownloadFile.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await documentsDownloadFile(stackOne, {
    exportFormat: "text/plain",
    format: "base64",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsDownloadFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentsDownloadFileRequest](../../sdk/models/operations/documentsdownloadfilerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentsDownloadFileResponse](../../sdk/models/operations/documentsdownloadfileresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getDrive

Get Drive

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.documents.getDrive({
    fields: "id,remote_id,name,description,url,created_at,updated_at",
    id: "<id>",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { documentsGetDrive } from "@stackone/stackone-client-ts/funcs/documentsGetDrive.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await documentsGetDrive(stackOne, {
    fields: "id,remote_id,name,description,url,created_at,updated_at",
    id: "<id>",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsGetDrive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentsGetDriveRequest](../../sdk/models/operations/documentsgetdriverequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentsGetDriveResponse](../../sdk/models/operations/documentsgetdriveresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getFile

Get File

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.documents.getFile({
    fields: "id,remote_id,name,description,url,size,file_format,path,owner_id,remote_owner_id,folder_id,remote_folder_id,drive_id,remote_drive_id,export_formats,default_download_format,created_at,updated_at,has_content,has_children,all_parent_folder_ids,remote_all_parent_folder_ids",
    id: "<id>",
    include: "all_parent_folder_ids",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { documentsGetFile } from "@stackone/stackone-client-ts/funcs/documentsGetFile.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await documentsGetFile(stackOne, {
    fields: "id,remote_id,name,description,url,size,file_format,path,owner_id,remote_owner_id,folder_id,remote_folder_id,drive_id,remote_drive_id,export_formats,default_download_format,created_at,updated_at,has_content,has_children,all_parent_folder_ids,remote_all_parent_folder_ids",
    id: "<id>",
    include: "all_parent_folder_ids",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsGetFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentsGetFileRequest](../../sdk/models/operations/documentsgetfilerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentsGetFileResponse](../../sdk/models/operations/documentsgetfileresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## getFolder

Get Folder

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.documents.getFolder({
    fields: "id,remote_id,name,description,url,size,path,owner_id,remote_owner_id,parent_folder_id,remote_parent_folder_id,drive_id,remote_drive_id,created_at,updated_at,has_content,has_children,is_root,all_parent_folder_ids,remote_all_parent_folder_ids",
    id: "<id>",
    include: "all_parent_folder_ids",
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { documentsGetFolder } from "@stackone/stackone-client-ts/funcs/documentsGetFolder.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await documentsGetFolder(stackOne, {
    fields: "id,remote_id,name,description,url,size,path,owner_id,remote_owner_id,parent_folder_id,remote_parent_folder_id,drive_id,remote_drive_id,created_at,updated_at,has_content,has_children,is_root,all_parent_folder_ids,remote_all_parent_folder_ids",
    id: "<id>",
    include: "all_parent_folder_ids",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsGetFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentsGetFolderRequest](../../sdk/models/operations/documentsgetfolderrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentsGetFolderResponse](../../sdk/models/operations/documentsgetfolderresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listDrives

List Drives

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.documents.listDrives({
    fields: "id,remote_id,name,description,url,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { documentsListDrives } from "@stackone/stackone-client-ts/funcs/documentsListDrives.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await documentsListDrives(stackOne, {
    fields: "id,remote_id,name,description,url,created_at,updated_at",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("documentsListDrives failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentsListDrivesRequest](../../sdk/models/operations/documentslistdrivesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentsListDrivesResponse](../../sdk/models/operations/documentslistdrivesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listFiles

List Files

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.documents.listFiles({
    fields: "id,remote_id,name,description,url,size,file_format,path,owner_id,remote_owner_id,folder_id,remote_folder_id,drive_id,remote_drive_id,export_formats,default_download_format,created_at,updated_at,has_content,has_children,all_parent_folder_ids,remote_all_parent_folder_ids",
    filter: {
      content: "FAQ of the project",
      createdAfter: "2020-01-01T00:00:00.000Z",
      driveId: "1234567890",
      folderId: "1234567890",
      name: "john_doe_resume.pdf",
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    folderId: "1234567890",
    include: "all_parent_folder_ids",
    nestedItems: "true",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { documentsListFiles } from "@stackone/stackone-client-ts/funcs/documentsListFiles.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await documentsListFiles(stackOne, {
    fields: "id,remote_id,name,description,url,size,file_format,path,owner_id,remote_owner_id,folder_id,remote_folder_id,drive_id,remote_drive_id,export_formats,default_download_format,created_at,updated_at,has_content,has_children,all_parent_folder_ids,remote_all_parent_folder_ids",
    filter: {
      content: "FAQ of the project",
      createdAfter: "2020-01-01T00:00:00.000Z",
      driveId: "1234567890",
      folderId: "1234567890",
      name: "john_doe_resume.pdf",
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    folderId: "1234567890",
    include: "all_parent_folder_ids",
    nestedItems: "true",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("documentsListFiles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentsListFilesRequest](../../sdk/models/operations/documentslistfilesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentsListFilesResponse](../../sdk/models/operations/documentslistfilesresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## listFolders

List Folders

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.documents.listFolders({
    fields: "id,remote_id,name,description,url,size,path,owner_id,remote_owner_id,parent_folder_id,remote_parent_folder_id,drive_id,remote_drive_id,created_at,updated_at,has_content,has_children,is_root,all_parent_folder_ids,remote_all_parent_folder_ids",
    filter: {
      driveId: "1234567890",
      folderId: "1234567890",
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    folderId: "1234567890",
    include: "all_parent_folder_ids",
    nestedItems: "true",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { documentsListFolders } from "@stackone/stackone-client-ts/funcs/documentsListFolders.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await documentsListFolders(stackOne, {
    fields: "id,remote_id,name,description,url,size,path,owner_id,remote_owner_id,parent_folder_id,remote_parent_folder_id,drive_id,remote_drive_id,created_at,updated_at,has_content,has_children,is_root,all_parent_folder_ids,remote_all_parent_folder_ids",
    filter: {
      driveId: "1234567890",
      folderId: "1234567890",
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    folderId: "1234567890",
    include: "all_parent_folder_ids",
    nestedItems: "true",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("documentsListFolders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentsListFoldersRequest](../../sdk/models/operations/documentslistfoldersrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentsListFoldersResponse](../../sdk/models/operations/documentslistfoldersresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |

## uploadFile

Upload File

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { UnifiedUploadRequestDtoSchemasValue, UnifiedUploadRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.documents.uploadFile({
    unifiedUploadRequestDto: {
      category: {
        sourceValue: "550e8400-e29b-41d4-a716-446655440000, CUSTOM_CATEGORY_NAME",
        value: "reports, resumes",
      },
      categoryId: "6530",
      confidential: {
        sourceValue: "public",
        value: UnifiedUploadRequestDtoValue.True,
      },
      content: "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
      fileFormat: {
        sourceValue: "application/pdf",
        value: UnifiedUploadRequestDtoSchemasValue.Pdf,
      },
      name: "weather-forecast",
      path: "/path/to/file",
    },
    xAccountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { documentsUploadFile } from "@stackone/stackone-client-ts/funcs/documentsUploadFile.js";
import { UnifiedUploadRequestDtoSchemasValue, UnifiedUploadRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await documentsUploadFile(stackOne, {
    unifiedUploadRequestDto: {
      category: {
        sourceValue: "550e8400-e29b-41d4-a716-446655440000, CUSTOM_CATEGORY_NAME",
        value: "reports, resumes",
      },
      categoryId: "6530",
      confidential: {
        sourceValue: "public",
        value: UnifiedUploadRequestDtoValue.True,
      },
      content: "VGhpcyBpc24ndCByZWFsbHkgYSBzYW1wbGUgZmlsZSwgYnV0IG5vIG9uZSB3aWxsIGV2ZXIga25vdyE",
      fileFormat: {
        sourceValue: "application/pdf",
        value: UnifiedUploadRequestDtoSchemasValue.Pdf,
      },
      name: "weather-forecast",
      path: "/path/to/file",
    },
    xAccountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsUploadFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentsUploadFileRequest](../../sdk/models/operations/documentsuploadfilerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentsUploadFileResponse](../../sdk/models/operations/documentsuploadfileresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.BadRequestResponse          | 400                                | application/json                   |
| errors.UnauthorizedResponse        | 401                                | application/json                   |
| errors.ForbiddenResponse           | 403                                | application/json                   |
| errors.NotFoundResponse            | 404                                | application/json                   |
| errors.RequestTimedOutResponse     | 408                                | application/json                   |
| errors.ConflictResponse            | 409                                | application/json                   |
| errors.PreconditionFailedResponse  | 412                                | application/json                   |
| errors.UnprocessableEntityResponse | 422                                | application/json                   |
| errors.TooManyRequestsResponse     | 429                                | application/json                   |
| errors.InternalServerErrorResponse | 500                                | application/json                   |
| errors.NotImplementedResponse      | 501                                | application/json                   |
| errors.BadGatewayResponse          | 502                                | application/json                   |
| errors.SDKError                    | 4XX, 5XX                           | \*/\*                              |
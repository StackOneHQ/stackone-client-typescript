# DownloadHeadersApiModel

## Example Usage

```typescript
import { DownloadHeadersApiModel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DownloadHeadersApiModel = {
  contentDisposition: "attachment; filename=\"example.pdf\"",
  contentEncoding: "gzip",
  contentLength: 1024,
  contentRange: "bytes 0-1023/2048",
  contentType: "application/pdf",
  transferEncoding: "chunked",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `contentDisposition`                    | *string*                                | :heavy_minus_sign:                      | Value of the Content-Disposition header | attachment; filename="example.pdf"      |
| `contentEncoding`                       | *string*                                | :heavy_minus_sign:                      | Encoding of the content                 | gzip                                    |
| `contentLength`                         | *number*                                | :heavy_minus_sign:                      | Size of the content in bytes            | 1024                                    |
| `contentRange`                          | *string*                                | :heavy_minus_sign:                      | Range of the content being sent         | bytes 0-1023/2048                       |
| `contentType`                           | *string*                                | :heavy_minus_sign:                      | MIME type of the file                   | application/pdf                         |
| `transferEncoding`                      | *string*                                | :heavy_minus_sign:                      | Transfer encoding type                  | chunked                                 |
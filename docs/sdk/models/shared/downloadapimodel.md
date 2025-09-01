# DownloadApiModel

## Example Usage

```typescript
import { DownloadApiModel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DownloadApiModel = {
  data: new TextEncoder().encode("0x42E13fEBAd"),
  headers: {
    contentDisposition: "attachment; filename=\"example.pdf\"",
    contentEncoding: "gzip",
    contentLength: 1024,
    contentRange: "bytes 0-1023/2048",
    contentType: "application/pdf",
    transferEncoding: "chunked",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | *Uint8Array*                                                                            | :heavy_check_mark:                                                                      | The file data in binary format                                                          |
| `headers`                                                                               | [shared.DownloadHeadersApiModel](../../../sdk/models/shared/downloadheadersapimodel.md) | :heavy_check_mark:                                                                      | Headers related to the download                                                         |
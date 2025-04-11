# DocumentsGetDriveResponse

## Example Usage

```typescript
import { DocumentsGetDriveResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: DocumentsGetDriveResponse = {
  contentType: "<value>",
  driveResult: {
    data: {
      createdAt: new Date("2023-02-23T00:00:00.000Z"),
      description: "Drive with USA Development documents",
      id: "16873-IT345",
      name: "USA Development Drive",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      updatedAt: new Date("2024-02-23T00:00:00.000Z"),
      url: "https://test.sharepoint.com/Document%20Library",
    },
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 506,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `driveResult`                                                         | [shared.DriveResult](../../../sdk/models/shared/driveresult.md)       | :heavy_minus_sign:                                                    | The drive with the given identifier was retrieved.                    |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
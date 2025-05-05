# Data

## Example Usage

```typescript
import { Data } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Data = {
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  fileName: "screenshot.png",
  fileType: "image/png",
  fileUrl: "https://example.com/files/screenshot.png",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  size: 1024,
  ticketId: "ticket-001",
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  userId: "user-001",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the record was created                                                     | 2021-01-01T01:01:01.000Z                                                                      |
| `fileName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the file                                                                          | screenshot.png                                                                                |
| `fileType`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The type of the file                                                                          | image/png                                                                                     |
| `fileUrl`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The resource URL of the file                                                                  | https://example.com/files/screenshot.png                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `size`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | The size of the file                                                                          | 1024                                                                                          |
| `ticketId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The reference ticket ID the attachment belongs to                                             | ticket-001                                                                                    |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the record was last updated                                                | 2021-01-01T01:01:01.000Z                                                                      |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user who uploaded the file                                                                | user-001                                                                                      |
# Drives

## Example Usage

```typescript
import { Drives } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Drives = {
  createdAt: new Date("2023-02-23T00:00:00.000Z"),
  description: "Drive with USA Development documents",
  id: "16873-IT345",
  name: "USA Development Drive",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  updatedAt: new Date("2024-02-23T00:00:00.000Z"),
  url: "https://test.sharepoint.com/Document%20Library",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the drive                                                                 | 2023-02-23T00:00:00.000Z                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description associated with this drive                                                    | Drive with USA Development documents                                                          |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID associated with this drive                                                             | 16873-IT345                                                                                   |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name associated with this drive                                                           | USA Development Drive                                                                         |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The last updated date of the drive                                                            | 2024-02-23T00:00:00.000Z                                                                      |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The url of the drive                                                                          | https://test.sharepoint.com/Document%20Library                                                |
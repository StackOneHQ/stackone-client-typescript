# DrivesPaginated

## Example Usage

```typescript
import { DrivesPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DrivesPaginated = {
  data: [
    {
      createdAt: new Date("2023-02-23T00:00:00.000Z"),
      description: "Drive with USA Development documents",
      id: "16873-IT345",
      name: "USA Development Drive",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      updatedAt: new Date("2024-02-23T00:00:00.000Z"),
      url: "https://test.sharepoint.com/Document%20Library",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Drives](../../../sdk/models/shared/drives.md)[]           | :heavy_check_mark:                                                | N/A                                                               |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
# PlatformLogsPaginated

## Example Usage

```typescript
import { PlatformLogsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PlatformLogsPaginated = {
  data: [
    {
      accountId: "45355976281015164504",
      action: "download",
      category: "hris",
      childResource: "time-off",
      duration: 356,
      endTime: new Date("2021-01-01T00:00:00Z"),
      eventDatetime: new Date("2021-01-01T00:00:00Z"),
      httpMethod: "get",
      path: "/unified/hris/employees",
      projectId: "dev-project-68574",
      requestId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      resource: "employees",
      sourceId: "1234567890",
      sourceIp: "192.168.1.1",
      sourceType: "DASHBOARD",
      sourceValue: "ACCOUNT_TESTER",
      startTime: new Date("2021-01-01T00:00:00Z"),
      status: 200,
      subResource: "documents",
      success: true,
      url: "https://api.stackone.com/unified/hris/employees?raw=false",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.PlatformLog](../../../sdk/models/shared/platformlog.md)[] | :heavy_check_mark:                                                | N/A                                                               |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
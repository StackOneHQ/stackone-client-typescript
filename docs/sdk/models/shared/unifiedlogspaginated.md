# UnifiedLogsPaginated

## Example Usage

```typescript
import { UnifiedLogsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedLogsPaginated = {
  data: [
    {
      accountId: "45355976281015164504",
      action: "download",
      childResource: "time-off",
      duration: 356,
      endTime: new Date("2021-01-01T00:00:00Z"),
      eventDatetime: new Date("2021-01-01T00:00:00Z"),
      httpMethod: "get",
      isWorker: false,
      path: "/unified/hris/employees",
      projectId: "dev-project-68574",
      provider: "planday",
      requestId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      resource: "employees",
      service: "hris",
      sourceId: "1234567890",
      sourceType: "DASHBOARD",
      sourceValue: "ACCOUNT_TESTER",
      startTime: new Date("2021-01-01T00:00:00Z"),
      status: 200,
      stepRequests: [
        {
          accountId: "45355976281015164504",
          action: "download",
          childResource: "time-off",
          duration: 356,
          endTime: new Date("2021-01-01T00:00:00Z"),
          httpMethod: "get",
          id: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
          isWorker: false,
          path: "/unified/hris/employees",
          projectId: "dev-project-68574",
          provider: "planday",
          requestId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
          resource: "employees",
          service: "hris",
          startTime: new Date("2021-01-01T00:00:00Z"),
          status: 200,
          subResource: "documents",
          success: true,
          url: "https://api.stackone.com/unified/hris/employees?raw=false",
        },
      ],
      subResource: "documents",
      success: true,
      url: "https://api.stackone.com/unified/hris/employees?raw=false",
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [shared.UnifiedLogsPartial](../../../sdk/models/shared/unifiedlogspartial.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |
| `next`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
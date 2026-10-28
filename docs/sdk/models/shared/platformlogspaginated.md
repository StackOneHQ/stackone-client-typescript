# PlatformLogsPaginated

## Example Usage

```typescript
import { PlatformLogLogType, PlatformLogsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PlatformLogsPaginated = {
  data: [
    {
      action: "create",
      agentId: "agent-123",
      authId: "auth-123",
      authType: "API_KEY",
      durationMs: 356,
      endTime: new Date("2021-01-01T00:00:00Z"),
      eventId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      eventTime: new Date("2021-01-01T00:00:00Z"),
      eventType: "account_create",
      ipAddress: "192.168.1.1",
      isRead: false,
      logId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      logType: PlatformLogLogType.Platform,
      projectId: "dev-project-68574",
      resource: "account",
      resourceId: "45355976281015164504",
      service: "unified-api",
      sessionId: "session-123",
      sourceId: "1234567890",
      sourceType: "DASHBOARD",
      startTime: new Date("2021-01-01T00:00:00Z"),
      statusCode: 200,
      streamType: "HTTP",
      success: true,
      transportType: "HTTP",
      userAgent: "Mozilla/5.0",
      userEmail: "person@example.com",
    },
  ],
  page: 1,
  pageSize: 25,
  total: 100,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.PlatformLog](../../../sdk/models/shared/platformlog.md)[] | :heavy_check_mark:                                                | The list of platform logs                                         |                                                                   |
| `page`                                                            | *number*                                                          | :heavy_check_mark:                                                | The page number returned                                          | 1                                                                 |
| `pageSize`                                                        | *number*                                                          | :heavy_check_mark:                                                | The number of results per page                                    | 25                                                                |
| `total`                                                           | *number*                                                          | :heavy_check_mark:                                                | Total number of logs matching the filters                         | 100                                                               |
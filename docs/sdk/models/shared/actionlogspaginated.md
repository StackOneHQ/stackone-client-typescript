# ActionLogsPaginated

## Example Usage

```typescript
import { ActionLogsPaginated, LogType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionLogsPaginated = {
  data: [
    {
      accountId: "45355976281015164504",
      actionId: "get_employees",
      actionRunId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      actionType: "sync",
      agentId: "agent-123",
      authId: "auth-123",
      authType: "API_KEY",
      category: "hris",
      connector: {
        categories: [
          "hris",
        ],
        key: "workday",
        logoUrl: "https://app.stackone.com/logos/workday.png",
        name: "Workday",
        owner: "stackone",
        version: "1.0.0",
      },
      connectorKey: "workday",
      connectorOwner: "stackone",
      connectorProfileId: "profile-123",
      connectorVersion: "1.0.0",
      durationMs: 356,
      endTime: new Date("2021-01-01T00:00:00Z"),
      eventTime: new Date("2021-01-01T00:00:00Z"),
      httpMethod: "GET",
      ipAddress: "192.168.1.1",
      isBackground: false,
      logId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      logType: LogType.Action,
      mode: "production",
      originOwnerId: "owner-123",
      originOwnerName: "Test Owner",
      projectId: "dev-project-68574",
      riskLevel: "low",
      sessionId: "session-123",
      sourceId: "1234567890",
      sourceType: "DASHBOARD",
      sourceValue: "ACCOUNT_TESTER",
      startTime: new Date("2021-01-01T00:00:00Z"),
      statusCode: 200,
      streamType: "HTTP",
      success: true,
      tier2Score: 0.5,
      transportType: "HTTP",
      url: "https://api.stackone.com/unified/hris/employees",
      userAgent: "Mozilla/5.0",
    },
  ],
  query: {},
  total: 100,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.ActionLog](../../../sdk/models/shared/actionlog.md)[] | :heavy_check_mark:                                            | The list of action logs                                       |                                                               |
| `query`                                                       | [shared.Query](../../../sdk/models/shared/query.md)           | :heavy_minus_sign:                                            | Pagination metadata                                           | {<br/>"page": 1,<br/>"page_size": 25<br/>}                    |
| `total`                                                       | *number*                                                      | :heavy_minus_sign:                                            | Total number of logs                                          | 100                                                           |
# LogsPaginatedData


## Supported Types

### `shared.ActionLog`

```typescript
const value: shared.ActionLog = {
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
};
```

### `shared.UnifiedLog`

```typescript
const value: shared.UnifiedLog = {
  accountId: "45355976281015164504",
  action: "list",
  agentId: "agent-123",
  authId: "auth-123",
  authType: "API_KEY",
  childResource: "time-off",
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
  duration: 356,
  durationMs: 356,
  endTime: new Date("2021-01-01T00:00:00Z"),
  eventTime: new Date("2021-01-01T00:00:00Z"),
  httpMethod: "GET",
  ipAddress: "192.168.1.1",
  isBackground: false,
  isWorker: false,
  logId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  logType: UnifiedLogLogType.Unified,
  mode: "production",
  originOwnerId: "owner-123",
  originOwnerName: "Test Owner",
  path: "/unified/hris/employees",
  projectId: "dev-project-68574",
  provider: "workday",
  requestId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  resource: "employees",
  service: "hris",
  sessionId: "session-123",
  sourceId: "1234567890",
  sourceType: "DASHBOARD",
  sourceValue: "ACCOUNT_TESTER",
  startTime: new Date("2021-01-01T00:00:00Z"),
  status: 200,
  statusCode: 200,
  streamType: "HTTP",
  subResource: "documents",
  success: true,
  transportType: "HTTP",
  url: "https://api.stackone.com/unified/hris/employees",
  userAgent: "Mozilla/5.0",
};
```


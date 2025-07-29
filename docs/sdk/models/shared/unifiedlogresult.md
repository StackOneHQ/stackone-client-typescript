# UnifiedLogResult

## Example Usage

```typescript
import { UnifiedLogResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedLogResult = {
  data: {
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
    request: {
      headers: {
        "content-type": "application/json",
        "authorization": "Bearer token",
      },
      id: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      method: "get",
      url: {
        hostname: "example.com",
        path: "/api/v1/resource",
        queryParams: {
          "page": 1,
          "limit": 10,
        },
        url: "https://example.com/api/v1/resource",
      },
    },
    requestId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
    resource: "employees",
    response: {
      customMappingErrors: [
        {
          id: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
          message: "Invalid value",
          targetField: "first_name",
        },
      ],
      headers: {
        "content-type": "application/json",
        "authorization": "Bearer token",
      },
      providerErrors: [
        {
          headers: {},
          raw: {},
          status: 400,
          url: "https://api.provider.com/v1/resource",
        },
      ],
      statusCode: 200,
    },
    service: "hris",
    sourceId: "1234567890",
    sourceIp: "192.168.1.1",
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
        request: {
          headers: {
            "content-type": "application/json",
            "authorization": "Bearer token",
          },
          id: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
          method: "get",
          url: {
            hostname: "example.com",
            path: "/api/v1/resource",
            queryParams: {
              "page": 1,
              "limit": 10,
            },
            url: "https://example.com/api/v1/resource",
          },
        },
        requestId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
        resource: "employees",
        response: {
          customMappingErrors: [
            {
              id: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
              message: "Invalid value",
              targetField: "first_name",
            },
          ],
          headers: {
            "content-type": "application/json",
            "authorization": "Bearer token",
          },
          providerErrors: [
            {
              headers: {},
              raw: {},
              status: 400,
              url: "https://api.provider.com/v1/resource",
            },
          ],
          statusCode: 200,
        },
        service: "hris",
        sourceIp: "192.168.1.1",
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
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [shared.UnifiedLogs](../../../sdk/models/shared/unifiedlogs.md) | :heavy_check_mark:                                              | N/A                                                             |
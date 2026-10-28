# StepLogsPaginated

## Example Usage

```typescript
import { StepLogLogType, StepLogsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StepLogsPaginated = {
  data: [
    {
      accountId: "45355976281015164504",
      actionRunId: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
      durationMs: 356,
      endTime: new Date("2021-01-01T00:00:00Z"),
      eventTime: new Date("2021-01-01T00:00:00Z"),
      logType: StepLogLogType.Step,
      message: "Step completed successfully",
      projectId: "dev-project-68574",
      skipped: false,
      startTime: new Date("2021-01-01T00:00:00Z"),
      statusCode: 200,
      stepFunctionName: "fetchEmployees",
      stepFunctionVersion: "1.0.0",
      stepId: "step-123",
      stepIndex: 0,
      stepIterations: 1,
      success: true,
    },
  ],
  query: {},
  total: 100,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [shared.StepLog](../../../sdk/models/shared/steplog.md)[]                             | :heavy_check_mark:                                                                    | The list of step logs                                                                 |                                                                                       |
| `query`                                                                               | [shared.StepLogsPaginatedQuery](../../../sdk/models/shared/steplogspaginatedquery.md) | :heavy_minus_sign:                                                                    | Pagination metadata                                                                   | {<br/>"page": 1,<br/>"page_size": 25<br/>}                                            |
| `total`                                                                               | *number*                                                                              | :heavy_minus_sign:                                                                    | Total number of logs                                                                  | 100                                                                                   |
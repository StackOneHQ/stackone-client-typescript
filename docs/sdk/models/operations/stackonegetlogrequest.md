# StackoneGetLogRequest

## Example Usage

```typescript
import { QueryParamInclude, StackoneGetLogRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneGetLogRequest = {
  id: "<id>",
  include: QueryParamInclude.StepLogs,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |                                                                                     |
| `include`                                                                           | [operations.QueryParamInclude](../../../sdk/models/operations/queryparaminclude.md) | :heavy_minus_sign:                                                                  | The include parameter allows you to include additional data in the response.        | step_logs                                                                           |
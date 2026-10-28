# PolicyLogObservedField

## Example Usage

```typescript
import { PolicyLogObservedField } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PolicyLogObservedField = {
  level: "org",
  path: "data.worker.salary",
  policyIds: [
    "21cfc501-43b4-4fdb-bea9-1e79bc1f2425",
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `level`                                                                                                                                      | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Which narrowing level observed it. Absent when the level was not recorded.                                                                   | org                                                                                                                                          |
| `path`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The path the rule matched on, as the connector shapes it, with array positions collapsed to `[]` so one entry covers every element of a list | data.worker.salary                                                                                                                           |
| `policyIds`                                                                                                                                  | *string*[]                                                                                                                                   | :heavy_check_mark:                                                                                                                           | The monitor-mode rules that would have removed this field                                                                                    | [<br/>"21cfc501-43b4-4fdb-bea9-1e79bc1f2425"<br/>]                                                                                           |
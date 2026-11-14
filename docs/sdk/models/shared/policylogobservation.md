# PolicyLogObservation

## Example Usage

```typescript
import { PolicyLogObservation } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PolicyLogObservation = {
  decision: "deny",
  level: "project",
  policyIds: [
    "21cfc501-43b4-4fdb-bea9-1e79bc1f2425",
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `decision`                                 | *string*                                   | :heavy_check_mark:                         | What it would have answered                | deny                                       |
| `level`                                    | *string*                                   | :heavy_check_mark:                         | The level that observed                    | project                                    |
| `policyIds`                                | *string*[]                                 | :heavy_check_mark:                         | The rules behind the observation           | [<br/>"21cfc501-43b4-4fdb-bea9-1e79bc1f2425"<br/>] |
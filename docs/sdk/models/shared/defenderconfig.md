# DefenderConfig

Per-request defender configuration. Takes precedence over defender_enabled and project settings.

## Example Usage

```typescript
import { DefenderConfig } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DefenderConfig = {
  blockHighRisk: false,
  enabled: true,
  useTier1Classification: true,
  useTier2Classification: true,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `blockHighRisk`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether to block tool execution when a HIGH risk score is detected | false                                                              |
| `enabled`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether to run defender at all                                     | true                                                               |
| `useTier1Classification`                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether to run tier 1 pattern-based detection                      | true                                                               |
| `useTier2Classification`                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether to run tier 2 ML-based detection                           | true                                                               |
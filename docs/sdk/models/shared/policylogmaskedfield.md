# PolicyLogMaskedField

## Example Usage

```typescript
import { PolicyLogMaskedField } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PolicyLogMaskedField = {
  level: "project",
  path: "data.current.temperature_2m",
  policyIds: [
    "33f2e9bd-254c-483e-ba4a-ae6a1a597727",
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `level`                                                                                                                                      | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Which narrowing level refused it. Absent when the level was not recorded.                                                                    | project                                                                                                                                      |
| `path`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The path the rule matched on, as the connector shapes it, with array positions collapsed to `[]` so one entry covers every element of a list | data.current.temperature_2m                                                                                                                  |
| `policyIds`                                                                                                                                  | *string*[]                                                                                                                                   | :heavy_check_mark:                                                                                                                           | The rules that refused this field                                                                                                            | [<br/>"33f2e9bd-254c-483e-ba4a-ae6a1a597727"<br/>]                                                                                           |
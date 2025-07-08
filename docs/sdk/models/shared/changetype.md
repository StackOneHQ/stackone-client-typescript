# ChangeType

The type of change that occurred to the application

## Example Usage

```typescript
import { ApplicationChangesValue, ChangeType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ChangeType = {
  sourceValue: "StatusChange",
  value: ApplicationChangesValue.ApplicationStatus,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `sourceValue`                                                                           | *shared.ApplicationChangesSourceValue*                                                  | :heavy_minus_sign:                                                                      | The source value of the change type                                                     | StatusChange                                                                            |
| `value`                                                                                 | [shared.ApplicationChangesValue](../../../sdk/models/shared/applicationchangesvalue.md) | :heavy_minus_sign:                                                                      | The type of change that occurred to the application                                     | application_status                                                                      |
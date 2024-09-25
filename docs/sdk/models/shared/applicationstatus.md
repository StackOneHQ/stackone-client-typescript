# ApplicationStatus

## Example Usage

```typescript
import { ApplicationStatus, ApplicationValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationStatus = {
  sourceValue: "Hired",
  value: ApplicationValue.Hired,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `sourceValue`                                                             | *shared.ApplicationSourceValue*                                           | :heavy_minus_sign:                                                        | The source value of the application status.                               | Hired                                                                     |
| `value`                                                                   | [shared.ApplicationValue](../../../sdk/models/shared/applicationvalue.md) | :heavy_minus_sign:                                                        | The status of the application.                                            | hired                                                                     |
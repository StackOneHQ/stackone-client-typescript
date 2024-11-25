# BackgroundCheckOrderApplicationStatus

## Example Usage

```typescript
import { BackgroundCheckOrderApplicationStatus, BackgroundCheckOrderValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckOrderApplicationStatus = {
  sourceValue: "Hired",
  value: BackgroundCheckOrderValue.Hired,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                               | *shared.BackgroundCheckOrderSourceValue*                                                    | :heavy_minus_sign:                                                                          | The source value of the application status.                                                 | Hired                                                                                       |
| `value`                                                                                     | [shared.BackgroundCheckOrderValue](../../../sdk/models/shared/backgroundcheckordervalue.md) | :heavy_minus_sign:                                                                          | The status of the application.                                                              | hired                                                                                       |
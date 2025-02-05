# AtsUpdateBackgroundCheckResultRequestDtoResult

## Example Usage

```typescript
import {
  AtsUpdateBackgroundCheckResultRequestDtoResult,
  AtsUpdateBackgroundCheckResultRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateBackgroundCheckResultRequestDtoResult = {
  sourceValue: "Passed",
  value: AtsUpdateBackgroundCheckResultRequestDtoValue.Passed,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                       | *shared.AtsUpdateBackgroundCheckResultRequestDtoSourceValue*                                                                        | :heavy_minus_sign:                                                                                                                  | The source value of the test result.                                                                                                | Passed                                                                                                                              |
| `value`                                                                                                                             | [shared.AtsUpdateBackgroundCheckResultRequestDtoValue](../../../sdk/models/shared/atsupdatebackgroundcheckresultrequestdtovalue.md) | :heavy_minus_sign:                                                                                                                  | The result of the test.                                                                                                             | passed                                                                                                                              |
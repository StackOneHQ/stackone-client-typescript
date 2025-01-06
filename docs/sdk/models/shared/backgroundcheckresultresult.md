# BackgroundCheckResultResult

## Example Usage

```typescript
import { BackgroundCheckResultResult, BackgroundCheckResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckResultResult = {
  sourceValue: "Passed",
  value: BackgroundCheckResultValue.Passed,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                 | *shared.BackgroundCheckResultSourceValue*                                                     | :heavy_minus_sign:                                                                            | The source value of the test result.                                                          | Passed                                                                                        |
| `value`                                                                                       | [shared.BackgroundCheckResultValue](../../../sdk/models/shared/backgroundcheckresultvalue.md) | :heavy_minus_sign:                                                                            | The result of the test.                                                                       | passed                                                                                        |
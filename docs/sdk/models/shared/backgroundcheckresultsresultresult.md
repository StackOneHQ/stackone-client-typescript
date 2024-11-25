# BackgroundCheckResultsResultResult

## Example Usage

```typescript
import { BackgroundCheckResultsResultResult, BackgroundCheckResultsResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckResultsResultResult = {
  sourceValue: "Passed",
  value: BackgroundCheckResultsResultValue.Passed,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                               | *shared.BackgroundCheckResultsResultSourceValue*                                                            | :heavy_minus_sign:                                                                                          | The source value of the test result.                                                                        | Passed                                                                                                      |
| `value`                                                                                                     | [shared.BackgroundCheckResultsResultValue](../../../sdk/models/shared/backgroundcheckresultsresultvalue.md) | :heavy_minus_sign:                                                                                          | The result of the test.                                                                                     | passed                                                                                                      |
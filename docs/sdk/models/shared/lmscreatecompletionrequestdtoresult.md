# LmsCreateCompletionRequestDtoResult

The result of the completion

## Example Usage

```typescript
import { LmsCreateCompletionRequestDtoResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateCompletionRequestDtoResult = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                 | *shared.LmsCreateCompletionRequestDtoSourceValue*                                                             | :heavy_minus_sign:                                                                                            | The original result status from the provider before normalization.                                            |
| `value`                                                                                                       | [shared.LmsCreateCompletionRequestDtoValue](../../../sdk/models/shared/lmscreatecompletionrequestdtovalue.md) | :heavy_minus_sign:                                                                                            | The StackOne unified result status.                                                                           |
# CompletionLearningObjectType

The learning object type of the completion

## Example Usage

```typescript
import { CompletionLearningObjectType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CompletionLearningObjectType = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `sourceValue`                                                             | *shared.CompletionSourceValue*                                            | :heavy_minus_sign:                                                        | The original learning object type from the provider before normalization. |
| `value`                                                                   | [shared.CompletionValue](../../../sdk/models/shared/completionvalue.md)   | :heavy_minus_sign:                                                        | The StackOne unified learning object type.                                |
# Package

## Example Usage

```typescript
import { AssessmentsOrderSchemasValue, Package } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Package = {
  description:
    "Skills test to gauge a candidate's proficiency in job-specific skills",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Test 1",
  type: {
    sourceValue: "key_responsibilities",
    value: AssessmentsOrderSchemasValue.Responsibilities,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | Package description                                                               | Skills test to gauge a candidate's proficiency in job-specific skills             |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | Unique identifier                                                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                              |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | Package name                                                                      | Test 1                                                                            |
| `type`                                                                            | [shared.AssessmentsOrderType](../../../sdk/models/shared/assessmentsordertype.md) | :heavy_minus_sign:                                                                | Package type                                                                      |                                                                                   |
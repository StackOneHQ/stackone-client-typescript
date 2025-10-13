# LmsCreateContentRequestDtoContentType

The type of content

## Example Usage

```typescript
import { LmsCreateContentRequestDtoContentType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateContentRequestDtoContentType = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                           | *shared.LmsCreateContentRequestDtoSourceValue*                                                          | :heavy_minus_sign:                                                                                      | The original value from the provider before normalization.                                              |
| `value`                                                                                                 | [shared.LmsCreateContentRequestDtoValue](../../../sdk/models/shared/lmscreatecontentrequestdtovalue.md) | :heavy_minus_sign:                                                                                      | The StackOne unified content type.                                                                      |
# LmsCreateContentRequestDtoContentType

The type of content

## Example Usage

```typescript
import { LmsCreateContentRequestDtoContentType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsCreateContentRequestDtoContentType = {};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                               | *shared.LmsCreateContentRequestDtoSourceValue*                                                                                                                              | :heavy_minus_sign:                                                                                                                                                          | The provider-specific value to use when value is omitted or set to "unmapped_value". You are responsible for ensuring this matches the provider's expected format.          |
| `value`                                                                                                                                                                     | [shared.LmsCreateContentRequestDtoValue](../../../sdk/models/shared/lmscreatecontentrequestdtovalue.md)                                                                     | :heavy_minus_sign:                                                                                                                                                          | The content type for write operations. Provide one of the listed enum values. If omitted or set to "unmapped_value", the source_value will be sent to the provider instead. |
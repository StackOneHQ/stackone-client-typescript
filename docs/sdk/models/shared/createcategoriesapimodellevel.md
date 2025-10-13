# ~~CreateCategoriesApiModelLevel~~

The hierarchal level of the category

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { CreateCategoriesApiModelLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateCategoriesApiModelLevel = {};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sourceValue`                                                                                                                                                                                                | *shared.CreateCategoriesApiModelSchemasLevelSourceValue*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                           | For read operations: the original category level from the provider. For write operations: fallback value used when value is omitted or "unmapped_value". You must ensure this matches the provider's format. |
| `value`                                                                                                                                                                                                      | [shared.CreateCategoriesApiModelSchemasLevelValue](../../../sdk/models/shared/createcategoriesapimodelschemaslevelvalue.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                                                           | The unified category level. For write operations: provide one of the listed enum values, or omit/set to "unmapped_value" to use source_value instead.                                                        |
# ~~CreateSkillsApiModelLevel~~

The hierarchal level of the skill

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { CreateSkillsApiModelLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateSkillsApiModelLevel = {};
```

## Fields

| Field                                                                                                                                                                                                     | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                                                                                             | *shared.CreateSkillsApiModelSchemasLevelSourceValue*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                        | For read operations: the original skill level from the provider. For write operations: fallback value used when value is omitted or "unmapped_value". You must ensure this matches the provider's format. |
| `value`                                                                                                                                                                                                   | [shared.CreateSkillsApiModelSchemasLevelValue](../../../sdk/models/shared/createskillsapimodelschemaslevelvalue.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                                                        | The unified skill level. For write operations: provide one of the listed enum values, or omit/set to "unmapped_value" to use source_value instead.                                                        |
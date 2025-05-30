# ~~HrisUpdateEmploymentRequestDtoEmploymentType~~

The type of employment (e.g., contractor, permanent)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { HrisUpdateEmploymentRequestDtoEmploymentType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmploymentRequestDtoEmploymentType = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                 | *shared.HrisUpdateEmploymentRequestDtoSchemasSourceValue*                                                                     | :heavy_minus_sign:                                                                                                            | The source value of the employment type.                                                                                      | Permanent                                                                                                                     |
| `value`                                                                                                                       | [shared.HrisUpdateEmploymentRequestDtoSchemasValue](../../../sdk/models/shared/hrisupdateemploymentrequestdtoschemasvalue.md) | :heavy_minus_sign:                                                                                                            | The type of the employment.                                                                                                   | permanent                                                                                                                     |
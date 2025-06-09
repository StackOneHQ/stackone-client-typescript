# ~~HrisCreateEmploymentRequestDtoEmploymentType~~

The type of employment (e.g., contractor, permanent)

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import {
  HrisCreateEmploymentRequestDtoEmploymentType,
  HrisCreateEmploymentRequestDtoSchemasValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmploymentRequestDtoEmploymentType = {
  sourceValue: "Permanent",
  value: HrisCreateEmploymentRequestDtoSchemasValue.Permanent,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                                 | *shared.HrisCreateEmploymentRequestDtoSchemasSourceValue*                                                                     | :heavy_minus_sign:                                                                                                            | The source value of the employment type.                                                                                      | Permanent                                                                                                                     |
| `value`                                                                                                                       | [shared.HrisCreateEmploymentRequestDtoSchemasValue](../../../sdk/models/shared/hriscreateemploymentrequestdtoschemasvalue.md) | :heavy_minus_sign:                                                                                                            | The type of the employment.                                                                                                   | permanent                                                                                                                     |
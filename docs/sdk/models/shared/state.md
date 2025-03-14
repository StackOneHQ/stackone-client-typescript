# State

The ISO3166-2 sub division where the location is situated

## Example Usage

```typescript
import { State } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: State = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sourceValue`                                                            | *shared.HrisCreateEmployeeRequestDtoSchemasHomeLocationStateSourceValue* | :heavy_minus_sign:                                                       | N/A                                                                      |
| `value`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | state (ISO3166-2 Sub Division Code) - value must be a valid enum value   |
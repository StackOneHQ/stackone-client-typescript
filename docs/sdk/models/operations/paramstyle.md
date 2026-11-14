# ParamStyle

Parameter schema style: "flat_prefixed" (default) flattens with location prefix, "nested" groups by location, "flat_smart" flattens and only prefixes on name collision

## Example Usage

```typescript
import { ParamStyle } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: ParamStyle = ParamStyle.FlatSmart;
```

## Values

| Name           | Value          |
| -------------- | -------------- |
| `Nested`       | nested         |
| `FlatPrefixed` | flat_prefixed  |
| `FlatSmart`    | flat_smart     |
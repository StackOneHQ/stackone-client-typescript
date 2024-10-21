# StackoneGetConnectorMetaRequest

## Example Usage

```typescript
import { StackoneGetConnectorMetaRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneGetConnectorMetaRequest = {
  include:
    "field_path,unmapped_fields,resources,inactive,webhooks,static_fields",
  provider: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `include`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | The comma separated list of data that will be included in the response | field_path,unmapped_fields,resources,inactive,webhooks,static_fields   |
| `provider`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
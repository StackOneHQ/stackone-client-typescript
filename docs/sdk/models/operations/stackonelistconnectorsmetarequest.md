# StackoneListConnectorsMetaRequest

## Example Usage

```typescript
import { StackoneListConnectorsMetaRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListConnectorsMetaRequest = {
    include: "field_path,unmapped_fields,resources,inactive,webhooks",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `include`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | The comma separated list of data that will be included in the response | field_path,unmapped_fields,resources,inactive,webhooks                 |
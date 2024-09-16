# AtsRejectApplicationRequestDto

## Example Usage

```typescript
import { AtsRejectApplicationRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsRejectApplicationRequestDto = {
  passthrough: {
    "other_known_names": "John Doe",
  },
  rejectedReasonId: "f223d7f6-908b-48f0-9237-b201c307f609",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `passthrough`                             | Record<string, *any*>                     | :heavy_minus_sign:                        | Value to pass through to the provider     | {<br/>"other_known_names": "John Doe"<br/>} |
| `rejectedReasonId`                        | *string*                                  | :heavy_minus_sign:                        | Unique identifier of the rejection reason | f223d7f6-908b-48f0-9237-b201c307f609      |
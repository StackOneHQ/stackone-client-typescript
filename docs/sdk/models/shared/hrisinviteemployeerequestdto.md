# HrisInviteEmployeeRequestDto

## Example Usage

```typescript
import { HrisInviteEmployeeRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisInviteEmployeeRequestDto = {
  passthrough: {
    "other_known_names": "John Doe",
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `passthrough`                         | Record<string, *any*>                 | :heavy_minus_sign:                    | Value to pass through to the provider | {<br/>"other_known_names": "John Doe"<br/>} |
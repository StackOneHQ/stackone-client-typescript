# AtsMoveApplicationRequestDto

## Example Usage

```typescript
import { AtsMoveApplicationRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsMoveApplicationRequestDto = {
  interviewStageId: "f223d7f6-908b-48f0-9237-b201c307f609",
  passthrough: {
    "other_known_names": "John Doe",
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `interviewStageId`                          | *string*                                    | :heavy_minus_sign:                          | Unique identifier of the application stage. | f223d7f6-908b-48f0-9237-b201c307f609        |
| `passthrough`                               | Record<string, *any*>                       | :heavy_minus_sign:                          | Value to pass through to the provider       | {<br/>"other_known_names": "John Doe"<br/>} |
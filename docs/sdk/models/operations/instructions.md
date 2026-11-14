# Instructions

Server `instructions` (returned in the MCP initialize handshake) that teach the model the path/query/body/headers parameter envelope: "off" (default) omits them, "on" includes envelope guidance matched to the active param-style

## Example Usage

```typescript
import { Instructions } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: Instructions = Instructions.Off;
```

## Values

| Name  | Value |
| ----- | ----- |
| `On`  | on    |
| `Off` | off   |
# Apps

MCP Apps panel: "off" (default) omits it, "on" registers the interactive toolset explorer. Only set it for hosts that render MCP Apps — a client with no iframe (a terminal) gets a tool whose result it cannot display

## Example Usage

```typescript
import { Apps } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: Apps = Apps.On;
```

## Values

| Name  | Value |
| ----- | ----- |
| `On`  | on    |
| `Off` | off   |
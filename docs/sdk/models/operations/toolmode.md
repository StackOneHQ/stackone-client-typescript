# ToolMode

Tool registration mode: "individual" (default) registers each action as a separate tool; "search_execute" registers two tools per linked account for a search-then-execute flow

## Example Usage

```typescript
import { ToolMode } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: ToolMode = ToolMode.Individual;
```

## Values

| Name            | Value           |
| --------------- | --------------- |
| `Individual`    | individual      |
| `SearchExecute` | search_execute  |
# Input

Input parameters for the action

## Example Usage

```typescript
import { Input } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Input = {
  body: {
    "data": "example",
  },
  headers: {
    "Content-Type": "application/json",
  },
  query: {
    "param1": "value1",
    "param2": "value2",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `body`                                     | Record<string, *any*>                      | :heavy_minus_sign:                         | Request body for the action                | {<br/>"data": "example"<br/>}              |
| `headers`                                  | Record<string, *any*>                      | :heavy_minus_sign:                         | Headers for the action                     | {<br/>"Content-Type": "application/json"<br/>} |
| `query`                                    | Record<string, *any*>                      | :heavy_minus_sign:                         | Query parameters for the action            | {<br/>"param1": "value1",<br/>"param2": "value2"<br/>} |
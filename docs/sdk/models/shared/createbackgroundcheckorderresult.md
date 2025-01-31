# CreateBackgroundCheckOrderResult

## Example Usage

```typescript
import { CreateBackgroundCheckOrderResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateBackgroundCheckOrderResult = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  testUrl: "https://exmaple.com/integrations/candidate/test",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `id`                                            | *string*                                        | :heavy_minus_sign:                              | Unique identifier                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3            |
| `remoteId`                                      | *string*                                        | :heavy_minus_sign:                              | Provider's unique identifier                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3            |
| `testUrl`                                       | *string*                                        | :heavy_minus_sign:                              | Test url                                        | https://exmaple.com/integrations/candidate/test |
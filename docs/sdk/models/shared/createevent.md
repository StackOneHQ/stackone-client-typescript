# CreateEvent

## Example Usage

```typescript
import { CreateEvent } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateEvent = {
  event: "hris_employees.created",
  recordId: "<id>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `event`                                 | *string*                                | :heavy_check_mark:                      | The event name                          | hris_employees.created                  |
| `recordId`                              | *string*                                | :heavy_check_mark:                      | The record id associated with the event |                                         |
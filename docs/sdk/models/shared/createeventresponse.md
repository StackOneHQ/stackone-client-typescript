# CreateEventResponse

## Example Usage

```typescript
import { CreateEventResponse } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateEventResponse = {
  event: "hris_employees.created",
  message: "The event was created",
  recordId: "<id>",
  status: 200,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `event`                                          | *string*                                         | :heavy_check_mark:                               | The event name                                   | hris_employees.created                           |
| `message`                                        | *string*                                         | :heavy_minus_sign:                               | The message associated with the operation result | The event was created                            |
| `recordId`                                       | *string*                                         | :heavy_check_mark:                               | The record id associated with the event          |                                                  |
| `status`                                         | *number*                                         | :heavy_check_mark:                               | The response http status code                    | 200                                              |
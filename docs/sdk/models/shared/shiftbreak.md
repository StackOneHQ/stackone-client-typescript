# ShiftBreak

## Example Usage

```typescript
import { ShiftBreak } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ShiftBreak = {
  createdAt: new Date("2024-03-20T10:00:00Z"),
  duration: "PT1H",
  endTime: new Date("2024-03-20T13:00:00Z"),
  id: "break_123456789",
  isPaid: true,
  startTime: new Date("2024-03-20T12:00:00Z"),
  updatedAt: new Date("2024-03-20T10:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the break was created                                                       | 2024-03-20T10:00:00Z                                                                          |
| `duration`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The duration of the break in ISO 8601 duration format                                         | PT1H                                                                                          |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The end time of the break                                                                     | 2024-03-20T13:00:00Z                                                                          |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier of the break                                                            | break_123456789                                                                               |
| `isPaid`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the break is paid                                                                     | true                                                                                          |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The start time of the break                                                                   | 2024-03-20T12:00:00Z                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the break was last updated                                                  | 2024-03-20T10:00:00Z                                                                          |
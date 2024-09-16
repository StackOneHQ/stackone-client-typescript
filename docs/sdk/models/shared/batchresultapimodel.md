# BatchResultApiModel

## Example Usage

```typescript
import { BatchResultApiModel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BatchResultApiModel = {
  errors: [
    [
      "Missing field: name",
    ],
    [
      "<value>",
    ],
    [
      "<value>",
    ],
  ],
  message: "Batch operation accepted",
  statusCode: 202,
  timestamp: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `errors`                                                                                      | *string*[][]                                                                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           | [<br/>[<br/>"Missing field: name"<br/>],<br/>[],<br/>[]<br/>]                                 |
| `message`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Batch operation accepted                                                                      |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 202                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2021-01-01T01:01:01.000Z                                                                      |
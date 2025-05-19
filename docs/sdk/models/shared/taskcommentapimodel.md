# TaskCommentApiModel

## Example Usage

```typescript
import { TaskCommentApiModel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TaskCommentApiModel = {
  comment: "Approved based on in-person assessment",
  createdAt: new Date("2024-03-15T10:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authorEmployeeId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The Employee ID of the author of the comment                                                  |                                                                                               |
| `comment`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The text of the comment                                                                       | Approved based on in-person assessment                                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The creation date of this comment                                                             | 2024-03-15T10:00:00.000Z                                                                      |
# MoveApplicationResult

## Example Usage

```typescript
import { MoveApplicationResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MoveApplicationResult = {
  data: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
  message: "Application moved successfully.",
  statusCode: 200,
  timestamp: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [shared.CreateResultDataApiModel](../../../sdk/models/shared/createresultdataapimodel.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Application moved successfully.                                                               |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 200                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2021-01-01T01:01:01.000Z                                                                      |
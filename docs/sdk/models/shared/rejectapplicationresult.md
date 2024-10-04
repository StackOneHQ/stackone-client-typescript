# RejectApplicationResult

## Example Usage

```typescript
import { RejectApplicationResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: RejectApplicationResult = {
  data: {
    externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
  message: "Application rejected successfully.",
  statusCode: 200,
  timestamp: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [shared.CreateResultDataApiModel](../../../sdk/models/shared/createresultdataapimodel.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Application rejected successfully.                                                            |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 200                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2021-01-01T01:01:01.000Z                                                                      |
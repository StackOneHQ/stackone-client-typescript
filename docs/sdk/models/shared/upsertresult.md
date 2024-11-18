# UpsertResult

## Example Usage

```typescript
import { UpsertResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UpsertResult = {
  data: {
    externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
  message: "Record created successfully.",
  statusCode: 201,
  timestamp: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                | [shared.UpsertResultDataExternalReferenceModel](../../../sdk/models/shared/upsertresultdataexternalreferencemodel.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `message`                                                                                                             | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   | Record created successfully.                                                                                          |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   | 201                                                                                                                   |
| `timestamp`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   | 2021-01-01T01:01:01.000Z                                                                                              |
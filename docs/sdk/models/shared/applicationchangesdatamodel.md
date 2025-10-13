# ApplicationChangesDataModel

## Example Usage

```typescript
import { ApplicationChangesDataModel, ApplicationChangesDataModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationChangesDataModel = {
  applicationStatus: {
    sourceValue: "Hired",
    value: ApplicationChangesDataModelValue.Hired,
  },
  rejectedReasonIds: [
    "f223d7f6-908b-48f0-9237-b201c307f609",
  ],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       | Example                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationStatus`                                                                                                                                               | [shared.ApplicationChangesDataModelApplicationStatus](../../../sdk/models/shared/applicationchangesdatamodelapplicationstatus.md)                                 | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |                                                                                                                                                                   |
| ~~`interviewStageId`~~                                                                                                                                            | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Unique identifier of the interview stage | 18bcbb1b-3cbc-4198-a999-460861d19480                                                                                                                              |
| `rejectedReasonIds`                                                                                                                                               | *string*[]                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                | Unique identifiers of the rejection reasons                                                                                                                       | [<br/>"f223d7f6-908b-48f0-9237-b201c307f609"<br/>]                                                                                                                |
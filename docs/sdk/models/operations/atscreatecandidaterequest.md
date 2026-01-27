# AtsCreateCandidateRequest

## Example Usage

```typescript
import { AtsCreateCandidateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsCreateCandidateRequest = {
  atsCreateCandidateRequestDto: {
    company: "Company Inc.",
    country: "United States",
    customFields: [
      {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Training Completion Status",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        value: "Completed",
        valueId: "value_456",
      },
    ],
    email: "sestier.romain123@gmail.com",
    firstName: "Romain",
    hiredAt: new Date("2021-01-01T01:01:01.000Z"),
    lastName: "Sestier",
    name: "Romain Sestier",
    passthrough: {
      "other_known_names": "John Doe",
    },
    phoneNumbers: [
      {
        phone: "+447700112233",
      },
    ],
    socialLinks: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/romainsestier/",
      },
    ],
    title: "Software Engineer",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
  },
  prefer: "heartbeat",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `atsCreateCandidateRequestDto`                                                                                                                                           | [shared.AtsCreateCandidateRequestDto](../../../sdk/models/shared/atscreatecandidaterequestdto.md)                                                                        | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |
# AtsOrderBackgroundCheckRequestRequest

## Example Usage

```typescript
import { AtsOrderBackgroundCheckRequestRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { AtsCreateBackgroundCheckOrderRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsOrderBackgroundCheckRequestRequest = {
  atsCreateBackgroundCheckOrderRequestDto: {
    application: {
      applicationStatus: {
        sourceValue: "Hired",
        value: AtsCreateBackgroundCheckOrderRequestDtoValue.Hired,
      },
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      passthrough: {
        "other_known_names": "John Doe",
      },
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    candidate: {
      emails: [
        {
          type: "personal",
          value: "sestier.romain123@gmail.com",
        },
      ],
      firstName: "Romain",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      lastName: "Sestier",
      passthrough: {
        "other_known_names": "John Doe",
      },
      profileUrl: "https://exmaple.com/candidate?id=xyz",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    job: {
      hiringTeam: [
        {
          email: "john.doe@gmail.com",
          firstName: "John",
          lastName: "Doe",
          remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
          role: "Software Engineer",
          userId: "123456",
        },
      ],
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      passthrough: {
        "other_known_names": "John Doe",
      },
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      title: "Software Engineer",
    },
    package: {
      description:
        "Skills test to gauge a candidate's proficiency in job-specific skills",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Test 1",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      tests: [
        {
          description:
            "Skills test to gauge a candidate's proficiency in job-specific skills",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Test 1",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        },
      ],
    },
    passthrough: {
      "other_known_names": "John Doe",
    },
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    requester: null,
    resultsUpdateUrl: "https://exmaple.com/integrations/results/update",
  },
  prefer: "heartbeat",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `atsCreateBackgroundCheckOrderRequestDto`                                                                                                                                | [shared.AtsCreateBackgroundCheckOrderRequestDto](../../../sdk/models/shared/atscreatebackgroundcheckorderrequestdto.md)                                                  | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |
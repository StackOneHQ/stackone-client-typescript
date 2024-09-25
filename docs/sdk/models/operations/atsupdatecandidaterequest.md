# AtsUpdateCandidateRequest

## Example Usage

```typescript
import { AtsUpdateCandidateRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsUpdateCandidateRequest = {
  atsUpdateCandidateRequestDto: {
    applicationIds: [
      "123e4567-e89b-12d3-a456-426614174000",
      "523e1234-e89b-fdd2-a456-762545121101",
    ],
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
    emails: [
      {
        type: "personal",
        value: "sestier.romain123@gmail.com",
      },
    ],
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
  id: "<id>",
  xAccountId: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `atsUpdateCandidateRequestDto`                                                                    | [shared.AtsUpdateCandidateRequestDto](../../../sdk/models/shared/atsupdatecandidaterequestdto.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `xAccountId`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | The account identifier                                                                            |
# BackgroundCheckOrderPaginated

## Example Usage

```typescript
import {
  AssessmentsPackagesTestApiModelValue,
  BackgroundCheckOrderPaginated,
  BackgroundCheckOrderValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckOrderPaginated = {
  data: [
    {
      application: {
        applicationStatus: {
          sourceValue: "Hired",
          value: BackgroundCheckOrderValue.Hired,
        },
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        passthrough: {
          "other_known_names": "John Doe",
        },
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
      },
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      job: {
        hiringTeam: [
          {
            email: "john.doe@gmail.com",
            firstName: "John",
            lastName: "Doe",
            role: "Software Engineer",
            userId: "123456",
          },
        ],
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        passthrough: {
          "other_known_names": "John Doe",
        },
        title: "Software Engineer",
      },
      package: {
        description: "Standard background package for hires",
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Standard Background Check",
        tests: [
          {
            description:
              "Skills test to gauge a candidate's proficiency in job-specific skills",
            id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            name: "Test 1",
            type: {
              sourceValue: "key_responsibilities",
              value: AssessmentsPackagesTestApiModelValue.Responsibilities,
            },
          },
        ],
      },
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      requester: {
        emails: [
          {
            type: "personal",
            value: "sestier.romain123@gmail.com",
          },
        ],
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        passthrough: {
          "other_known_names": "John Doe",
        },
      },
      resultsUpdateUrl: "https://exmaple.com/integrations/results/update",
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.BackgroundCheckOrder](../../../sdk/models/shared/backgroundcheckorder.md)[]                                     | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
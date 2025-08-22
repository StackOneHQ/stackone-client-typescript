# HrisJob

## Example Usage

```typescript
import { HrisJob, HrisJobValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisJob = {
  code: "184919",
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  description: "Responsible for identifying business requirements",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  status: {
    value: HrisJobValue.Open,
  },
  title: "Software Engineer",
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `code`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Code of the job                                                                               | 184919                                                                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of creation                                                                              | 2021-01-01T01:01:01.000Z                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the job                                                                        | Responsible for identifying business requirements                                             |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `status`                                                                                      | [shared.HrisJobStatus](../../../sdk/models/shared/hrisjobstatus.md)                           | :heavy_minus_sign:                                                                            | Status of the job                                                                             |                                                                                               |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Title of the job                                                                              | Software Engineer                                                                             |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of last update                                                                           | 2021-01-01T01:01:01.000Z                                                                      |
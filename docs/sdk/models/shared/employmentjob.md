# EmploymentJob

The job of employee

## Example Usage

```typescript
import { EmploymentJob } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmploymentJob = {
  description: {
    text: "Testing the laws of motion",
  },
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  ownerId: "5356",
  parentId: "7577",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  title: "Software Engineer",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `description`                                                   | [shared.Description](../../../sdk/models/shared/description.md) | :heavy_minus_sign:                                              | The employee job description                                    |                                                                 |
| `id`                                                            | *string*                                                        | :heavy_minus_sign:                                              | Unique identifier                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                            |
| `ownerId`                                                       | *string*                                                        | :heavy_minus_sign:                                              | The owner_id of the job                                         | 5356                                                            |
| `parentId`                                                      | *string*                                                        | :heavy_minus_sign:                                              | The parent_id of the job                                        | 7577                                                            |
| `remoteId`                                                      | *string*                                                        | :heavy_minus_sign:                                              | Provider's unique identifier                                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                            |
| `title`                                                         | *string*                                                        | :heavy_minus_sign:                                              | Title of the job                                                | Software Engineer                                               |
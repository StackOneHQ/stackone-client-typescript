# TicketingComponentResultData

## Example Usage

```typescript
import { TicketingComponentResultData } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingComponentResultData = {
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  description: "Description of the component",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Component Falcon",
  organizationId: "organization-001",
  projectId: "project-001",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the record was created                                                     | 2021-01-01T01:01:01.000Z                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the component                                                              | Description of the component                                                                  |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the component                                                                     | Component Falcon                                                                              |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The organization id related to the component                                                  | organization-001                                                                              |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The project id related to the component                                                       | project-001                                                                                   |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the record was last updated                                                | 2021-01-01T01:01:01.000Z                                                                      |
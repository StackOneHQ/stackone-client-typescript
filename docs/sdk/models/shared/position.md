# Position

## Example Usage

```typescript
import { Position } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Position = {
  departmentId: "dept-123",
  description:
    "Responsible for developing and maintaining software applications",
  employmentType: "full-time",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  jobId: "JOB-12345",
  locationId: "loc-456",
  postedDate: new Date("2024-01-15T10:00:00.000Z"),
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  status: null,
  title: "Senior Software Engineer",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `departmentId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Department ID associated with the position                                                    | dept-123                                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the position                                                                   | Responsible for developing and maintaining software applications                              |
| `employmentType`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Employment type for the position                                                              | full-time                                                                                     |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `jobId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Job ID from the HRIS provider                                                                 | JOB-12345                                                                                     |
| `locationId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Location ID associated with the position                                                      | loc-456                                                                                       |
| `postedDate`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date when the position was posted                                                             | 2024-01-15T10:00:00.000Z                                                                      |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `status`                                                                                      | [shared.PositionStatus](../../../sdk/models/shared/positionstatus.md)                         | :heavy_minus_sign:                                                                            | Status of the position                                                                        |                                                                                               |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Title of the position                                                                         | Senior Software Engineer                                                                      |
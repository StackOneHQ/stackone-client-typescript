# PositionResult

## Example Usage

```typescript
import { PositionResult, PositionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PositionResult = {
  data: {
    departmentId: "dept-123",
    description:
      "Responsible for developing and maintaining software applications",
    employmentType: "full-time",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    jobId: "JOB-12345",
    locationId: "loc-456",
    postedDate: new Date("2024-01-15T10:00:00.000Z"),
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    status: {
      value: PositionValue.Open,
    },
    title: "Senior Software Engineer",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Position](../../../sdk/models/shared/position.md)         | :heavy_check_mark:                                                | N/A                                                               |
| `raw`                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
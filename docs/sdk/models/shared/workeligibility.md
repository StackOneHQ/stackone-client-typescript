# WorkEligibility

## Example Usage

```typescript
import { WorkEligibility, WorkEligibilitySchemasDocumentValue, WorkEligibilityValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: WorkEligibility = {
  document: {
    category: {},
    categoryId: "6530",
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    fileFormat: {
      sourceValue: "abc",
      value: WorkEligibilitySchemasDocumentValue.Pdf,
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "My Document",
    path: "/path/to/file",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteUrl: "https://example.com/file.pdf",
    updatedAt: new Date("2021-01-02T01:01:01.000Z"),
  },
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  issuedBy: {
    value: WorkEligibilityValue.Us,
  },
  number: "1234567890",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  subType: "H1B",
  type: {},
  validFrom: new Date("2021-01-01T00:00.000Z"),
  validTo: new Date("2021-01-01T00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `document`                                                                                    | [shared.WorkEligibilityDocument](../../../sdk/models/shared/workeligibilitydocument.md)       | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `issuedBy`                                                                                    | [shared.WorkEligibilityIssuedBy](../../../sdk/models/shared/workeligibilityissuedby.md)       | :heavy_minus_sign:                                                                            | The country code of the issued by authority                                                   |                                                                                               |
| `number`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1234567890                                                                                    |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `subType`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | H1B                                                                                           |
| `type`                                                                                        | [shared.WorkEligibilityType](../../../sdk/models/shared/workeligibilitytype.md)               | :heavy_minus_sign:                                                                            | N/A                                                                                           | visa                                                                                          |
| `validFrom`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2021-01-01T00:00.000Z                                                                         |
| `validTo`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2021-01-01T00:00.000Z                                                                         |
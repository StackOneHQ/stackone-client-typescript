# AtsListApplicationDocumentsQueryParamFilter

ATS Document Filter

## Example Usage

```typescript
import { AtsListApplicationDocumentsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListApplicationDocumentsQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `type`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | Filter to select documents by type                                            |                                                                               |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |
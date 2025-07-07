# AtsListApplicationChangesQueryParamFilter

Filter parameters for application changes (supports created_after and change_type)

## Example Usage

```typescript
import { AtsListApplicationChangesQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListApplicationChangesQueryParamFilter = {
  createdAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `changeType`                                                                  | [operations.ChangeType](../../../sdk/models/operations/changetype.md)         | :heavy_minus_sign:                                                            | Filter by the type of change that occurred to the application                 |                                                                               |
| `createdAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results created after that given date | 2020-01-01T00:00:00.000Z                                                      |
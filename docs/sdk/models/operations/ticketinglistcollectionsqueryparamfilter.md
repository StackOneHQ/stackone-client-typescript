# TicketingListCollectionsQueryParamFilter

Ticketing Collections filters

## Example Usage

```typescript
import { TicketingListCollectionsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: TicketingListCollectionsQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                        | [operations.TicketingListCollectionsQueryParamType](../../../sdk/models/operations/ticketinglistcollectionsqueryparamtype.md) | :heavy_minus_sign:                                                                                                            | Filter collections by type                                                                                                    |                                                                                                                               |
| `updatedAfter`                                                                                                                | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Use a string with a date to only select results updated after that given date                                                 | 2020-01-01T00:00:00.000Z                                                                                                      |
# AccountingJournalBatchCreateRequestDto

## Example Usage

```typescript
import { AccountingJournalBatchCreateRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountingJournalBatchCreateRequestDto = {
  items: [],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                       | [shared.AccountingJournalCreateRequestDto](../../../sdk/models/shared/accountingjournalcreaterequestdto.md)[] | :heavy_check_mark:                                                                                            | The batch of journals to create                                                                               |
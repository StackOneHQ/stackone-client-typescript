# AccountingCreateCompanyJournalResponse

## Example Usage

```typescript
import { AccountingCreateCompanyJournalResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AccountingCreateCompanyJournalResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  statusCode: 293408,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `createResult`                                                        | [shared.CreateResult](../../../sdk/models/shared/createresult.md)     | :heavy_minus_sign:                                                    | The journal was created successfully.                                 |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
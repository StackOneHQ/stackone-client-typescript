# HrisGetCompanyResponse

## Example Usage

```typescript
import { HrisGetCompanyResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetCompanyResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 867146,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyResult`                                                       | [shared.CompanyResult](../../../sdk/models/shared/companyresult.md)   | :heavy_minus_sign:                                                    | The Company with the given identifier was retrieved.                  |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
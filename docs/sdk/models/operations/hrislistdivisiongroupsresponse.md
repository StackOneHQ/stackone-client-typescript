# HrisListDivisionGroupsResponse

## Example Usage

```typescript
import { HrisListDivisionGroupsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListDivisionGroupsResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 391982,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `hrisDivisionsPaginated`                                                              | [shared.HRISDivisionsPaginated](../../../sdk/models/shared/hrisdivisionspaginated.md) | :heavy_minus_sign:                                                                    | The list of division groups was retrieved.                                            |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
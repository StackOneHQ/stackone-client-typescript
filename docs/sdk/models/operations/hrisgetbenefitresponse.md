# HrisGetBenefitResponse

## Example Usage

```typescript
import { HrisGetBenefitResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetBenefitResponse = {
  contentType: "<value>",
  hrisBenefitResult: {
    data: {
      createdAt: new Date("2021-01-01T00:00:00Z"),
      description: "Health insurance for employees",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Health Insurance",
      provider: "Aetna",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      updatedAt: new Date("2021-01-01T00:00:00Z"),
    },
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 302,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `hrisBenefitResult`                                                         | [shared.HRISBenefitResult](../../../sdk/models/shared/hrisbenefitresult.md) | :heavy_minus_sign:                                                          | The Benefit with the given identifier was retrieved.                        |
| `headers`                                                                   | Record<string, *string*[]>                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
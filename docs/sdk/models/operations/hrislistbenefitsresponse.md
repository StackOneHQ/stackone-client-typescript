# HrisListBenefitsResponse

## Example Usage

```typescript
import { HrisListBenefitsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListBenefitsResponse = {
  contentType: "<value>",
  hrisBenefitsPaginated: {
    data: [
      {
        createdAt: new Date("2021-01-01T00:00:00Z"),
        description: "Health insurance for employees",
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Health Insurance",
        provider: "Aetna",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        updatedAt: new Date("2021-01-01T00:00:00Z"),
      },
    ],
  },
  statusCode: 511,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `hrisBenefitsPaginated`                                                             | [shared.HRISBenefitsPaginated](../../../sdk/models/shared/hrisbenefitspaginated.md) | :heavy_minus_sign:                                                                  | The list of Benefits was retrieved.                                                 |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
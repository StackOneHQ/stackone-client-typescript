# CreateResponse

## Example Usage

```typescript
import { CreateResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: CreateResponse = {
  contentType: "<value>",
  statusCode: 226,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  classes: [
    {
      event: "hris_employees.created",
      message: "The event was created",
      recordId: "<id>",
      status: 200,
    },
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `classes`                                                                         | [shared.CreateEventResponse](../../../sdk/models/shared/createeventresponse.md)[] | :heavy_minus_sign:                                                                | Multiple status returned. Check the response body for details.                    |
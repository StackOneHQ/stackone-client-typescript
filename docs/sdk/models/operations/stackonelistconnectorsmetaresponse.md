# StackoneListConnectorsMetaResponse

## Example Usage

```typescript
import { StackoneListConnectorsMetaResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListConnectorsMetaResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
| `classes`                                                               | [shared.ConnectorsMeta](../../../sdk/models/shared/connectorsmeta.md)[] | :heavy_minus_sign:                                                      | The list of connectors meta information was retrieved.                  |
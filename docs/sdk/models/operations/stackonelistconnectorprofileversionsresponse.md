# StackoneListConnectorProfileVersionsResponse

## Example Usage

```typescript
import { StackoneListConnectorProfileVersionsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListConnectorProfileVersionsResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  statusCode: 541202,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `classes`                                                                                 | [shared.ConnectorProfileVersion](../../../sdk/models/shared/connectorprofileversion.md)[] | :heavy_minus_sign:                                                                        | The list of connector versions for the connector profile was retrieved.                   |
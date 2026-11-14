# StackoneListConnectorProfilesRequest

## Example Usage

```typescript
import { StackoneListConnectorProfilesRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneListConnectorProfilesRequest = {
  connectorKey: "salesforce",
  enabled: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `connectorKey`                                   | *string*                                         | :heavy_minus_sign:                               | Filter connector profiles by connector key       | salesforce                                       |
| `enabled`                                        | *boolean*                                        | :heavy_minus_sign:                               | Filter connector profiles by their enabled state | true                                             |
| `page`                                           | *number*                                         | :heavy_minus_sign:                               | The page number of the results to fetch          |                                                  |
| `pageSize`                                       | *number*                                         | :heavy_minus_sign:                               | The number of results per page                   |                                                  |
# ConnectSessionCreate


## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `categories`                                                                                            | [shared.ConnectSessionCreateCategories](../../../sdk/models/shared/connectsessioncreatecategories.md)[] | :heavy_minus_sign:                                                                                      | The categories of the provider to connect to                                                            | ats,hris,hrisLegacy,crm,marketing,stackOne                                                              |
| `expiresIn`                                                                                             | *number*                                                                                                | :heavy_minus_sign:                                                                                      | How long the session should be valid for in seconds                                                     |                                                                                                         |
| `metadata`                                                                                              | [shared.Metadata](../../../sdk/models/shared/metadata.md)                                               | :heavy_minus_sign:                                                                                      | The metadata for the connection                                                                         |                                                                                                         |
| `originOwnerId`                                                                                         | *string*                                                                                                | :heavy_check_mark:                                                                                      | The origin owner identifier                                                                             |                                                                                                         |
| `originOwnerName`                                                                                       | *string*                                                                                                | :heavy_check_mark:                                                                                      | The origin owner name                                                                                   |                                                                                                         |
| `originUsername`                                                                                        | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The origin username                                                                                     |                                                                                                         |
| `provider`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The provider to connect to                                                                              |                                                                                                         |
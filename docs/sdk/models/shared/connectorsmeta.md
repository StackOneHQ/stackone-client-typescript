# ConnectorsMeta


## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `active`                                                                                | *boolean*                                                                               | :heavy_check_mark:                                                                      | Whether this provider has been enabled on the integrations page for the current project | true                                                                                    |
| `category`                                                                              | [shared.Category](../../../sdk/models/shared/category.md)                               | :heavy_check_mark:                                                                      | The provider service category                                                           | hris                                                                                    |
| `models`                                                                                | [shared.Models](../../../sdk/models/shared/models.md)                                   | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `provider`                                                                              | *string*                                                                                | :heavy_check_mark:                                                                      | The provider key                                                                        | hibob                                                                                   |
| `providerName`                                                                          | *string*                                                                                | :heavy_check_mark:                                                                      | The provider human-readable label                                                       | Hibob                                                                                   |
| `resources`                                                                             | [shared.Resources](../../../sdk/models/shared/resources.md)                             | :heavy_minus_sign:                                                                      | Resources for this provider, such as image assets                                       |                                                                                         |
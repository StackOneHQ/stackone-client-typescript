# OperationType

The operation type to use for the query. If not provided, the default operation is `contains`.

## Example Usage

```typescript
import { OperationType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: OperationType = {
  sourceValue: "contains",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                   | *shared.DocumentsFilesSearchRequestDtoSourceValue*                                                              | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | contains                                                                                                        |
| `value`                                                                                                         | [shared.DocumentsFilesSearchRequestDtoValue](../../../sdk/models/shared/documentsfilessearchrequestdtovalue.md) | :heavy_minus_sign:                                                                                              | The operation type of the query                                                                                 | contains                                                                                                        |
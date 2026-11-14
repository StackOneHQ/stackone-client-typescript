# IamResourceTypesResult

## Example Usage

```typescript
import { IamResourceTypesResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamResourceTypesResult = {
  data: [
    "group",
  ],
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                            | *string*[]                                                                                                                                        | :heavy_check_mark:                                                                                                                                | Resource type identifiers supported by this connector for resource-scoped queries (e.g. ["channel", "workspace"], ["group"], ["file", "folder"]). | [<br/>"group"<br/>]                                                                                                                               |
| `raw`                                                                                                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               |                                                                                                                                                   |
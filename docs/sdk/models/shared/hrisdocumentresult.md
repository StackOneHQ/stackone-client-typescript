# HrisDocumentResult

## Example Usage

```typescript
import { HrisDocumentApiModelSchemasValue, HrisDocumentResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisDocumentResult = {
  data: {
    category: {},
    categoryId: "6530",
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    fileFormat: {
      sourceValue: "abc",
      value: HrisDocumentApiModelSchemasValue.Pdf,
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "My Document",
    path: "/path/to/file",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteUrl: "https://example.com/file.pdf",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    updatedAt: new Date("2021-01-02T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.HrisDocumentApiModel](../../../sdk/models/shared/hrisdocumentapimodel.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `raw`                                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                 | :heavy_minus_sign:                                                                | N/A                                                                               |
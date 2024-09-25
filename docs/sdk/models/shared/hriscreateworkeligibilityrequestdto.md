# HrisCreateWorkEligibilityRequestDto

## Example Usage

```typescript
import {
  HrisCreateWorkEligibilityRequestDto,
  HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue,
  HrisCreateWorkEligibilityRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateWorkEligibilityRequestDto = {
  document: {
    category: {},
    categoryId: "6530",
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    fileFormat: {
      sourceValue: "abc",
      value: HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue.Pdf,
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "My Document",
    path: "/path/to/file",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteUrl: "https://example.com/file.pdf",
    updatedAt: new Date("2021-01-02T01:01:01.000Z"),
  },
  issuedBy: {
    value: HrisCreateWorkEligibilityRequestDtoValue.Us,
  },
  number: "1234567890",
  passthrough: {
    "other_known_names": "John Doe",
  },
  subType: "H1B",
  type: {},
  validFrom: new Date("2021-01-01T00:00.000Z"),
  validTo: new Date("2021-01-01T00:00.000Z"),
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `document`                                                                                                              | [shared.Document](../../../sdk/models/shared/document.md)                                                               | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `issuedBy`                                                                                                              | [shared.IssuedBy](../../../sdk/models/shared/issuedby.md)                                                               | :heavy_minus_sign:                                                                                                      | The country code of the issued by authority                                                                             |                                                                                                                         |
| `number`                                                                                                                | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | 1234567890                                                                                                              |
| `passthrough`                                                                                                           | Record<string, *any*>                                                                                                   | :heavy_minus_sign:                                                                                                      | Value to pass through to the provider                                                                                   | {<br/>"other_known_names": "John Doe"<br/>}                                                                             |
| `subType`                                                                                                               | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | H1B                                                                                                                     |
| `type`                                                                                                                  | [shared.HrisCreateWorkEligibilityRequestDtoType](../../../sdk/models/shared/hriscreateworkeligibilityrequestdtotype.md) | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | visa                                                                                                                    |
| `validFrom`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | 2021-01-01T00:00.000Z                                                                                                   |
| `validTo`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | 2021-01-01T00:00.000Z                                                                                                   |
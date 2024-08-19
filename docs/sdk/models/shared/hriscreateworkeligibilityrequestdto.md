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
        "0": "{",
        "1": '"',
        "2": "o",
        "3": "t",
        "4": "h",
        "5": "e",
        "6": "r",
        "7": "_",
        "8": "k",
        "9": "n",
        "10": "o",
        "11": "w",
        "12": "n",
        "13": "_",
        "14": "n",
        "15": "a",
        "16": "m",
        "17": "e",
        "18": "s",
        "19": '"',
        "20": ":",
        "21": " ",
        "22": '"',
        "23": "J",
        "24": "o",
        "25": "h",
        "26": "n",
        "27": " ",
        "28": "D",
        "29": "o",
        "30": "e",
        "31": '"',
        "32": "}",
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
| `passthrough`                                                                                                           | Record<string, *any*>                                                                                                   | :heavy_minus_sign:                                                                                                      | Value to pass through to the provider                                                                                   | {"other_known_names": "John Doe"}                                                                                       |
| `subType`                                                                                                               | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | H1B                                                                                                                     |
| `type`                                                                                                                  | [shared.HrisCreateWorkEligibilityRequestDtoType](../../../sdk/models/shared/hriscreateworkeligibilityrequestdtotype.md) | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | visa                                                                                                                    |
| `validFrom`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | 2021-01-01T00:00.000Z                                                                                                   |
| `validTo`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | 2021-01-01T00:00.000Z                                                                                                   |
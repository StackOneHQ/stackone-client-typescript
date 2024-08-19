# HrisUpdateEmployeeWorkEligibilityRequestRequest

## Example Usage

```typescript
import { HrisUpdateEmployeeWorkEligibilityRequestRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  HrisCreateWorkEligibilityRequestDtoSchemasDocumentValue,
  HrisCreateWorkEligibilityRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeWorkEligibilityRequestRequest = {
    hrisCreateWorkEligibilityRequestDto: {
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
    },
    id: "<id>",
    subResourceId: "<value>",
    xAccountId: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `hrisCreateWorkEligibilityRequestDto`                                                                           | [shared.HrisCreateWorkEligibilityRequestDto](../../../sdk/models/shared/hriscreateworkeligibilityrequestdto.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `subResourceId`                                                                                                 | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `xAccountId`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The account identifier                                                                                          |
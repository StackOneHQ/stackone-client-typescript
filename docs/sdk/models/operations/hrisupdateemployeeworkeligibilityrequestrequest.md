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
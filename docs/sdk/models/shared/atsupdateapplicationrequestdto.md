# AtsUpdateApplicationRequestDto

## Example Usage

```typescript
import { AtsUpdateApplicationRequestDto, AtsUpdateApplicationRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateApplicationRequestDto = {
  applicationStatus: {
    sourceValue: "Hired",
    value: AtsUpdateApplicationRequestDtoValue.Hired,
  },
  customFields: null,
  passthrough: {
    "other_known_names": "John Doe",
  },
  source: null,
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationStatus`                                                                                                                     | [shared.AtsUpdateApplicationRequestDtoApplicationStatus](../../../sdk/models/shared/atsupdateapplicationrequestdtoapplicationstatus.md) | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     |                                                                                                                                         |
| `customFields`                                                                                                                          | [shared.CustomFields](../../../sdk/models/shared/customfields.md)[]                                                                     | :heavy_minus_sign:                                                                                                                      | The application custom fields                                                                                                           |                                                                                                                                         |
| `passthrough`                                                                                                                           | Record<string, *any*>                                                                                                                   | :heavy_minus_sign:                                                                                                                      | Value to pass through to the provider                                                                                                   | {<br/>"other_known_names": "John Doe"<br/>}                                                                                             |
| `source`                                                                                                                                | [shared.AtsUpdateApplicationRequestDtoSource](../../../sdk/models/shared/atsupdateapplicationrequestdtosource.md)                       | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     |                                                                                                                                         |
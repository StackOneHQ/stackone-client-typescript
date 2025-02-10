# AtsUpdateApplicationRequestDto

## Example Usage

```typescript
import { AtsUpdateApplicationRequestDto, AtsUpdateApplicationRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateApplicationRequestDto = {
  applicationStatus: {
    sourceValue: "Hired",
    value: AtsUpdateApplicationRequestDtoValue.Hired,
  },
  customFields: [
    {
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Training Completion Status",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteValueId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
      value: "Completed",
      valueId: "value_456",
    },
  ],
  passthrough: {
    "other_known_names": "John Doe",
  },
  source: {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "LinkedIn",
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationStatus`                                                                                                                     | [shared.AtsUpdateApplicationRequestDtoApplicationStatus](../../../sdk/models/shared/atsupdateapplicationrequestdtoapplicationstatus.md) | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     |                                                                                                                                         |
| `customFields`                                                                                                                          | [shared.CustomFields](../../../sdk/models/shared/customfields.md)[]                                                                     | :heavy_minus_sign:                                                                                                                      | The application custom fields                                                                                                           |                                                                                                                                         |
| `passthrough`                                                                                                                           | Record<string, *any*>                                                                                                                   | :heavy_minus_sign:                                                                                                                      | Value to pass through to the provider                                                                                                   | {<br/>"other_known_names": "John Doe"<br/>}                                                                                             |
| `source`                                                                                                                                | [shared.AtsUpdateApplicationRequestDtoSource](../../../sdk/models/shared/atsupdateapplicationrequestdtosource.md)                       | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     |                                                                                                                                         |
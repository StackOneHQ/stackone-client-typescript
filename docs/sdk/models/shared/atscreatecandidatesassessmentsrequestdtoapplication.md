# AtsCreateCandidatesAssessmentsRequestDtoApplication

## Example Usage

```typescript
import {
  AtsCreateCandidatesAssessmentsRequestDtoApplication,
  AtsCreateCandidatesAssessmentsRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateCandidatesAssessmentsRequestDtoApplication = {
  applicationStatus: {
    sourceValue: "Hired",
    value: AtsCreateCandidatesAssessmentsRequestDtoValue.Hired,
  },
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  passthrough: {
    "other_known_names": "John Doe",
  },
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 | Example                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationStatus`                                                                                                                                         | [shared.AtsCreateCandidatesAssessmentsRequestDtoApplicationStatus](../../../sdk/models/shared/atscreatecandidatesassessmentsrequestdtoapplicationstatus.md) | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |                                                                                                                                                             |
| `id`                                                                                                                                                        | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | Unique identifier                                                                                                                                           | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                                                        |
| `passthrough`                                                                                                                                               | Record<string, *any*>                                                                                                                                       | :heavy_minus_sign:                                                                                                                                          | Value to pass through to the provider                                                                                                                       | {<br/>"other_known_names": "John Doe"<br/>}                                                                                                                 |
| `remoteId`                                                                                                                                                  | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | Provider's unique identifier                                                                                                                                | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                                                        |
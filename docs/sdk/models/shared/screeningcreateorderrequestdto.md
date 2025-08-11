# ScreeningCreateOrderRequestDto

## Example Usage

```typescript
import { ScreeningCreateOrderRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScreeningCreateOrderRequestDto = {
  candidate: {
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
  },
  packageId: "54321",
  passthrough: {
    "other_known_names": "John Doe",
  },
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `candidate`                                                                                  | [shared.ScreeningOrderCandidate](../../../sdk/models/shared/screeningordercandidate.md)      | :heavy_check_mark:                                                                           | Candidate information                                                                        |                                                                                              |
| `packageId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | Package ID                                                                                   | 54321                                                                                        |
| `passthrough`                                                                                | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | Value to pass through to the provider                                                        | {<br/>"other_known_names": "John Doe"<br/>}                                                  |
| `unifiedCustomFields`                                                                        | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | Custom Unified Fields configured in your StackOne project                                    | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
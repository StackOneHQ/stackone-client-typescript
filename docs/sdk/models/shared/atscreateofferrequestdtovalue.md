# AtsCreateOfferRequestDtoValue

The status of the offer.

## Example Usage

```typescript
import { AtsCreateOfferRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateOfferRequestDtoValue =
  AtsCreateOfferRequestDtoValue.Pending;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `Retracted`            | retracted              |
| `Accepted`             | accepted               |
| `Rejected`             | rejected               |
| `Created`              | created                |
| `Approved`             | approved               |
| `NotApproved`          | not_approved           |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
# AtsCreateOfferRequestDtoValue

The status of the offer.

## Example Usage

```typescript
import { AtsCreateOfferRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateOfferRequestDtoValue = AtsCreateOfferRequestDtoValue.Pending;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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
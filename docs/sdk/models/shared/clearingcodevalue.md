# ClearingCodeValue

The type of clearing code

## Example Usage

```typescript
import { ClearingCodeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ClearingCodeValue = ClearingCodeValue.SortCode;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `SortCode`                 | sort_code                  |
| `BuildingSocietyReference` | building_society_reference |
| `AbaRouting`               | aba_routing                |
| `ChipsParticipantId`       | chips_participant_id       |
| `TransitNumber`            | transit_number             |
| `InstitutionNumber`        | institution_number         |
| `BsbCode`                  | bsb_code                   |
| `IfscCode`                 | ifsc_code                  |
| `MicrCode`                 | micr_code                  |
| `Clabe`                    | clabe                      |
| `CnapsCode`                | cnaps_code                 |
| `ChBankClearingCode`       | ch_bank_clearing_code      |
| `ChSicCode`                | ch_sic_code                |
| `ZenginCode`               | zengin_code                |
| `NzClearingCode`           | nz_clearing_code           |
| `HkBankCode`               | hk_bank_code               |
| `Blz`                      | blz                        |
| `AtBankleitzahl`           | at_bankleitzahl            |
| `Nuban`                    | nuban                      |
| `SeBankgiroCode`           | se_bankgiro_code           |
| `UnmappedValue`            | unmapped_value             |
| -                          | `Unrecognized<string>`     |
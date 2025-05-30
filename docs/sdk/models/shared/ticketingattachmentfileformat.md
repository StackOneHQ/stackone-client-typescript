# TicketingAttachmentFileFormat

The type of the file

## Example Usage

```typescript
import { TicketingAttachmentFileFormat, TicketingAttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingAttachmentFileFormat = {
  sourceValue: "application/pdf",
  value: TicketingAttachmentValue.Pdf,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceValue`                                                                             | *shared.TicketingAttachmentSourceValue*                                                   | :heavy_minus_sign:                                                                        | N/A                                                                                       | application/pdf                                                                           |
| `value`                                                                                   | [shared.TicketingAttachmentValue](../../../sdk/models/shared/ticketingattachmentvalue.md) | :heavy_minus_sign:                                                                        | The file format of the file, expressed as a file extension                                | pdf                                                                                       |
# TicketingAttachmentResultFileFormat

The type of the file

## Example Usage

```typescript
import { TicketingAttachmentResultFileFormat, TicketingAttachmentResultValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingAttachmentResultFileFormat = {
  sourceValue: "application/pdf",
  value: TicketingAttachmentResultValue.Pdf,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                         | *shared.TicketingAttachmentResultSourceValue*                                                         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | application/pdf                                                                                       |
| `value`                                                                                               | [shared.TicketingAttachmentResultValue](../../../sdk/models/shared/ticketingattachmentresultvalue.md) | :heavy_minus_sign:                                                                                    | The file format of the file, expressed as a file extension                                            | pdf                                                                                                   |
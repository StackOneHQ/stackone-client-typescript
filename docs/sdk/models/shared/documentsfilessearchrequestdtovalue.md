# DocumentsFilesSearchRequestDtoValue

The operation type of the query

## Example Usage

```typescript
import { DocumentsFilesSearchRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DocumentsFilesSearchRequestDtoValue =
  DocumentsFilesSearchRequestDtoValue.Contains;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Contains`             | contains               |
| `Equals`               | equals                 |
| `NotEquals`            | not_equals             |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
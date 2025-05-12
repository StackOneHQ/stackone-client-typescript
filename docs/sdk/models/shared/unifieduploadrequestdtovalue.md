# UnifiedUploadRequestDtoValue

Whether the file is confidential or not

## Example Usage

```typescript
import { UnifiedUploadRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedUploadRequestDtoValue = UnifiedUploadRequestDtoValue.True;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `True`                 | true                   |
| `False`                | false                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
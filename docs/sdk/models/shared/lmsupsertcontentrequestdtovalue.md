# LmsUpsertContentRequestDtoValue

## Example Usage

```typescript
import { LmsUpsertContentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsUpsertContentRequestDtoValue =
  LmsUpsertContentRequestDtoValue.Document;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Video`                | video                  |
| `Quiz`                 | quiz                   |
| `Document`             | document               |
| `Audio`                | audio                  |
| `Article`              | article                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |
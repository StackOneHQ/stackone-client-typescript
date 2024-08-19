# CourseValue

## Example Usage

```typescript
import { CourseValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CourseValue = CourseValue.Video;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Video`                | video                  |
| `Quiz`                 | quiz                   |
| `Document`             | document               |
| -                      | `Unrecognized<string>` |
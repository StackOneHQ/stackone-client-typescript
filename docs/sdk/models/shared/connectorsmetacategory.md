# ConnectorsMetaCategory

The provider service category

## Example Usage

```typescript
import { ConnectorsMetaCategory } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConnectorsMetaCategory = ConnectorsMetaCategory.Hris;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Ats`                  | ats                    |
| `Hris`                 | hris                   |
| `HrisLegacy`           | hris-legacy            |
| `Crm`                  | crm                    |
| `Iam`                  | iam                    |
| `Marketing`            | marketing              |
| `Lms`                  | lms                    |
| `Stackone`             | stackone               |
| `Documents`            | documents              |
| -                      | `Unrecognized<string>` |
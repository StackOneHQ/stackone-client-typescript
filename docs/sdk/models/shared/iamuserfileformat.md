# IamUserFileFormat

The file format of the file

## Example Usage

```typescript
import { IamUserFileFormat, IamUserSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamUserFileFormat = {
    sourceValue: "abc",
    value: IamUserSchemasValue.Pdf,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `sourceValue`                                                                   | *shared.IamUserSchemasSourceValue*                                              | :heavy_minus_sign:                                                              | N/A                                                                             | abc                                                                             |
| `value`                                                                         | [shared.IamUserSchemasValue](../../../sdk/models/shared/iamuserschemasvalue.md) | :heavy_minus_sign:                                                              | The file format of the file, expressed as a file extension                      | pdf                                                                             |
# CustomMappingError

## Example Usage

```typescript
import { CustomMappingError } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CustomMappingError = {
  id: "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  message: "Invalid value",
  targetField: "first_name",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_minus_sign:                        | The custom mapping identifier             | adbf752f-6457-4ddd-89b3-98ae2252b83b      |
| `message`                                 | *string*                                  | :heavy_minus_sign:                        | The error message                         | Invalid value                             |
| `targetField`                             | *string*                                  | :heavy_minus_sign:                        | The target field where the error occurred | first_name                                |
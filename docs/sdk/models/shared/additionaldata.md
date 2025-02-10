# AdditionalData

## Example Usage

```typescript
import { AdditionalData } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AdditionalData = {
  id: "learning_outcomes",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  value: "This is additional data",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The name of the additional data field. Speak to your Solutions Engineer to understand the id for the specific use case | learning_outcomes                                                                                                      |
| `remoteId`                                                                                                             | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Provider's unique identifier                                                                                           | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                                   |
| `value`                                                                                                                | *shared.Value*                                                                                                         | :heavy_minus_sign:                                                                                                     | The value of the additional data                                                                                       | This is additional data                                                                                                |
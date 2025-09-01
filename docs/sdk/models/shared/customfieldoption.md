# CustomFieldOption

## Example Usage

```typescript
import { CustomFieldOption } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CustomFieldOption = {
  id: "option_123",
  value: "Not Started",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The unique identifier for the option to be used when updating the custom field | option_123                                                                     |
| `value`                                                                        | *shared.CustomFieldOptionValue*                                                | :heavy_check_mark:                                                             | The human readable value of the option                                         | Not Started                                                                    |
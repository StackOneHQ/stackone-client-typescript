# ATSLocation

## Example Usage

```typescript
import { ATSLocation } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ATSLocation = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | Unique identifier                                                                            | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                         |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `remoteId`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | Provider's unique identifier                                                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                         |
| `unifiedCustomFields`                                                                        | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | Custom Unified Fields configured in your StackOne project                                    | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
# Company

## Example Usage

```typescript
import { Company } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Company = {
  createdAt: new Date("2023-02-23T00:00:00.000Z"),
  displayName: "StackOne",
  fullName: "American Express Company",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "StackOne Technologies PLC",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
  updatedAt: new Date("2024-02-23T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created_at date                                                                           | 2023-02-23T00:00:00.000Z                                                                      |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name of the company                                                               | StackOne                                                                                      |
| `fullName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The full name of the company                                                                  | American Express Company                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the company                                                                       | StackOne Technologies PLC                                                                     |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `unifiedCustomFields`                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom Unified Fields configured in your StackOne project                                     | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>} |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The updated_at date                                                                           | 2024-02-23T00:00:00.000Z                                                                      |
# HRISBenefit

## Example Usage

```typescript
import { HRISBenefit } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISBenefit = {
    createdAt: new Date("2021-01-01T00:00:00Z"),
    description: "Health insurance for employees",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Health Insurance",
    provider: "Aetna",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    updatedAt: new Date("2021-01-01T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `benefitType`                                                                                 | [shared.BenefitType](../../../sdk/models/shared/benefittype.md)                               | :heavy_minus_sign:                                                                            | The type of the benefit                                                                       |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the benefit was created                                                     | 2021-01-01T00:00:00Z                                                                          |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the benefit                                                                | Health insurance for employees                                                                |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the benefit                                                                       | Health Insurance                                                                              |
| `provider`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The provider of the benefit                                                                   | Aetna                                                                                         |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the benefit was last updated                                                | 2021-01-01T00:00:00Z                                                                          |
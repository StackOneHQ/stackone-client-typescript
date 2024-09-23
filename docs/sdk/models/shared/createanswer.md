# CreateAnswer

## Example Usage

```typescript
import { CreateAnswer, CreateAnswerValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateAnswer = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {
    sourceValue: {},
    value: CreateAnswerValue.ShortText,
  },
  values: [
    "Yes",
    "No Travel",
    "It sounds pretty cool.",
    "Excel",
    "Power Point",
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier                                                         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                      |
| `type`                                                                    | [shared.CreateAnswerType](../../../sdk/models/shared/createanswertype.md) | :heavy_minus_sign:                                                        | Type of the answer                                                        |                                                                           |
| `values`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Values of the answer                                                      | [<br/>"Yes",<br/>"No Travel",<br/>"It sounds pretty cool.",<br/>"Excel",<br/>"Power Point"<br/>] |
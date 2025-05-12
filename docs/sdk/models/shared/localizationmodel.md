# LocalizationModel

## Example Usage

```typescript
import { LocalizationModel, LocalizationModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LocalizationModel = {
  description: "This video acts as learning content for software engineers.",
  language: {
    value: LocalizationModelValue.EnGB,
  },
  tags: [
    "Sales Techniques",
    "Customer Service",
  ],
  title: "Software Engineer Lv 1",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `description`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The description of the content                                                              | This video acts as learning content for software engineers.                                 |
| `language`                                                                                  | [shared.LocalizationModelLanguage](../../../sdk/models/shared/localizationmodellanguage.md) | :heavy_minus_sign:                                                                          | The language associated with the localization details                                       |                                                                                             |
| `tags`                                                                                      | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | The tags associated with the localization details                                           | [<br/>"Sales Techniques",<br/>"Customer Service"<br/>]                                      |
| `title`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | The title of the content                                                                    | Software Engineer Lv 1                                                                      |
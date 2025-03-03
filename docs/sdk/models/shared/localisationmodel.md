# LocalisationModel

## Example Usage

```typescript
import { LocalisationModel, LocalisationModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LocalisationModel = {
  description: "This video acts as learning content for software engineers.",
  language: {
    value: LocalisationModelValue.EnGB,
  },
  title: "Software Engineer Lv 1",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `description`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The description of the content                                                              | This video acts as learning content for software engineers.                                 |
| `language`                                                                                  | [shared.LocalisationModelLanguage](../../../sdk/models/shared/localisationmodellanguage.md) | :heavy_minus_sign:                                                                          | The language associated with this localisation details                                      |                                                                                             |
| `title`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | The title of the content                                                                    | Software Engineer Lv 1                                                                      |
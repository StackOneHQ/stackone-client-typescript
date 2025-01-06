# CreateSkillsApiModel

## Example Usage

```typescript
import { CreateSkillsApiModel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateSkillsApiModel = {
  id: "16873-IT345",
  name: "Information-Technology",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | The ID associated with this skill                                                           | 16873-IT345                                                                                 |
| `level`                                                                                     | [shared.CreateSkillsApiModelLevel](../../../sdk/models/shared/createskillsapimodellevel.md) | :heavy_minus_sign:                                                                          | The hierarchal level of the skill                                                           |                                                                                             |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | The name associated with this skill                                                         | Information-Technology                                                                      |
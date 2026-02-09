# Config

Configuration guide

## Example Usage

```typescript
import { Config } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Config = {
  sections: [
    {
      content: "<value>",
      title: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sections`                                                                  | [shared.GuideSectionMeta](../../../sdk/models/shared/guidesectionmeta.md)[] | :heavy_check_mark:                                                          | The guide sections                                                          |
| `warning`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | Warning text for the guide                                                  |
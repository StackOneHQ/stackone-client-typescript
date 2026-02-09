# Setup

Account linking guide

## Example Usage

```typescript
import { Setup } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Setup = {
  sections: [],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sections`                                                                  | [shared.GuideSectionMeta](../../../sdk/models/shared/guidesectionmeta.md)[] | :heavy_check_mark:                                                          | The guide sections                                                          |
| `warning`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | Warning text for the guide                                                  |
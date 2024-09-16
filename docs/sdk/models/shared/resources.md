# Resources

Resources for this provider, such as image assets

## Example Usage

```typescript
import { Resources } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Resources = {
  images: {
    logoUrl: "https://app.stackone.com/assets/logos/hibob.png",
    originalLogoHorizontalUrl:
      "https://app.stackone.com/assets/logos/original/hibob_horizontal.png",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `images`                                              | [shared.Images](../../../sdk/models/shared/images.md) | :heavy_minus_sign:                                    | Image assets for this provider                        |
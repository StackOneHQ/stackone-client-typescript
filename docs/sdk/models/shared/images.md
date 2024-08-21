# Images

Image assets for this provider

## Example Usage

```typescript
import { Images } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Images = {
    logoUrl: "https://app.stackone.com/assets/logos/hibob.png",
    originalLogoHorizontalUrl: "https://app.stackone.com/assets/logos/source/hibob.png",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `logoUrl`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | URL of the square logo designed and used by StackOne for this provider         | https://app.stackone.com/assets/logos/hibob.png                                |
| `originalLogoHorizontalUrl`                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | URL of the original provider logo (with logo and/or name aligned horizontally) | https://app.stackone.com/assets/logos/source/hibob.png                         |
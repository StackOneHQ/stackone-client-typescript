# SocialLink

## Example Usage

```typescript
import { SocialLink } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: SocialLink = {
  type: "linkedin",
  url: "https://www.linkedin.com/in/romainsestier/",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `type`                                     | *string*                                   | :heavy_minus_sign:                         | Type of the social link                    | linkedin                                   |
| `url`                                      | *string*                                   | :heavy_minus_sign:                         | URL of the social link                     | https://www.linkedin.com/in/romainsestier/ |
# Support

The support information for this authentication method, including configuration and account linking guides

## Example Usage

```typescript
import { Support } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Support = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `description`                                         | *string*                                              | :heavy_minus_sign:                                    | Support description                                   |
| `guides`                                              | [shared.Guides](../../../sdk/models/shared/guides.md) | :heavy_minus_sign:                                    | Authentication guides for this authentication type    |
| `link`                                                | *string*                                              | :heavy_minus_sign:                                    | Link to support documentation                         |
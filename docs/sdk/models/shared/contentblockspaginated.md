# ContentBlocksPaginated

## Example Usage

```typescript
import { ContentBlockSchemasValue, ContentBlocksPaginated, ContentBlockValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentBlocksPaginated = {
  data: [
    {
      createdAt: new Date("2021-01-01T00:00:00.000Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      status: {
        sourceValue: "active",
        value: ContentBlockValue.Live,
      },
      type: {
        sourceValue: "text",
        value: ContentBlockSchemasValue.Image,
      },
      updatedAt: new Date("2021-01-01T00:00:00.000Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                  | [shared.ContentBlock](../../../sdk/models/shared/contentblock.md)[]                                                     | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `next`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| ~~`nextPage`~~                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `raw`                                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
# ContentBlock

## Example Usage

```typescript
import { ContentBlock, ContentBlockSchemasValue, ContentBlockValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentBlock = {
  createdAt: new Date("2021-01-01T00:00:00.000Z"),
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  status: {
    sourceValue: "active",
    value: ContentBlockValue.Live,
  },
  type: {
    sourceValue: "text",
    value: ContentBlockSchemasValue.CodeSnippet,
  },
  updatedAt: new Date("2021-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `content`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of creation                                                                              | 2021-01-01T00:00:00.000Z                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `status`                                                                                      | [shared.ContentBlockStatus](../../../sdk/models/shared/contentblockstatus.md)                 | :heavy_minus_sign:                                                                            | Stackone enum identifying the status of content block.                                        |                                                                                               |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `type`                                                                                        | [shared.ContentBlockType](../../../sdk/models/shared/contentblocktype.md)                     | :heavy_minus_sign:                                                                            | Stackone enum identifying the type of content block.                                          |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date of last update                                                                           | 2021-01-01T00:00:00.000Z                                                                      |
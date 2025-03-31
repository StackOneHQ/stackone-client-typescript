# LmsListSkillsResponse

## Example Usage

```typescript
import { LmsListSkillsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { SkillsSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsListSkillsResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  skillsPaginated: {
    data: [
      {
        active: true,
        id: "16873-IT345",
        language: {
          value: SkillsSchemasValue.EnGB,
        },
        name: "Information-Technology",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
    ],
  },
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `skillsPaginated`                                                       | [shared.SkillsPaginated](../../../sdk/models/shared/skillspaginated.md) | :heavy_minus_sign:                                                      | The list of skills was retrieved.                                       |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
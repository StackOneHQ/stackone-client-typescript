# LmsGetSkillResponse

## Example Usage

```typescript
import { LmsGetSkillResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsGetSkillResponse = {
  contentType: "<value>",
  skillResult: {
    data: {
      active: true,
      id: "16873-IT345",
      name: "Information-Technology",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  },
  statusCode: 860552,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `skillResult`                                                         | [shared.SkillResult](../../../sdk/models/shared/skillresult.md)       | :heavy_minus_sign:                                                    | The skill with the given identifier was retrieved.                    |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
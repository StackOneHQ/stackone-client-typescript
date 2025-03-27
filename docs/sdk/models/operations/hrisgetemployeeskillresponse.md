# HrisGetEmployeeSkillResponse

## Example Usage

```typescript
import { HrisGetEmployeeSkillResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { EntitySkillsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisGetEmployeeSkillResponse = {
  contentType: "<value>",
  entitySkillResult: {
    data: {
      active: true,
      id: "16873-IT345",
      language: {
        value: EntitySkillsValue.EnGB,
      },
      maximumProficiency: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Expert",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      minimumProficiency: {
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Expert",
        remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      },
      name: "Information-Technology",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 508,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `entitySkillResult`                                                         | [shared.EntitySkillResult](../../../sdk/models/shared/entityskillresult.md) | :heavy_minus_sign:                                                          | The skill related to the employee with the given identifiers was retrieved. |
| `headers`                                                                   | Record<string, *string*[]>                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
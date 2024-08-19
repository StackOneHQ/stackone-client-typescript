# LmsGetAssignmentResponse

## Example Usage

```typescript
import { LmsGetAssignmentResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsGetAssignmentResponse = {
    assignmentResult: {
        data: {
            courseId: "16873-ENG-1",
            createdAt: "2021-07-21T14:00:00.000Z",
            dueDate: "2021-07-21T14:00:00.000Z",
            externalId: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1-ASSIGNMENT",
            id: "123456",
            passthrough: {
                "0": "{",
                "1": '"',
                "2": "o",
                "3": "t",
                "4": "h",
                "5": "e",
                "6": "r",
                "7": "_",
                "8": "k",
                "9": "n",
                "10": "o",
                "11": "w",
                "12": "n",
                "13": "_",
                "14": "n",
                "15": "a",
                "16": "m",
                "17": "e",
                "18": "s",
                "19": '"',
                "20": ":",
                "21": " ",
                "22": '"',
                "23": "J",
                "24": "o",
                "25": "h",
                "26": "n",
                "27": " ",
                "28": "D",
                "29": "o",
                "30": "e",
                "31": '"',
                "32": "}",
            },
            remoteCourseId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
            remoteExternalId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
            remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
            updatedAt: "2021-07-21T14:00:00.000Z",
        },
    },
    contentType: "<value>",
    statusCode: 368725,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `assignmentResult`                                                        | [shared.AssignmentResult](../../../sdk/models/shared/assignmentresult.md) | :heavy_minus_sign:                                                        | The assignments with the given identifier was retrieved.                  |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |
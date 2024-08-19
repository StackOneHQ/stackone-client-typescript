# HrisCreateTimeOffRequestDto

## Example Usage

```typescript
import { HrisCreateTimeOffRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateTimeOffRequestDto = {
    approverId: "1687-4",
    employeeId: "1687-3",
    endDate: new Date("2021-01-01T01:01:01.000Z"),
    endHalfDay: true,
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
    startDate: new Date("2021-01-01T01:01:01.000Z"),
    startHalfDay: true,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `approverId`                                                                                                | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The approver ID                                                                                             | 1687-4                                                                                                      |
| `employeeId`                                                                                                | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The employee ID                                                                                             | 1687-3                                                                                                      |
| `endDate`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | The end date of the time off request                                                                        | 2021-01-01T01:01:01.000Z                                                                                    |
| `endHalfDay`                                                                                                | *shared.EndHalfDay*                                                                                         | :heavy_minus_sign:                                                                                          | True if the end of the time off request ends half way through the day                                       | true                                                                                                        |
| `passthrough`                                                                                               | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | Value to pass through to the provider                                                                       | {"other_known_names": "John Doe"}                                                                           |
| `startDate`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | The start date of the time off request                                                                      | 2021-01-01T01:01:01.000Z                                                                                    |
| `startHalfDay`                                                                                              | *shared.StartHalfDay*                                                                                       | :heavy_minus_sign:                                                                                          | True if the start of the time off request begins half way through the day                                   | true                                                                                                        |
| `status`                                                                                                    | [shared.HrisCreateTimeOffRequestDtoStatus](../../../sdk/models/shared/hriscreatetimeoffrequestdtostatus.md) | :heavy_minus_sign:                                                                                          | The status of the time off request                                                                          |                                                                                                             |
| `type`                                                                                                      | [shared.HrisCreateTimeOffRequestDtoType](../../../sdk/models/shared/hriscreatetimeoffrequestdtotype.md)     | :heavy_minus_sign:                                                                                          | The type of the time off request                                                                            |                                                                                                             |
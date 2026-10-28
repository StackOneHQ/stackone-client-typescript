# LogsDimensions

## Example Usage

```typescript
import { LogsDimensions } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LogsDimensions = {
  data: {
    "connector_key": [
      {
        count: 800,
        label: "Workday",
        value: "workday",
      },
    ],
    "success": [
      {
        count: 1500,
        value: "true",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                               | Record<string, [shared.LogsDimensionValue](../../../sdk/models/shared/logsdimensionvalue.md)[]>                                      | :heavy_check_mark:                                                                                                                   | The distinct values for each requested dimension, keyed by dimension name                                                            | {<br/>"connector_key": [<br/>{<br/>"value": "workday",<br/>"count": 800,<br/>"label": "Workday"<br/>}<br/>],<br/>"success": [<br/>{<br/>"value": "true",<br/>"count": 1500<br/>}<br/>]<br/>} |
# RawResponse

## Example Usage

```typescript
import { RawResponse } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: RawResponse = {
  method: "<value>",
  url: "https://long-term-lay.biz",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `body`             | *shared.Body*      | :heavy_minus_sign: | N/A                |
| `method`           | *string*           | :heavy_check_mark: | N/A                |
| `response`         | *shared.ResponseT* | :heavy_minus_sign: | N/A                |
| `url`              | *string*           | :heavy_check_mark: | N/A                |
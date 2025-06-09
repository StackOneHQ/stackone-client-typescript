# LmsBatchUpsertCourseRequestDto

## Example Usage

```typescript
import { LmsBatchUpsertCourseRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LmsBatchUpsertCourseRequestDto = {
  items: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `items`                                                                                       | [shared.LmsUpsertCourseRequestDto](../../../sdk/models/shared/lmsupsertcourserequestdto.md)[] | :heavy_check_mark:                                                                            | The batch of items to upsert                                                                  |
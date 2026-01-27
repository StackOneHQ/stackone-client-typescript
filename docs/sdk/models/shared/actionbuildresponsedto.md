# ActionBuildResponseDto

## Example Usage

```typescript
import { ActionBuildResponseDto, ActionBuildResponseDtoStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionBuildResponseDto = {
  actionsIndexed: 1895.56,
  status: ActionBuildResponseDtoStatus.Error,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `actionsIndexed`                                                                                  | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of actions indexed                                                                         |
| `connectorFilter`                                                                                 | *string*                                                                                          | :heavy_minus_sign:                                                                                | Connector filter applied                                                                          |
| `error`                                                                                           | *string*                                                                                          | :heavy_minus_sign:                                                                                | Error message if status is error                                                                  |
| `status`                                                                                          | [shared.ActionBuildResponseDtoStatus](../../../sdk/models/shared/actionbuildresponsedtostatus.md) | :heavy_check_mark:                                                                                | Build status                                                                                      |
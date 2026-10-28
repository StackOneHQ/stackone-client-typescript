# ActionBuildResponseDto

## Example Usage

```typescript
import { ActionBuildResponseDto, ActionBuildResponseDtoStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionBuildResponseDto = {
  connectorsDispatched: [
    "slack",
    "hubspot",
  ],
  status: ActionBuildResponseDtoStatus.Accepted,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `actionsIndexed`                                                                                                | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Number of actions indexed (only for synchronous builds)                                                         |                                                                                                                 |
| `connectorFilter`                                                                                               | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Connector filter applied                                                                                        |                                                                                                                 |
| `connectorsDispatched`                                                                                          | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | Connector keys the build fanned out to, when no `connector_key` was given. Absent for a single-connector build. | [<br/>"slack",<br/>"hubspot"<br/>]                                                                              |
| `error`                                                                                                         | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Error message if status is error                                                                                |                                                                                                                 |
| `message`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Status message                                                                                                  |                                                                                                                 |
| `status`                                                                                                        | [shared.ActionBuildResponseDtoStatus](../../../sdk/models/shared/actionbuildresponsedtostatus.md)               | :heavy_check_mark:                                                                                              | Build status                                                                                                    | accepted                                                                                                        |
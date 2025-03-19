# UpdateUserApiModel

## Example Usage

```typescript
import { UpdateUserApiModel, UpdateUserApiModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UpdateUserApiModel = {
  firstName: "Han",
  isBotUser: true,
  lastName: "Solo",
  name: "Han Solo",
  passthrough: {
    "other_known_names": "John Doe",
  },
  primaryEmailAddress: "han@stackone.com",
  status: {
    value: UpdateUserApiModelValue.Enabled,
  },
  username: "hansolo1977",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `firstName`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | Han                                                                                       |
| `isBotUser`                                                                               | *shared.UpdateUserApiModelIsBotUser*                                                      | :heavy_minus_sign:                                                                        | Indicates if the user is a bot or service user                                            | true                                                                                      |
| `lastName`                                                                                | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | Solo                                                                                      |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | User's name which (can be a full name or display name)                                    | Han Solo                                                                                  |
| `passthrough`                                                                             | Record<string, *any*>                                                                     | :heavy_minus_sign:                                                                        | Value to pass through to the provider                                                     | {<br/>"other_known_names": "John Doe"<br/>}                                               |
| `primaryEmailAddress`                                                                     | *string*                                                                                  | :heavy_minus_sign:                                                                        | Primary email address of the user. This is generally a work email address.                | han@stackone.com                                                                          |
| `status`                                                                                  | [shared.UpdateUserApiModelStatus](../../../sdk/models/shared/updateuserapimodelstatus.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `username`                                                                                | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | hansolo1977                                                                               |
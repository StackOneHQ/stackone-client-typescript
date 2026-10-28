# Scope

Optional scope describing where this role applies (e.g. group, organization, department).

## Example Usage

```typescript
import { Scope } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Scope = {
  resourceId: "group_abc123",
  resourceType: "group",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resourceId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | The id of the specific resource the role applies to. Omitted = all of type.      | group_abc123                                                                     |
| `resourceType`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | The kind of resource the role applies to (e.g. group, organization, department). | group                                                                            |
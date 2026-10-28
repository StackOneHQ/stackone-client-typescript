# IamResourceType

The resource type identifier. Falcon connectors emit a plain string from the connector-defined set returned by GET /unified/iam/resource_types (e.g. "file", "channel", "group"). Legacy V2 connectors emit the {value, source_value} envelope where value is from the IamResourceTypeEnum fixed set. Either shape validates.


## Supported Types

### `string`

```typescript
const value: string = "file";
```

### `shared.IamResourceTypeEnumSchemas`

```typescript
const value: shared.IamResourceTypeEnumSchemas = {
  value: Value.File,
};
```


# IamUserAvatar

The user's avatar data. This generally contains a URL within this property's 'contents' array. May be either a single File object or an array of File objects depending on the connector — both forms are supported.


## Supported Types

### `shared.FileSchemas`

```typescript
const value: shared.FileSchemas = {
  category: {},
  categoryId: "6530",
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  fileFormat: null,
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "My Document",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteUrl: "https://example.com/file.pdf",
  updatedAt: new Date("2021-01-02T01:01:01.000Z"),
};
```

### `shared.FileT[]`

```typescript
const value: shared.FileT[] = [
  {
    category: {},
    categoryId: "6530",
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    fileFormat: {
      sourceValue: "application/pdf",
      value: FileValue.Pdf,
    },
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "My Document",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    remoteUrl: "https://example.com/file.pdf",
    updatedAt: new Date("2021-01-02T01:01:01.000Z"),
  },
];
```


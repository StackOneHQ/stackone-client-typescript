# ProxyResponseApiModelData

The response data from the provider. Can be an object, array, or primitive value.


## Supported Types

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "id": "123",
  "name": "John Doe",
  "email": "john.doe@example.com",
};
```

### `{ [k: string]: any }[]`

```typescript
const value: { [k: string]: any }[] = [
  {
    "id": "123",
    "name": "John Doe",
    "email": "john.doe@example.com",
  },
];
```

### `string`

```typescript
const value: string =
  "{\"id\":\"123\",\"name\":\"John Doe\",\"email\":\"john.doe@example.com\"}";
```

### `number`

```typescript
const value: number = [object Object];
```

### `boolean`

```typescript
const value: boolean = true;
```


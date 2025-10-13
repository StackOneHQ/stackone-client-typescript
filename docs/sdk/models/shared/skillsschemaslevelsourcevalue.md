# SkillsSchemasLevelSourceValue

For read operations: the original skill level from the provider. For write operations: fallback value used when value is omitted or "unmapped_value". You must ensure this matches the provider's format.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `number`

```typescript
const value: number = 1284.03;
```

### `boolean`

```typescript
const value: boolean = true;
```

### `shared.SkillsSchemasLevel4`

```typescript
const value: shared.SkillsSchemasLevel4 = {};
```

### `any[]`

```typescript
const value: any[] = [
  "<value 1>",
  "<value 2>",
  "<value 3>",
];
```


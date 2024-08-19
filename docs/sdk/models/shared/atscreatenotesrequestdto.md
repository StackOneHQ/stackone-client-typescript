# AtsCreateNotesRequestDto

## Example Usage

```typescript
import { AtsCreateNotesRequestDto, AtsCreateNotesRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateNotesRequestDto = {
    authorId: "1234567890",
    content: [
        {
            body: "This candidate seems like a good fit for the role",
        },
    ],
    passthrough: {
        "0": "{",
        "1": '"',
        "2": "o",
        "3": "t",
        "4": "h",
        "5": "e",
        "6": "r",
        "7": "_",
        "8": "k",
        "9": "n",
        "10": "o",
        "11": "w",
        "12": "n",
        "13": "_",
        "14": "n",
        "15": "a",
        "16": "m",
        "17": "e",
        "18": "s",
        "19": '"',
        "20": ":",
        "21": " ",
        "22": '"',
        "23": "J",
        "24": "o",
        "25": "h",
        "26": "n",
        "27": " ",
        "28": "D",
        "29": "o",
        "30": "e",
        "31": '"',
        "32": "}",
    },
    visibility: {
        sourceValue: "Public",
        value: AtsCreateNotesRequestDtoValue.Public,
    },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `authorId`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | Unique identifier of the author                                                   | 1234567890                                                                        |
| `content`                                                                         | [shared.NoteContentApiModel](../../../sdk/models/shared/notecontentapimodel.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `passthrough`                                                                     | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | Value to pass through to the provider                                             | {"other_known_names": "John Doe"}                                                 |
| `visibility`                                                                      | [shared.Visibility](../../../sdk/models/shared/visibility.md)                     | :heavy_minus_sign:                                                                | Visibility of the note                                                            | public                                                                            |
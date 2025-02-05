# Lms
(*lms*)

## Overview

### Available Operations

* [batchUpsertContent](#batchupsertcontent) - Batch Upsert Content
* [batchUpsertCourse](#batchupsertcourse) - Batch Upsert Course
* [createCollection](#createcollection) - Create Collection
* [createUserAssignment](#createuserassignment) - Create User Assignment
* [createUserCompletion](#createusercompletion) - Create User Completion
* [deleteUserCompletion](#deleteusercompletion) - Delete User Completion
* [getAssignment](#getassignment) - Get Assignment
* [getCategory](#getcategory) - Get Category
* [getCompletion](#getcompletion) - Get Completion
* [getContent](#getcontent) - Get Content
* [getCourse](#getcourse) - Get Course
* [getSkill](#getskill) - Get Skill
* [getUser](#getuser) - Get User
* [getUserAssignment](#getuserassignment) - Get User Assignment
* [getUserCompletion](#getusercompletion) - Get User Completion
* [listAssignments](#listassignments) - List Assignments
* [listCategories](#listcategories) - List Categories
* [listCompletions](#listcompletions) - List Completions
* [listContent](#listcontent) - List Content
* [listCourses](#listcourses) - List Courses
* [listSkills](#listskills) - List Skills
* [listUserAssignments](#listuserassignments) - List User Assignments
* [listUserCompletions](#listusercompletions) - List User Completions
* [listUsers](#listusers) - List Users
* [updateCollection](#updatecollection) - Update Collection
* [upsertContent](#upsertcontent) - Upsert Content
* [upsertCourse](#upsertcourse) - Upsert Course

## batchUpsertContent

Batch Upsert Content

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { CreateCategoriesApiModelSchemasValue, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.batchUpsertContent({
    lmsBatchUpsertContentRequestDto: {
      items: [
        {
          active: true,
          categories: [
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
          ],
          contentUrl: "https://www.youtube.com/watch?v=16873",
          coverUrl: "https://www.googledrive.com/?v=16873",
          description: "This video acts as learning content for software engineers.",
          duration: "P3Y6M4DT12H30M5S",
          externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
          languages: [
            {
              value: LanguageEnumValue.EnGB,
            },
          ],
          order: 1,
          shortDescription: "This course is a valuable resource and acts as learning content for...",
          skills: [
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
          ],
          title: "Software Engineer Lv 1",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          active: true,
          categories: [
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
          ],
          contentUrl: "https://www.youtube.com/watch?v=16873",
          coverUrl: "https://www.googledrive.com/?v=16873",
          description: "This video acts as learning content for software engineers.",
          duration: "P3Y6M4DT12H30M5S",
          externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
          languages: [
            {
              value: LanguageEnumValue.EnGB,
            },
            {
              value: LanguageEnumValue.EnGB,
            },
            {
              value: LanguageEnumValue.EnGB,
            },
          ],
          order: 1,
          shortDescription: "This course is a valuable resource and acts as learning content for...",
          skills: [
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
          ],
          title: "Software Engineer Lv 1",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
    },
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsBatchUpsertContent } from "@stackone/stackone-client-ts/funcs/lmsBatchUpsertContent.js";
import { CreateCategoriesApiModelSchemasValue, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsBatchUpsertContent(stackOne, {
    lmsBatchUpsertContentRequestDto: {
      items: [
        {
          active: true,
          categories: [
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
          ],
          contentUrl: "https://www.youtube.com/watch?v=16873",
          coverUrl: "https://www.googledrive.com/?v=16873",
          description: "This video acts as learning content for software engineers.",
          duration: "P3Y6M4DT12H30M5S",
          externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
          languages: [
            {
              value: LanguageEnumValue.EnGB,
            },
          ],
          order: 1,
          shortDescription: "This course is a valuable resource and acts as learning content for...",
          skills: [
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
          ],
          title: "Software Engineer Lv 1",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          active: true,
          categories: [
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
          ],
          contentUrl: "https://www.youtube.com/watch?v=16873",
          coverUrl: "https://www.googledrive.com/?v=16873",
          description: "This video acts as learning content for software engineers.",
          duration: "P3Y6M4DT12H30M5S",
          externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
          languages: [
            {
              value: LanguageEnumValue.EnGB,
            },
            {
              value: LanguageEnumValue.EnGB,
            },
            {
              value: LanguageEnumValue.EnGB,
            },
          ],
          order: 1,
          shortDescription: "This course is a valuable resource and acts as learning content for...",
          skills: [
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
          ],
          title: "Software Engineer Lv 1",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
    },
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsBatchUpsertContentRequest](../../sdk/models/operations/lmsbatchupsertcontentrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsBatchUpsertContentResponse](../../sdk/models/operations/lmsbatchupsertcontentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## batchUpsertCourse

Batch Upsert Course

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { CreateCategoriesApiModelSchemasValue, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.batchUpsertCourse({
    lmsBatchUpsertCourseRequestDto: {
      items: [
        {
          active: true,
          categories: [
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
          ],
          content: [
            {
              contentUrl: "https://www.youtube.com/watch?v=16873",
              description: "This video acts as learning content for software engineers.",
              order: 1,
              title: "Software Engineer Lv 1",
            },
            {
              contentUrl: "https://www.youtube.com/watch?v=16873",
              description: "This video acts as learning content for software engineers.",
              order: 1,
              title: "Software Engineer Lv 1",
            },
          ],
          coverUrl: "https://www.googledrive.com/?v=16873",
          description: "This course acts as learning content for software engineers.",
          duration: "P3Y6M4DT12H30M5S",
          externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
          languages: [
            {
              value: LanguageEnumValue.EnGB,
            },
            {
              value: LanguageEnumValue.EnGB,
            },
            {
              value: LanguageEnumValue.EnGB,
            },
          ],
          skills: [
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
          ],
          title: "Software Engineer Lv 1",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
          url: "https://www.linkedinlearning.com/?v=16873",
        },
        {
          active: true,
          categories: [
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
          ],
          content: [
            {
              contentUrl: "https://www.youtube.com/watch?v=16873",
              description: "This video acts as learning content for software engineers.",
              order: 1,
              title: "Software Engineer Lv 1",
            },
            {
              contentUrl: "https://www.youtube.com/watch?v=16873",
              description: "This video acts as learning content for software engineers.",
              order: 1,
              title: "Software Engineer Lv 1",
            },
            {
              contentUrl: "https://www.youtube.com/watch?v=16873",
              description: "This video acts as learning content for software engineers.",
              order: 1,
              title: "Software Engineer Lv 1",
            },
          ],
          coverUrl: "https://www.googledrive.com/?v=16873",
          description: "This course acts as learning content for software engineers.",
          duration: "P3Y6M4DT12H30M5S",
          externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
          languages: [
            {
              value: LanguageEnumValue.EnGB,
            },
            {
              value: LanguageEnumValue.EnGB,
            },
          ],
          skills: [
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
          ],
          title: "Software Engineer Lv 1",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
          url: "https://www.linkedinlearning.com/?v=16873",
        },
      ],
    },
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsBatchUpsertCourse } from "@stackone/stackone-client-ts/funcs/lmsBatchUpsertCourse.js";
import { CreateCategoriesApiModelSchemasValue, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsBatchUpsertCourse(stackOne, {
    lmsBatchUpsertCourseRequestDto: {
      items: [
        {
          active: true,
          categories: [
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
          ],
          content: [
            {
              contentUrl: "https://www.youtube.com/watch?v=16873",
              description: "This video acts as learning content for software engineers.",
              order: 1,
              title: "Software Engineer Lv 1",
            },
            {
              contentUrl: "https://www.youtube.com/watch?v=16873",
              description: "This video acts as learning content for software engineers.",
              order: 1,
              title: "Software Engineer Lv 1",
            },
          ],
          coverUrl: "https://www.googledrive.com/?v=16873",
          description: "This course acts as learning content for software engineers.",
          duration: "P3Y6M4DT12H30M5S",
          externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
          languages: [
            {
              value: LanguageEnumValue.EnGB,
            },
            {
              value: LanguageEnumValue.EnGB,
            },
            {
              value: LanguageEnumValue.EnGB,
            },
          ],
          skills: [
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
          ],
          title: "Software Engineer Lv 1",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
          url: "https://www.linkedinlearning.com/?v=16873",
        },
        {
          active: true,
          categories: [
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
            {
              id: "16873-IT345",
              language: {
                value: CreateCategoriesApiModelSchemasValue.EnGB,
              },
              name: "Information-Technology",
              unifiedCustomFields: {
                "my_project_custom_field_1": "REF-1236",
                "my_project_custom_field_2": "some other value",
              },
            },
          ],
          content: [
            {
              contentUrl: "https://www.youtube.com/watch?v=16873",
              description: "This video acts as learning content for software engineers.",
              order: 1,
              title: "Software Engineer Lv 1",
            },
            {
              contentUrl: "https://www.youtube.com/watch?v=16873",
              description: "This video acts as learning content for software engineers.",
              order: 1,
              title: "Software Engineer Lv 1",
            },
            {
              contentUrl: "https://www.youtube.com/watch?v=16873",
              description: "This video acts as learning content for software engineers.",
              order: 1,
              title: "Software Engineer Lv 1",
            },
          ],
          coverUrl: "https://www.googledrive.com/?v=16873",
          description: "This course acts as learning content for software engineers.",
          duration: "P3Y6M4DT12H30M5S",
          externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
          languages: [
            {
              value: LanguageEnumValue.EnGB,
            },
            {
              value: LanguageEnumValue.EnGB,
            },
          ],
          skills: [
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
            {
              id: "16873-IT345",
              name: "Information-Technology",
            },
          ],
          title: "Software Engineer Lv 1",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
          url: "https://www.linkedinlearning.com/?v=16873",
        },
      ],
    },
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsBatchUpsertCourseRequest](../../sdk/models/operations/lmsbatchupsertcourserequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsBatchUpsertCourseResponse](../../sdk/models/operations/lmsbatchupsertcourseresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCollection

Create Collection

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { CreateCategoriesApiModelSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.createCollection({
    lmsCreateCollectionRequestDto: {
      categories: [
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description: "This collection acts as learning pathway for software engineers.",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-collection-1",
      learningObjectIds: [
        "16873-SOFTWARE-ENG-COURSE",
        "16874-SOFTWARE-ENG-COURSE",
      ],
      remoteLearningObjectIds: [
        "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
      ],
      skills: [
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
      ],
      title: "Software Engineer Lv 1 Collection",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsCreateCollection } from "@stackone/stackone-client-ts/funcs/lmsCreateCollection.js";
import { CreateCategoriesApiModelSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsCreateCollection(stackOne, {
    lmsCreateCollectionRequestDto: {
      categories: [
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description: "This collection acts as learning pathway for software engineers.",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-collection-1",
      learningObjectIds: [
        "16873-SOFTWARE-ENG-COURSE",
        "16874-SOFTWARE-ENG-COURSE",
      ],
      remoteLearningObjectIds: [
        "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
      ],
      skills: [
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
      ],
      title: "Software Engineer Lv 1 Collection",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsCreateCollectionRequest](../../sdk/models/operations/lmscreatecollectionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsCreateCollectionResponse](../../sdk/models/operations/lmscreatecollectionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createUserAssignment

Create User Assignment

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { LmsCreateAssignmentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.createUserAssignment({
    lmsCreateAssignmentRequestDto: {
      createdAt: "2021-07-21T14:00:00.000Z",
      dueDate: "2021-07-21T14:00:00.000Z",
      externalReference: "e3gd34-23tr21-er234-345er56",
      learningObjectExternalReference: "learning-content-123",
      learningObjectId: "e3gd34-23tr21-er234-345er56",
      passthrough: {
        "other_known_names": "John Doe",
      },
      progress: 40,
      status: {
        value: LmsCreateAssignmentRequestDtoValue.Pending,
      },
    },
    id: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsCreateUserAssignment } from "@stackone/stackone-client-ts/funcs/lmsCreateUserAssignment.js";
import { LmsCreateAssignmentRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsCreateUserAssignment(stackOne, {
    lmsCreateAssignmentRequestDto: {
      createdAt: "2021-07-21T14:00:00.000Z",
      dueDate: "2021-07-21T14:00:00.000Z",
      externalReference: "e3gd34-23tr21-er234-345er56",
      learningObjectExternalReference: "learning-content-123",
      learningObjectId: "e3gd34-23tr21-er234-345er56",
      passthrough: {
        "other_known_names": "John Doe",
      },
      progress: 40,
      status: {
        value: LmsCreateAssignmentRequestDtoValue.Pending,
      },
    },
    id: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsCreateUserAssignmentRequest](../../sdk/models/operations/lmscreateuserassignmentrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsCreateUserAssignmentResponse](../../sdk/models/operations/lmscreateuserassignmentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createUserCompletion

Create User Completion

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.createUserCompletion({
    lmsCreateCompletionRequestDto: {
      completedAt: "2021-07-21T14:00:00.000Z",
      learningObjectExternalReference: "learning-content-123",
      learningObjectId: "e3gd34-23tr21-er234-345er56",
      passthrough: {
        "other_known_names": "John Doe",
      },
    },
    id: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsCreateUserCompletion } from "@stackone/stackone-client-ts/funcs/lmsCreateUserCompletion.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsCreateUserCompletion(stackOne, {
    lmsCreateCompletionRequestDto: {
      completedAt: "2021-07-21T14:00:00.000Z",
      learningObjectExternalReference: "learning-content-123",
      learningObjectId: "e3gd34-23tr21-er234-345er56",
      passthrough: {
        "other_known_names": "John Doe",
      },
    },
    id: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsCreateUserCompletionRequest](../../sdk/models/operations/lmscreateusercompletionrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsCreateUserCompletionResponse](../../sdk/models/operations/lmscreateusercompletionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteUserCompletion

Delete User Completion

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.deleteUserCompletion({
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsDeleteUserCompletion } from "@stackone/stackone-client-ts/funcs/lmsDeleteUserCompletion.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsDeleteUserCompletion(stackOne, {
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsDeleteUserCompletionRequest](../../sdk/models/operations/lmsdeleteusercompletionrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsDeleteUserCompletionResponse](../../sdk/models/operations/lmsdeleteusercompletionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAssignment

Get Assignment

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.getAssignment({
    id: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsGetAssignment } from "@stackone/stackone-client-ts/funcs/lmsGetAssignment.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsGetAssignment(stackOne, {
    id: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsGetAssignmentRequest](../../sdk/models/operations/lmsgetassignmentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsGetAssignmentResponse](../../sdk/models/operations/lmsgetassignmentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCategory

Get Category

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.getCategory({
    fields: "id,remote_id,name,active,level,language",
    id: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsGetCategory } from "@stackone/stackone-client-ts/funcs/lmsGetCategory.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsGetCategory(stackOne, {
    fields: "id,remote_id,name,active,level,language",
    id: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsGetCategoryRequest](../../sdk/models/operations/lmsgetcategoryrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsGetCategoryResponse](../../sdk/models/operations/lmsgetcategoryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCompletion

Get Completion

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.getCompletion({
    id: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsGetCompletion } from "@stackone/stackone-client-ts/funcs/lmsGetCompletion.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsGetCompletion(stackOne, {
    id: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsGetCompletionRequest](../../sdk/models/operations/lmsgetcompletionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsGetCompletionResponse](../../sdk/models/operations/lmsgetcompletionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getContent

Get Content

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.getContent({
    fields: "id,remote_id,external_reference,course_ids,remote_course_ids,title,description,short_description,languages,content_url,content_type,cover_url,active,duration,order,categories,skills,updated_at,created_at,provider",
    id: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsGetContent } from "@stackone/stackone-client-ts/funcs/lmsGetContent.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsGetContent(stackOne, {
    fields: "id,remote_id,external_reference,course_ids,remote_course_ids,title,description,short_description,languages,content_url,content_type,cover_url,active,duration,order,categories,skills,updated_at,created_at,provider",
    id: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsGetContentRequest](../../sdk/models/operations/lmsgetcontentrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsGetContentResponse](../../sdk/models/operations/lmsgetcontentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCourse

Get Course

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.getCourse({
    fields: "id,remote_id,external_reference,content_ids,remote_content_ids,title,description,languages,cover_url,url,active,duration,categories,skills,updated_at,created_at,content,provider",
    id: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsGetCourse } from "@stackone/stackone-client-ts/funcs/lmsGetCourse.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsGetCourse(stackOne, {
    fields: "id,remote_id,external_reference,content_ids,remote_content_ids,title,description,languages,cover_url,url,active,duration,categories,skills,updated_at,created_at,content,provider",
    id: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsGetCourseRequest](../../sdk/models/operations/lmsgetcourserequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsGetCourseResponse](../../sdk/models/operations/lmsgetcourseresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getSkill

Get Skill

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.getSkill({
    fields: "id,remote_id,name,active,level",
    id: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsGetSkill } from "@stackone/stackone-client-ts/funcs/lmsGetSkill.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsGetSkill(stackOne, {
    fields: "id,remote_id,name,active,level",
    id: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsGetSkillRequest](../../sdk/models/operations/lmsgetskillrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsGetSkillResponse](../../sdk/models/operations/lmsgetskillresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUser

Get User

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.getUser({
    fields: "id,remote_id,external_reference,active,email,phone_number,created_at,updated_at,name",
    id: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsGetUser } from "@stackone/stackone-client-ts/funcs/lmsGetUser.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsGetUser(stackOne, {
    fields: "id,remote_id,external_reference,active,email,phone_number,created_at,updated_at,name",
    id: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsGetUserRequest](../../sdk/models/operations/lmsgetuserrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsGetUserResponse](../../sdk/models/operations/lmsgetuserresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUserAssignment

Get User Assignment

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.getUserAssignment({
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsGetUserAssignment } from "@stackone/stackone-client-ts/funcs/lmsGetUserAssignment.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsGetUserAssignment(stackOne, {
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsGetUserAssignmentRequest](../../sdk/models/operations/lmsgetuserassignmentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsGetUserAssignmentResponse](../../sdk/models/operations/lmsgetuserassignmentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUserCompletion

Get User Completion

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.getUserCompletion({
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsGetUserCompletion } from "@stackone/stackone-client-ts/funcs/lmsGetUserCompletion.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsGetUserCompletion(stackOne, {
    id: "<id>",
    subResourceId: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsGetUserCompletionRequest](../../sdk/models/operations/lmsgetusercompletionrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsGetUserCompletionResponse](../../sdk/models/operations/lmsgetusercompletionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAssignments

List Assignments

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.listAssignments({
    fields: "id,remote_id,external_reference,user_id,remote_user_id,course_id,remote_course_id,updated_at,created_at,due_date,status,progress,learning_object_type,learning_object_id,remote_learning_object_id,learning_object_external_reference",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    userId: "c28xyrc55866bvuv",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsListAssignments } from "@stackone/stackone-client-ts/funcs/lmsListAssignments.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsListAssignments(stackOne, {
    fields: "id,remote_id,external_reference,user_id,remote_user_id,course_id,remote_course_id,updated_at,created_at,due_date,status,progress,learning_object_type,learning_object_id,remote_learning_object_id,learning_object_external_reference",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    userId: "c28xyrc55866bvuv",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsListAssignmentsRequest](../../sdk/models/operations/lmslistassignmentsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsListAssignmentsResponse](../../sdk/models/operations/lmslistassignmentsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCategories

List Categories

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.listCategories({
    fields: "id,remote_id,name,active,level,language",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsListCategories } from "@stackone/stackone-client-ts/funcs/lmsListCategories.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsListCategories(stackOne, {
    fields: "id,remote_id,name,active,level,language",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsListCategoriesRequest](../../sdk/models/operations/lmslistcategoriesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsListCategoriesResponse](../../sdk/models/operations/lmslistcategoriesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCompletions

List Completions

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.listCompletions({
    fields: "id,remote_id,external_id,remote_external_id,external_reference,content_id,remote_content_id,course_id,remote_course_id,user_id,remote_user_id,completed_at,updated_at,created_at,result,content_external_reference,learning_object_type,learning_object_id,remote_learning_object_id,learning_object_external_reference",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsListCompletions } from "@stackone/stackone-client-ts/funcs/lmsListCompletions.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsListCompletions(stackOne, {
    fields: "id,remote_id,external_id,remote_external_id,external_reference,content_id,remote_content_id,course_id,remote_course_id,user_id,remote_user_id,completed_at,updated_at,created_at,result,content_external_reference,learning_object_type,learning_object_id,remote_learning_object_id,learning_object_external_reference",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsListCompletionsRequest](../../sdk/models/operations/lmslistcompletionsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsListCompletionsResponse](../../sdk/models/operations/lmslistcompletionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listContent

List Content

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.listContent({
    fields: "id,remote_id,external_reference,course_ids,remote_course_ids,title,description,short_description,languages,content_url,content_type,cover_url,active,duration,order,categories,skills,updated_at,created_at,provider",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsListContent } from "@stackone/stackone-client-ts/funcs/lmsListContent.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsListContent(stackOne, {
    fields: "id,remote_id,external_reference,course_ids,remote_course_ids,title,description,short_description,languages,content_url,content_type,cover_url,active,duration,order,categories,skills,updated_at,created_at,provider",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsListContentRequest](../../sdk/models/operations/lmslistcontentrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsListContentResponse](../../sdk/models/operations/lmslistcontentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCourses

List Courses

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.listCourses({
    fields: "id,remote_id,external_reference,content_ids,remote_content_ids,title,description,languages,cover_url,url,active,duration,categories,skills,updated_at,created_at,content,provider",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsListCourses } from "@stackone/stackone-client-ts/funcs/lmsListCourses.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsListCourses(stackOne, {
    fields: "id,remote_id,external_reference,content_ids,remote_content_ids,title,description,languages,cover_url,url,active,duration,categories,skills,updated_at,created_at,content,provider",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsListCoursesRequest](../../sdk/models/operations/lmslistcoursesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsListCoursesResponse](../../sdk/models/operations/lmslistcoursesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listSkills

List Skills

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.listSkills({
    fields: "id,remote_id,name,active,level",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsListSkills } from "@stackone/stackone-client-ts/funcs/lmsListSkills.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsListSkills(stackOne, {
    fields: "id,remote_id,name,active,level",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsListSkillsRequest](../../sdk/models/operations/lmslistskillsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsListSkillsResponse](../../sdk/models/operations/lmslistskillsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUserAssignments

List User Assignments

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.listUserAssignments({
    fields: "id,remote_id,external_reference,user_id,remote_user_id,course_id,remote_course_id,updated_at,created_at,due_date,status,progress,learning_object_type,learning_object_id,remote_learning_object_id,learning_object_external_reference",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    userId: "c28xyrc55866bvuv",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsListUserAssignments } from "@stackone/stackone-client-ts/funcs/lmsListUserAssignments.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsListUserAssignments(stackOne, {
    fields: "id,remote_id,external_reference,user_id,remote_user_id,course_id,remote_course_id,updated_at,created_at,due_date,status,progress,learning_object_type,learning_object_id,remote_learning_object_id,learning_object_external_reference",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    remoteUserId: "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    userId: "c28xyrc55866bvuv",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsListUserAssignmentsRequest](../../sdk/models/operations/lmslistuserassignmentsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsListUserAssignmentsResponse](../../sdk/models/operations/lmslistuserassignmentsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUserCompletions

List User Completions

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.listUserCompletions({
    fields: "id,remote_id,external_id,remote_external_id,external_reference,content_id,remote_content_id,course_id,remote_course_id,user_id,remote_user_id,completed_at,updated_at,created_at,result,content_external_reference,learning_object_type,learning_object_id,remote_learning_object_id,learning_object_external_reference",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsListUserCompletions } from "@stackone/stackone-client-ts/funcs/lmsListUserCompletions.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsListUserCompletions(stackOne, {
    fields: "id,remote_id,external_id,remote_external_id,external_reference,content_id,remote_content_id,course_id,remote_course_id,user_id,remote_user_id,completed_at,updated_at,created_at,result,content_external_reference,learning_object_type,learning_object_id,remote_learning_object_id,learning_object_external_reference",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    id: "<id>",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsListUserCompletionsRequest](../../sdk/models/operations/lmslistusercompletionsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsListUserCompletionsResponse](../../sdk/models/operations/lmslistusercompletionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUsers

List Users

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.listUsers({
    fields: "id,remote_id,external_reference,active,email,phone_number,created_at,updated_at,name",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsListUsers } from "@stackone/stackone-client-ts/funcs/lmsListUsers.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsListUsers(stackOne, {
    fields: "id,remote_id,external_reference,active,email,phone_number,created_at,updated_at,name",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsListUsersRequest](../../sdk/models/operations/lmslistusersrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsListUsersResponse](../../sdk/models/operations/lmslistusersresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCollection

Update Collection

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { CreateCategoriesApiModelSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.updateCollection({
    lmsCreateCollectionRequestDto: {
      categories: [
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description: "This collection acts as learning pathway for software engineers.",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-collection-1",
      learningObjectIds: [
        "16873-SOFTWARE-ENG-COURSE",
        "16874-SOFTWARE-ENG-COURSE",
      ],
      remoteLearningObjectIds: [
        "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
      ],
      skills: [
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
      ],
      title: "Software Engineer Lv 1 Collection",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
    id: "<id>",
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsUpdateCollection } from "@stackone/stackone-client-ts/funcs/lmsUpdateCollection.js";
import { CreateCategoriesApiModelSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsUpdateCollection(stackOne, {
    lmsCreateCollectionRequestDto: {
      categories: [
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description: "This collection acts as learning pathway for software engineers.",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-collection-1",
      learningObjectIds: [
        "16873-SOFTWARE-ENG-COURSE",
        "16874-SOFTWARE-ENG-COURSE",
      ],
      remoteLearningObjectIds: [
        "e3cb75bf-aa84-466e-a6c1-b8322b257a48",
        "e3cb75bf-aa84-466e-a6c1-b8322b257a49",
      ],
      skills: [
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
      ],
      title: "Software Engineer Lv 1 Collection",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
    id: "<id>",
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsUpdateCollectionRequest](../../sdk/models/operations/lmsupdatecollectionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsUpdateCollectionResponse](../../sdk/models/operations/lmsupdatecollectionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## upsertContent

Upsert Content

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { CreateCategoriesApiModelSchemasValue, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.upsertContent({
    lmsUpsertContentRequestDto: {
      active: true,
      categories: [
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      contentUrl: "https://www.youtube.com/watch?v=16873",
      coverUrl: "https://www.googledrive.com/?v=16873",
      description: "This video acts as learning content for software engineers.",
      duration: "P3Y6M4DT12H30M5S",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      languages: [
        {
          value: LanguageEnumValue.EnGB,
        },
      ],
      order: 1,
      shortDescription: "This course is a valuable resource and acts as learning content for...",
      skills: [
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
      ],
      title: "Software Engineer Lv 1",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsUpsertContent } from "@stackone/stackone-client-ts/funcs/lmsUpsertContent.js";
import { CreateCategoriesApiModelSchemasValue, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsUpsertContent(stackOne, {
    lmsUpsertContentRequestDto: {
      active: true,
      categories: [
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      contentUrl: "https://www.youtube.com/watch?v=16873",
      coverUrl: "https://www.googledrive.com/?v=16873",
      description: "This video acts as learning content for software engineers.",
      duration: "P3Y6M4DT12H30M5S",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      languages: [
        {
          value: LanguageEnumValue.EnGB,
        },
      ],
      order: 1,
      shortDescription: "This course is a valuable resource and acts as learning content for...",
      skills: [
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
      ],
      title: "Software Engineer Lv 1",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
    },
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsUpsertContentRequest](../../sdk/models/operations/lmsupsertcontentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsUpsertContentResponse](../../sdk/models/operations/lmsupsertcontentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## upsertCourse

Upsert Course

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { CreateCategoriesApiModelSchemasValue, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

const stackOne = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const result = await stackOne.lms.upsertCourse({
    lmsUpsertCourseRequestDto: {
      active: true,
      categories: [
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      content: [
        {
          contentUrl: "https://www.youtube.com/watch?v=16873",
          description: "This video acts as learning content for software engineers.",
          order: 1,
          title: "Software Engineer Lv 1",
        },
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description: "This course acts as learning content for software engineers.",
      duration: "P3Y6M4DT12H30M5S",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      languages: [
        {
          value: LanguageEnumValue.EnGB,
        },
      ],
      skills: [
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
      ],
      title: "Software Engineer Lv 1",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      url: "https://www.linkedinlearning.com/?v=16873",
    },
    xAccountId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { lmsUpsertCourse } from "@stackone/stackone-client-ts/funcs/lmsUpsertCourse.js";
import { CreateCategoriesApiModelSchemasValue, LanguageEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await lmsUpsertCourse(stackOne, {
    lmsUpsertCourseRequestDto: {
      active: true,
      categories: [
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
        {
          id: "16873-IT345",
          language: {
            value: CreateCategoriesApiModelSchemasValue.EnGB,
          },
          name: "Information-Technology",
          unifiedCustomFields: {
            "my_project_custom_field_1": "REF-1236",
            "my_project_custom_field_2": "some other value",
          },
        },
      ],
      content: [
        {
          contentUrl: "https://www.youtube.com/watch?v=16873",
          description: "This video acts as learning content for software engineers.",
          order: 1,
          title: "Software Engineer Lv 1",
        },
      ],
      coverUrl: "https://www.googledrive.com/?v=16873",
      description: "This course acts as learning content for software engineers.",
      duration: "P3Y6M4DT12H30M5S",
      externalReference: "SOFTWARE-ENG-LV1-TRAINING-VIDEO-1",
      languages: [
        {
          value: LanguageEnumValue.EnGB,
        },
      ],
      skills: [
        {
          id: "16873-IT345",
          name: "Information-Technology",
        },
      ],
      title: "Software Engineer Lv 1",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      url: "https://www.linkedinlearning.com/?v=16873",
    },
    xAccountId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LmsUpsertCourseRequest](../../sdk/models/operations/lmsupsertcourserequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LmsUpsertCourseResponse](../../sdk/models/operations/lmsupsertcourseresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |
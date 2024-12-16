# Standalone Functions

> [!NOTE]
> This section is useful if you are using a bundler and targetting browsers and
> runtimes where the size of an application affects performance and load times. 

Every method in this SDK is also available as a standalone function. This
alternative API is suitable when targetting the browser or serverless runtimes
and using a bundler to build your application since all unused functionality
will be tree-shaken away. This includes code for unused methods, Zod schemas,
encoding helpers and response handlers. The result is dramatically smaller
impact on the application's final bundle size which grows very slowly as you use
more and more functionality from this SDK.

Calling methods through the main SDK class remains a valid and generally more
more ergonomic option. Standalone functions represent an optimisation for a
specific category of applications.

## Example

```typescript
import { StackOneCore } from "@stackone/stackone-client-ts/core.js";
import { hrisListEmployees } from "@stackone/stackone-client-ts/funcs/hrisListEmployees.js";
import { SDKValidationError } from "@stackone/stackone-client-ts/sdk/models/errors/sdkvalidationerror.js";

// Use `StackOneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const stackOne = new StackOneCore({
  security: {
    password: "",
    username: "",
  },
});

async function run() {
  const res = await hrisListEmployees(stackOne, {
    expand: "company,employments,work_location,home_location,groups",
    fields: "id,remote_id,first_name,last_name,name,display_name,gender,ethnicity,date_of_birth,birthday,marital_status,avatar_url,avatar,personal_email,personal_phone_number,work_email,work_phone_number,job_id,remote_job_id,job_title,job_description,department_id,remote_department_id,department,cost_centers,benefits,company,manager_id,remote_manager_id,hire_date,start_date,tenure,work_anniversary,employment_type,employment_contract_type,employment_status,termination_date,company_name,preferred_language,citizenships,home_location,work_location,employments,custom_fields,documents,created_at,updated_at,employee_number,national_identity_number",
    filter: {
      updatedAfter: "2020-01-01T00:00:00.000Z",
    },
    include: "avatar_url,avatar,custom_fields,job_description,benefits",
    updatedAfter: "2020-01-01T00:00:00.000Z",
    xAccountId: "<value>",
  });

  switch (true) {
    case res.ok:
      // The success case will be handled outside of the switch block
      break;
    case res.error instanceof SDKValidationError:
      // Pretty-print validation errors.
      return console.log(res.error.pretty());
    case res.error instanceof Error:
      return console.log(res.error);
    default:
      // TypeScript's type checking will fail on the following line if the above
      // cases were not exhaustive.
      res.error satisfies never;
      throw new Error("Assertion failed: expected error checks to be exhaustive: " + res.error);
  }


  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

## Result types

Standalone functions differ from SDK methods in that they return a
`Result<Value, Error>` type to capture _known errors_ and document them using
the type system. By avoiding throwing errors, application code maintains clear
control flow and error-handling become part of the regular flow of application
code.

> We use the term "known errors" because standalone functions, and JavaScript
> code in general, can still throw unexpected errors such as `TypeError`s,
> `RangeError`s and `DOMException`s. Exhaustively catching all errors may be
> something this SDK addresses in the future. Nevertheless, there is still a lot
> of benefit from capturing most errors and turning them into values.

The second reason for this style of programming is because these functions will
typically be used in front-end applications where exception throwing is
sometimes discouraged or considered unidiomatic. React and similar ecosystems
and libraries tend to promote this style of programming so that components
render useful content under all states (loading, success, error and so on).

The general pattern when calling standalone functions looks like this:

```typescript
import { Core } from "<sdk-package-name>";
import { fetchSomething } from "<sdk-package-name>/funcs/fetchSomething.js";

const client = new Core();

async function run() {
  const result = await fetchSomething(client, { id: "123" });
  if (!result.ok) {
    // You can throw the error or handle it. It's your choice now.
    throw result.error;
  }

  console.log(result.value);
}

run();
```

Notably, `result.error` above will have an explicit type compared to a try-catch
variation where the error in the catch block can only be of type `unknown` (or
`any` depending on your TypeScript settings).
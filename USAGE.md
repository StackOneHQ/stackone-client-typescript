<!-- Start SDK Example Usage [usage] -->
### List Employees

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

const stackOne = new StackOne({
    security: {
        password: "<YOUR_PASSWORD_HERE>",
    },
});

async function run() {
    const result = await stackOne.hris.listEmployees({
        proxy: {
            key: "<value>",
        },
        xAccountId: "<value>",
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->
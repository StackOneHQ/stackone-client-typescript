<!-- Start SDK Example Usage [usage] -->
### List Employees

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
    const sdk = new StackOne({
        security: {
            password: "<YOUR_PASSWORD_HERE>",
        },
    });

    const result = await sdk.hris.listEmployees({
        proxy: {},
        xAccountId: "<value>",
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->
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

    const res = await sdk.hris.listEmployees({
        proxy: {},
        xAccountId: "string",
    });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    for await (const page of res) {
        // handle page
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->
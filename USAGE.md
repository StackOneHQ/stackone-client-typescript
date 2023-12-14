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
        proxy: {
            key: "string",
        },
        xAccountId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->
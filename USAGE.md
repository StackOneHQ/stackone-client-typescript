<!-- Start SDK Example Usage -->
### List Employees

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async () => {
    const sdk = new StackOne({
        security: {
            password: "",
            username: "",
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
})();

```
<!-- End SDK Example Usage -->
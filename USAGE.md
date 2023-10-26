<!-- Start SDK Example Usage -->


```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async () => {
    const sdk = new StackOne({
        security: {
            password: "",
            username: "",
        },
    });

    const res = await sdk.accounts.deleteAccount({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->
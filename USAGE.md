<!-- Start SDK Example Usage -->


```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AccountsDeleteResponse } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.accounts.accountsDelete({
  id: "<ID>",
}).then((res: AccountsDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->
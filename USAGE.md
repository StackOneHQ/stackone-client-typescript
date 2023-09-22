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
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
}).then((res: AccountsDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->
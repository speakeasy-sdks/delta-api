<!-- Start SDK Example Usage -->


```typescript
import { Delta } from "delta";
import { GetAccountByIdResponse } from "delta/dist/sdk/models/operations";

const sdk = new Delta({
  security: {
    authorization: "",
    platformKey: "",
  },
});

sdk.accounts.getAccountById({
  accountId: "corrupti",
}).then((res: GetAccountByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->
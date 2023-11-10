<!-- Start SDK Example Usage -->
```typescript
import { Delta } from "delta";

(async () => {
    const sdk = new Delta({
        security: {
            authorization: "",
            platformKey: "",
        },
    });

    const res = await sdk.accounts.getAccountById({
        accountId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->
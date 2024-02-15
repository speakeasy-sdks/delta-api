<!-- Start SDK Example Usage [usage] -->
```typescript
import { Delta } from "delta";

async function run() {
    const sdk = new Delta({
        security: {
            authorization: "<YOUR_BEARER_TOKEN_HERE>",
            platformKey: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounts.getAccountById({
        accountId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->